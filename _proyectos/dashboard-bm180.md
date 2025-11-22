---
layout: default
title: Dashboard BMP180
---

# Dashboard – Sensor BMP180

## Datos en tiempo real

<div>
  **Temperatura:** <span id="temp">--</span> °C  
  **Presión:** <span id="press">--</span> Pa  
  **Altitud:** <span id="alt">--</span> m  
</div>

<script>
async function updateBMP() {
  let url = "https://api.thingspeak.com/channels/TU_CHANNEL/feeds/latest.json";

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById("temp").textContent = data.field1;
    document.getElementById("press").textContent = data.field2;
    document.getElementById("alt").textContent = data.field3;

  } catch (err) {
    console.error("Error al pedir datos:", err);
  }
}

updateBMP();
setInterval(updateBMP, 5000);
</script>
