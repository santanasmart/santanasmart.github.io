---
layout: post
title: "Cálculo del par de apriete y esfuerzos en un tornillo M8 – Guía técnica"
date: 2025-07-22
categories: [Ingeniería Mecánica, Cálculos]
tags: [tornillos, torque, par de apriete, fatiga, M8, esfuerzos]
description: "Descubre cómo calcular el par de apriete y la resistencia a carga axial, cortante y cíclica en tornillos métricos M8, incluyendo fórmulas clave y ejemplos reales."
author: SantanaSmart
image: /assets/images/tornillom8.jpg
---
<br><br>
## 🔩 Introducción

<p align="center">
  <img src="/assets/images/tornillom8.jpg" alt="Proteger a bebés del calor en el coche" style="max-width: 100%; height: auto;">
</p>

Los tornillos métricos, como el **M8**, son muy comunes en aplicaciones estructurales y mecánicas. Es fundamental conocer cómo calcular correctamente su **par de apriete**, así como los **esfuerzos a tracción, compresión, cortante y fatiga** que puede soportar.

En esta guía práctica, te mostramos cómo estimar estos valores de forma sencilla y segura.

---
<br><br>
## 📐 Datos del tornillo M8

- **Diámetro nominal**: 8 mm  
- **Paso de rosca estándar**: 1.25 mm  
- **Área resistente (As)**: ≈ 36.6 mm²  
- **Clase del tornillo (resistencia)**: 8.8  
- **Límite elástico (Rp0.2)**: 640 MPa  
- **Resistencia última (Rm)**: 800 MPa  

---
<br><br>
## 🔧 Cálculo del par de apriete

Se usa la fórmula:

\[
T = K \cdot d \cdot F
\]

- \( T \): Par de apriete (Nm)  
- \( K \): Coeficiente de fricción (≈ 0.2)  
- \( d \): Diámetro del tornillo (m)  
- \( F \): Fuerza de apriete (N)

**Carga de diseño para M8 clase 8.8:**

\[
F = 0.9 \cdot A_s \cdot R_{p0.2} = 0.9 \cdot 36.6 \cdot 640 = 21,000 \, \text{N (aprox.)}
\]

**Par de apriete:**

\[
T = 0.2 \cdot 0.008 \cdot 21000 = \boxed{33.6 \, \text{Nm}}
\]

✅ Se recomienda aplicar entre **30 y 35 Nm** para tornillos M8 clase 8.8.

---
<br><br>
## ✂️ Resistencia a corte

\[
F_{\text{corte}} = 0.6 \cdot A_s \cdot R_m = 0.6 \cdot 36.6 \cdot 800 = \boxed{17,600 \, \text{N (aprox.)}}
\]

Esto representa la carga máxima que puede soportar el tornillo en una unión sometida a esfuerzos cortantes puros.

---
<br><br>
## ♻️ Análisis de fatiga

Para esfuerzos cíclicos se aplica el **criterio de Goodman**:

\[
\frac{\sigma_a}{\sigma_e} + \frac{\sigma_m}{\sigma_u} \leq 1
\]

- \( \sigma_e \): Límite de fatiga ≈ 400 MPa  
- \( \sigma_u \): Resistencia última = 800 MPa  
- \( \sigma_a \): Tensión alternante  
- \( \sigma_m \): Tensión media  

### Ejemplo:

Carga variable entre 5,000 y 15,000 N:

\[
\sigma_a = \frac{(15000 - 5000)/2}{A_s} = 137 \, \text{MPa}  
\quad\quad
\sigma_m = \frac{(15000 + 5000)/2}{A_s} = 273 \, \text{MPa}
\]

\[
\frac{137}{400} + \frac{273}{800} = 0.34 + 0.34 = \boxed{0.68 < 1} \Rightarrow ✅ Apto para fatiga
\]

---
<br><br>
## 🧮 Resumen

| Parámetro                    | Valor estimado          |
|-----------------------------|--------------------------|
| Par de apriete              | 33–35 Nm                |
| Carga axial límite (tracción) | ≈ 21,000 N             |
| Carga de corte máxima       | ≈ 17,600 N              |
| Apto para cargas cíclicas   | Sí (variación hasta 10 kN) |

---
<br><br>
## 📎 Conclusión

Calcular correctamente el par de apriete y los esfuerzos admisibles es clave para garantizar la **seguridad y durabilidad** en cualquier sistema atornillado. En aplicaciones críticas, nunca olvides considerar la **fatiga** y el **tipo de carga**.

---
<br><br>
¿Te gustaría que subamos una hoja de cálculo o herramienta interactiva para estos cálculos? ¡Déjalo en los comentarios o contáctanos! 💬
