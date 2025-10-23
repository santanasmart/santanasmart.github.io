---
title: "Battery Powered Wireless IoT Solutions: SEN21310 NB-IoT Water Rope Sensor"
date: 2025-10-23
categories: [IoT, Smart Sensors, NB-IoT]
tags: [NB-IoT, water sensor, battery powered, smart building, IoT monitoring]
image: /assets/images/nbiot-water.jpg
description: "Exploramos el SEN21310, un sensor NB-IoT alimentado por batería diseñado para la detección de fugas de agua en edificios inteligentes e infraestructuras críticas."
---

# 💧 Battery Powered Wireless IoT Solutions  
## SEN21310 NB-IoT Water Rope Sensor

![SEN21310 NB-IoT Water Rope Sensor](/assets/images/nbiot-water.jpg)

En la creciente era del Internet de las Cosas (IoT), la monitorización inalámbrica y la gestión inteligente de infraestructuras críticas se han vuelto esenciales.  
En esta entrega de la serie **Battery Powered Wireless IoT Solutions**, exploramos un dispositivo clave para la detección temprana de fugas: el **SEN21310 NB-IoT Water Rope Sensor**.

---

## 🔍 Descripción general

El [**SEN21310**](https://s3.ap-northeast-1.amazonaws.com/www.senso8.com/senso8_datasheet/NBIoT/DS_SEN21310-Wxxx.pdf)
es un sensor de detección de fugas de agua alimentado por batería que utiliza **tecnología NB-IoT** para una comunicación fiable y de bajo consumo energético.  
Está diseñado para entornos donde la prevención de daños por agua es crucial, como centros de datos, salas técnicas, edificios inteligentes, y sistemas industriales.

Su diseño compacto y su capacidad para funcionar con batería durante años lo convierten en una solución *plug-and-play* para aplicaciones de monitoreo remoto sin necesidad de mantenimiento constante.

---

## ⚙️ Características principales

- 🔋 **Alimentación por batería**: vida útil de hasta **5 años** (dependiendo de la frecuencia de transmisión).  
- 🌐 **Conectividad NB-IoT**: red celular de baja potencia y amplio alcance, ideal para IoT industrial.  
- 💦 **Sensor tipo “rope” o cuerda**: detecta la presencia de agua a lo largo de su longitud, cubriendo áreas extensas.  
- 📡 **Transmisión automática de eventos**: envía alertas inmediatas ante la detección de humedad.  
- 🧠 **Configuración remota**: permite ajustar intervalos de muestreo, sensibilidad y parámetros de red.  
- 🧱 **Diseño robusto**: carcasa resistente al polvo y salpicaduras (IP65).  
- 🔄 **Fácil integración** con plataformas IoT como ThingsBoard, AWS IoT, Azure o MQTT personalizados.

---

## 🧩 Aplicaciones típicas

El **SEN21310** puede instalarse en una amplia variedad de entornos donde la presencia de agua representa un riesgo operativo:

- 🏢 **Edificios inteligentes**: monitoreo de fugas bajo suelos técnicos o falsos techos.  
- 🖥️ **Centros de datos (Data Centers)**: detección temprana de humedad en salas de servidores.  
- 🏭 **Instalaciones industriales**: control de fugas en sistemas de refrigeración o bombas.  
- 🧊 **Cámaras frigoríficas**: prevención de condensación o goteo excesivo.  
- 🏡 **Domótica residencial**: integración con sistemas inteligentes de seguridad y alerta.

---

## 🛰️ Arquitectura de comunicación

El sensor **SEN21310** utiliza **NB-IoT (Narrowband IoT)**, una tecnología celular basada en LTE optimizada para comunicaciones de bajo ancho de banda y alta penetración.  
Esto le permite:

- Operar incluso en sótanos o lugares con baja cobertura.  
- Consumir muy poca energía en modo standby.  
- Mantener una conexión segura y cifrada con el servidor IoT.  

El dispositivo puede enviar los datos directamente a **ThingsBoard Cloud**, donde se almacenan, visualizan y analizan en tiempo real mediante paneles personalizables.

---

## 🧠 Ejemplo de integración con ThingsBoard

El siguiente ejemplo muestra cómo un dispositivo SEN21310 podría integrarse a ThingsBoard mediante **HTTP o MQTT**:

```json
{
  "device": "SEN21310",
  "data": {
    "leak_detected": true,
    "battery_voltage": 3.6,
    "signal_strength": -82,
    "timestamp": "2025-10-23T14:32:00Z"
  }
}
