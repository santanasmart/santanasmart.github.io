---
layout: default
title: Dashboard Industrial Firebase – BMP180
---

<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

<style>
  body {
    background: #111;
    color: #e5e5e5;
    font-family: "Roboto Mono", monospace;
  }

  .dash-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .card {
    background: #1b1b1b;
    border: 2px solid #333;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px #000;
  }

  .label {
    font-size: 16px;
    color: #aaa;
  }

  .value {
    font-size: 36px;
    font-weight: bold;
    color: #4fc3f7;
  }

  .units {
    font-size: 16px;
    color: #888;
    margin-left: 5px;
  }

  .status-ok {
    color: #4caf50;
  }
  .status-bad {
    color: #f44336;
  }
</style>

# 🏭 Dashboard Industrial – Datos desde Firebase

<div class="dash-container">

  <div class="card">
    <div class="label">Temperatura</div>
    <div class="value"><span id="temp">--</span><span class="units">°C</span></div>
  </div>

  <div class="card">
    <div class="label">Presión</div>
    <div class="value"><span id="press">--</span><span class="units">Pa</span></div>
  </div>

  <div class="card">
    <div class="label">Altitud</div>
    <div class="value"><span bmp-

  const db = firebase.database().ref("sensor");

  db.on("value", snapshot => {
    const data = snapshot.val();

    document.getElementById("temp").textContent  = data.temp;
    document.getElementById("press").textContent = data.press;
    document.getElementById("alt").textContent   = data.alt;

    document.getElementById("status").textContent = "OK";
    document.getElementById("status").className = "value status-ok";
  });
</script>

