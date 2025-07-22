---
layout: post
title: "Conversor de pulgadas a milímetros online"
date: 2025-07-22
categories: [Herramientas]
tags: [conversión, pulgadas, milímetros]
---

¿Quieres convertir pulgadas a milímetros fácilmente? Usa esta herramienta interactiva:

<!-- Conversor insertado aquí -->
<div style="max-width: 400px; margin: auto; padding: 1em; border: 1px solid #ccc; border-radius: 10px;">
  <h2 style="text-align: center;">🔄 Conversor de Pulgadas ⇄ Milímetros</h2>

  <label for="inputValue">Ingresa un valor:</label>
  <input type="number" id="inputValue" step="any" style="width: 100%; padding: 0.5em; margin-bottom: 1em;" />

  <label for="conversionType">Conversión:</label>
  <select id="conversionType" style="width: 100%; padding: 0.5em; margin-bottom: 1em;">
    <option value="inToMm">Pulgadas → Milímetros</option>
    <option value="mmToIn">Milímetros → Pulgadas</option>
  </select>

  <button onclick="convert()" style="width: 100%; padding: 0.75em; background-color: #007BFF; color: white; border: none; border-radius: 5px;">
    Convertir
  </button>

  <div id="result" style="margin-top: 1em; font-weight: bold; text-align: center;"></div>
</div>

<script>
  function convert() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const type = document.getElementById("conversionType").value;
    let resultText = "";

    if (isNaN(value)) {
      resultText = "⚠️ Ingresa un valor válido.";
    } else {
      if (type === "inToMm") {
        const mm = value * 25.4;
        resultText = `${value} pulgadas = ${mm.toFixed(2)} milímetros`;
      } else {
        const inches = value / 25.4;
        resultText = `${value} milímetros = ${inches.toFixed(4)} pulgadas`;
      }
    }

    document.getElementById("result").innerText = resultText;
  }
</script>
