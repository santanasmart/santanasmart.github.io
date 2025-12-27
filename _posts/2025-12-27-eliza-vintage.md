---
title: "The Roots of Conversational AI: ELIZA and the DOCTOR Script"
date: 2025-10-24
categories: [AI History, NLP, Computer Science]
tags: [ELIZA, NLP, Chatbots, AI History, Joseph Weizenbaum]
image: /assets/images/eliza-vintage.jpg
description: "Analizamos a ELIZA, el primer chatbot de la historia, y cómo su script DOCTOR sentó las bases de la interacción humano-máquina en los años 60."
---

# 🤖 The Origins of Natural Language Processing
## ELIZA: The Mother of All Chatbots

![ELIZA Computer Interface](/assets/images/eliza-vintage.jpg)

En la actualidad, estamos acostumbrados a interactuar con modelos de lenguaje masivos (LLMs). Sin embargo, para entender hacia dónde vamos, debemos mirar hacia atrás.  
En esta entrega exploramos un hito de la computación: **ELIZA**, un programa que en 1964 demostró que la comunicación entre humanos y máquinas era posible, incluso con una lógica técnica sorprendentemente simple.

---

## 🔍 Descripción general

[**ELIZA**](https://web.mit.edu/STS.035/www/PDFs/eliza.pdf) es un programa de procesamiento de lenguaje natural escrito por **Joseph Weizenbaum** en el MIT entre 1964 y 1966. 
Su objetivo era simular una conversación mediante un sistema de "scripts". El más famoso de ellos, **DOCTOR**, emulaba a un psicoterapeuta Rogeriano, devolviendo las afirmaciones del usuario en forma de preguntas.

A pesar de carecer de una base de datos de conocimiento o una arquitectura de aprendizaje profundo, ELIZA logró algo inesperado: el **"Efecto ELIZA"**, donde los usuarios atribuían una comprensión real y empatía a una serie de líneas de código.

---

## ⚙️ Características principales

- 🛠️ **Arquitectura basada en Scripts**: No era un modelo monolítico; su comportamiento dependía totalmente del script cargado (siendo DOCTOR el más icónico).
- 🧩 **Pattern Matching (Reconocimiento de patrones)**: Identificaba palabras clave en la entrada del usuario mediante reglas predefinidas.
- 🔄 **Transformación de oraciones**: Utilizaba reglas de descomposición y reensamblaje para invertir pronombres (p.ej., de "Mi madre" a "Tu madre").
- ⏳ **Bajo consumo de recursos**: Funcionaba en sistemas de tiempo compartido como el IBM 7094, una fracción de la potencia de cualquier sensor IoT moderno.
- 🧠 **Sin estado (Stateless)**: A diferencia de los modelos actuales, ELIZA no "aprendía" de la conversación; cada respuesta era una reacción inmediata al último input.

---

## 🧩 El "Efecto ELIZA" en la sociedad

Lo que comenzó como un experimento técnico se convirtió en un estudio psicológico. Weizenbaum observó con preocupación cómo las personas:
1.  **Antropomorfizaban** la máquina rápidamente.
2.  Compartían secretos íntimos con el programa.
3.  Creían que la máquina realmente "entendía" sus problemas.

Este fenómeno sigue vigente hoy en día cuando interactuamos con asistentes virtuales y modelos generativos, subrayando la importancia de la **ética en la IA**.

---

## 🛰️ Lógica de Procesamiento

El flujo de trabajo de ELIZA se puede resumir en tres pasos técnicos:

1.  **Escaneo:** El input se limpia y se busca la palabra clave con el mayor "rango" de prioridad.
2.  **Descomposición:** Si se encuentra "Yo estoy *X*", el sistema fragmenta la oración.
3.  **Reensamblaje:** Se aplica una regla de respuesta, como "¿Por qué dice usted que está *X*?".

---

## 🧠 Ejemplo de Interacción (Log Técnico)

El siguiente bloque muestra una traza típica de una sesión con el script DOCTOR:

```json
{
  "input": "I am feeling worried about my future",
  "detected_keyword": "I am",
  "transformation_rule": "How long have you been feeling $1?",
  "output": "How long have you been feeling worried about your future?",
  "status": "simulation_active"
}
