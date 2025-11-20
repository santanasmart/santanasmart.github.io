---
layout: post
title: "Arranque rápido con LILYGO T-SIM7600 (ESP32 + SIM7600)"
description: "Guía paso a paso para clonar ejemplos, cablear antenas y SIM, compilar con PlatformIO o Arduino IDE y verificar la conexión de red con el módem SIM7600."
tags: [LILYGO, T-SIM7600, ESP32, SIM7600, IoT, PlatformIO, Arduino]
image: https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg
---

![LILYGO T-SIM7600](https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg)

En esta guía pondrás en marcha tu **LILYGO T-SIM7600** en minutos: descargarás el código de ejemplo, **conectarás antenas y SIM**, compilarás con **PlatformIO** (VS Code) o **Arduino IDE**, y comprobarás por **Serial** que el módem detecta la tarjeta y se registra en la red.

> ✅ Resultado esperado: salida por puerto serie indicando *“SIM card detected”* y *“SIM7600G connected to network”*.

---

## 1) Requisitos

**Hardware**
- Placa **LILYGO T-SIM7600** (ESP32 + módem 4G).
- **Cable USB** (datos) para alimentación y programación.
- Antena **LTE** (SIM) y antena **GPS**.
- **Tarjeta SIM** con datos (sin PIN o con PIN conocido).

**Software**
- **VS Code + PlatformIO** *o* **Arduino IDE**.
- Controladores USB/serial instalados (según tu sistema).

---

## 2) Descarga de ejemplos

1. Abre el repositorio oficial del **T-SIM7600**.
2. Pulsa **Code → Download ZIP** y guarda el archivo.
3. **Extrae** el ZIP: dentro encontrarás los **ejemplos** listos para usar.

> También puedes clonar con `git clone`, pero descargar el ZIP es lo más rápido.

---

## 3) Conexiones físicas

1. Conecta **USB ↔️ interfaz TTL/USB** de la placa.
2. Atornilla/conecta la **antena LTE** y la **antena GPS** en los puertos marcados.
3. Inserta la **SIM** en la ranura correspondiente (formato nano-SIM).  
4. Selecciona el **modo** correcto con los interruptores de la placa:
   - **ESP32 programming**: para cargar firmware desde VS Code/Arduino.
   - **USB modem**: para usar la placa como módem en un PC (opcional).
5. Alimenta por USB (5V).

---

## 4) Opción A — PlatformIO (VS Code)

1. En la carpeta extraída, **clic derecho** en un espacio vacío → **Open with VS Code**.
2. Abre `platformio.ini`. En la sección de entornos:
   - Asegúrate de que solo quede **un** `default_envs = ...` **activo** (comenta el resto).
3. Abre el ejemplo **“all functions”** (o similar) en `src/`.
4. **Compila** (icono ✓ abajo a la izquierda).
5. **Sube** el firmware (icono →).

> Si tu SIM requiere **APN**, edítalo en el ejemplo (variables tipo `APN`, `USER`, `PASS`).

---

## 5) Opción B — Arduino IDE

1. Copia las **librerías** del repo a tu carpeta de Arduino:

C:\Users<TU_USUARIO>\Documents\Arduino\libraries\


(En macOS: `~/Documents/Arduino/libraries`)

2. Abre el **ejemplo de fábrica** (Factory Example) incluido.
3. Instala desde **Library Manager**:
- **TinyGSM**
- **StreamDebugger**
- **Blynk NCP Driver** *(si el ejemplo lo solicita)*
4. Selecciona la **placa ESP32** correcta y el **puerto**.
5. **Compila** y **sube**.

---

## 6) Monitor serie y verificación

1. Abre el **Serial Monitor** con el **baud** indicado por el ejemplo (p. ej., `115200`).
2. Espera la inicialización del módem:
- `SIM card detected` ✅
- Registro de red (`CREG`/`CGREG` o mensaje *connected to network*) ✅
3. Si configuraste APN, comprueba que obtiene **IP** y que los comandos **AT** responden.

---

## 7) Problemas frecuentes (y solución)

- **No detecta la SIM**
- Revisa orientación de la **SIM** y que el **PIN** esté desactivado (o configúralo en el sketch).
- Prueba otra SIM o operador.
- **Sin registro de red**
- Verifica **antena LTE** bien fijada.
- Coloca la placa en zona con **cobertura 4G**.
- Configura **APN/USER/PASS** del operador (`TinyGSM.setNetworkSettings(...)` o macros del ejemplo).
- **No compila en PlatformIO**
- Deja **solo un** `default_envs` activo en `platformio.ini`.
- Ejecuta **“Rebuild IntelliSense Index”** en PIO si hay errores falsos.
- **Arduino no encuentra librerías**
- Confirma que las carpetas están dentro de `Documents/Arduino/libraries/` y reinicia el IDE.
- **No aparece el puerto**
- Cambia de cable USB (datos), prueba otro puerto o instala el **driver** del conversor USB-serial.

---

## 8) Snippet de prueba (TinyGSM, opcional)

> Úsalo si quieres validar rápido **AT** y APN (adapta `APN`, `USER`, `PASS`):

```cpp
#include <TinyGsmClient.h>
#define TINY_GSM_MODEM_SIM7600
#define SerialMon Serial
#define SerialAT  Serial1

const char apn[]  = "tu.apn";
const char user[] = "";
const char pass[] = "";

TinyGsm modem(SerialAT);

void setup() {
SerialMon.begin(115200);
delay(3000);

// UART al módem (revisa pines según tu placa)
SerialAT.begin(115200, SERIAL_8N1, 26, 27); // RX, TX de ejemplo en ESP32
delay(3000);

SerialMon.println("Iniciando módem...");
modem.restart();

String sim = modem.getSimCCID();
SerialMon.print("SIM: "); SerialMon.println(sim);

SerialMon.println("Registrando red...");
if (!modem.waitForNetwork(60000)) {
 SerialMon.println("No hay red");
 return;
}
SerialMon.println("Red OK");

SerialMon.print("Conectando APN: "); SerialMon.println(apn);
if (!modem.gprsConnect(apn, user, pass)) {
 SerialMon.println("Fallo GPRS");
} else {
 SerialMon.println("GPRS conectado");
 SerialMon.print("IP: "); SerialMon.println(modem.localIP());
}
}

void loop() {
// Aquí tu lógica: MQTT/HTTP/HTTPS...
delay(10000);
}

Pines UART (26/27) son ejemplo; confirma el mapeo de tu T-SIM7600 y ajusta.

9) Siguientes pasos

Enviar HTTP/MQTT a tu backend.

Probar GPS con NMEA y fijar posición.

Ahorrar energía con modos de bajo consumo del ESP32 y del módem.

Conclusión

Conectar antenas, SIM y cargar un ejemplo es suficiente para verificar que la T-SIM7600 detecta la tarjeta y se registra en red. Desde ahí, puedes integrar APIs, MQTT, telemetría y geolocalización en tus proyectos IoT.
