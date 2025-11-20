---
layout: post
title: "Cómo usar ChatGPT en Google Colab para proyectos de Python"
description: "Aprende a integrar ChatGPT en Google Colab para automatizar tareas, programar más rápido y experimentar con IA."
tags: [chatgpt, google colab, python, inteligencia artificial]
image: https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg
---

![ChatGPT en Google Colab](https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg)

Google Colab es la herramienta favorita de estudiantes y desarrolladores porque permite programar en la nube sin instalaciones.  
En 2025, la integración con **ChatGPT** es una de las formas más rápidas de experimentar con IA.

---

## 🔧 Requisitos
- Cuenta de Google (para acceder a Colab).  
- API key de OpenAI (o el servicio de IA que uses).  

---

## 🛠️ Ejemplo en Colab
```python
!pip install openai

import openai

openai.api_key = "TU_API_KEY"

respuesta = openai.ChatCompletion.create(
  model="gpt-4",
  messages=[
    {"role": "system", "content": "Eres un asistente útil."},
    {"role": "user", "content": "Escribe un haiku sobre Python."}
  ]
)

print(respuesta.choices[0].message["content"])
