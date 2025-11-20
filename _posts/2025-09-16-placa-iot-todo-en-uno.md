---
layout: post
title: "La placa IoT que necesito en 2025: LTE-M, NB-IoT, GNSS y ultra-bajo consumo en un solo equipo"
description: "Guía práctica para elegir y poner en marcha una placa IoT con ESP32-S3, módem LTE-M/NB-IoT, GNSS y soporte Arduino/PlatformIO/ESP-IDF."
tags: [IoT, ESP32-S3, LTE-M, NB-IoT, GNSS, MQTT, PlatformIO, Arduino, bajo consumo]
image: https://images.pexels.com/photos/163140/board-electronics-computer-data-163140.jpeg
---

![Placa IoT integrada](https://images.pexels.com/photos/163140/board-electronics-computer-data-163140.jpeg)

Si vas a desplegar **sensores en campo** o **seguimiento de activos**, mezclar placas sueltas (MCU + módem + GNSS) es perder tiempo y fiabilidad. En 2025 ya hay **placas integradas** que resuelven todo de una: **ESP32-S3** para lógica y conectividad local, **módem celular** con **LTE-M/NB-IoT** para enviar datos donde no hay Wi-Fi, y **GNSS** para geolocalizar. En este post te cuento **cómo evaluarlas** y **cómo arrancar** sin dolores de cabeza.

---

## 🧠 Hardware clave (qué mirar antes de comprar)

- **MCU**: ESP32-S3 (2 núcleos @ 240 MHz) con aceleración para IA ligera, **Wi-Fi** y **BLE 5**.  
- **Memoria**: mínimo **16 MB flash** y **2 MB PSRAM** para librerías de red, TLS y buffers.  
- **Celular**: módem **LTE-M + NB-IoT** con control por **AT**, **eSIM/SIM** y **bandas** compatibles con tu país.  
- **GNSS**: soporte multi-constelación (GPS/Galileo/BeiDou) y conector para antena externa.  
- **I/O**: ~**24 GPIO** a 3.3 V, buses I²C/SPI/UART, ADC y PWM disponibles.  
- **Alimentación**: cargador Li-Ion integrado, lectura de batería y consumo en **deep-sleep < 20 µA**.  
- **Conectores**: **USB nativo** (sin convertidor TTL), pads para expansión y ranura u.FL/SMA para antenas.

> **Consejo**: verifica **bandas LTE** de tu operador y la **cobertura NB-IoT/LTE-M** en tus zonas de despliegue. Evita sorpresas.

---

## 📶 LTE-M vs NB-IoT: elige por escenario

| Si necesitas… | Usa |
|---|---|
| Mensajes pequeños cada X horas, máxima autonomía, buena penetración indoor | **NB-IoT** |
| Telemetría más frecuente, **baja latencia**, dispositivo **en movimiento** (vehículos/activos) | **LTE-M** |

Lo ideal es que la placa soporte **ambas** y puedas **cambiar por software** según país o proyecto.

---

## 🚀 Puesta en marcha en 10 pasos (PlatformIO)

1. **Clona/descarga** los ejemplos del fabricante.  
2. Abre el proyecto en **VS Code + PlatformIO**.  
3. En `platformio.ini`, deja **un solo** `default_envs` activo.  
4. Conecta **antena LTE** y **antena GNSS**; inserta **SIM** (sin PIN o configurable).  
5. Selecciona **puerto** y **placa** correctos.  
6. Configura **APN/USER/PASS** de tu operador.  
7. Compila (✓) y **sube** el firmware (→).  
8. Abre **Monitor Serie** (p.ej. 115200 baud).  
9. Espera **registro de red** y **IP**.  
10. Prueba un **HTTP/MQTT** de ejemplo.

---

## 🧪 Ejemplo MQTT (TinyGSM + PubSubClient)

> Ajusta pines UART según tu placa; completa `APN` y broker MQTT.

```cpp
#include <TinyGsmClient.h>
#include <PubSubClient.h>

#define TINY_GSM_MODEM_SIM7600   // o el que corresponda
#define SerialMon Serial
#define SerialAT  Serial1        // UART del módem

// Credenciales red móvil
const char* APN  = "tu.apn";
const char* USER = "";
const char* PASS = "";

// MQTT
const char* BROKER = "test.mosquitto.org";
const int   PORT   = 1883;
const char* TOPIC  = "santanasmart/demo";

TinyGsm        modem(SerialAT);
TinyGsmClient  net(modem);
PubSubClient   mqtt(net);

void reconnectMQTT() {
  while (!mqtt.connected()) {
    if (mqtt.connect("iot-client-santanasmart")) {
      mqtt.publish(TOPIC, "hello from LTE-M/NB-IoT");
    } else {
      delay(2000);
    }
  }
}

void setup() {
  SerialMon.begin(115200);
  delay(2000);

  // UART módem: revisa GPIO RX/TX reales de tu placa
  SerialAT.begin(115200, SERIAL_8N1, 26, 27);
  delay(3000);

  SerialMon.println("Reiniciando módem…");
  modem.restart();

  SerialMon.println("Esperando red…");
  if (!modem.waitForNetwork(60000)) {
    SerialMon.println("Sin red");
    return;
  }
  SerialMon.println("Red OK");

  SerialMon.print("Conectando APN: "); SerialMon.println(APN);
  if (!modem.gprsConnect(APN, USER, PASS)) {
    SerialMon.println("GPRS fail");
    return;
  }
  SerialMon.print("IP: "); SerialMon.println(modem.localIP());

  mqtt.setServer(BROKER, PORT);
  reconnectMQTT();
  mqtt.publish(TOPIC, "device online");
}

void loop() {
  if (!mqtt.connected()) reconnectMQTT();
  mqtt.loop();

  // Publica cada 30 s
  static uint32_t last = 0;
  if (millis() - last > 30000) {
    last = millis();
    mqtt.publish(TOPIC, "tick");
  }
}


Tip: si tu operador usa CGDCONT específico, añade comando AT previo (AT+CGDCONT=1,"IP","APN").

🛰️ GNSS en 3 minutos (lectura NMEA)

Conecta la antena GNSS y espera cielo abierto.

Activa GNSS con AT (según módem).

Lee NMEA por UART del módem y parsea ($GPGGA, $GPRMC).

Envía lat/lon por MQTT junto a tu telemetría.

🔋 Presupuesto de energía (regla rápida)

Deep-sleep MCU: 10–20 µA

Módem dormido: 1–3 mA (según módulo)

Burst TX LTE-M: 200–500 mA (picos cortos)

Estrategia: despierta cada X minutos, toma sensores, envía en un único payload y vuelve a deep-sleep. Con panel solar pequeño puedes funcionar meses.

🛡️ Checklist de robustez para campo
