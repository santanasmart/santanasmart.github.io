---
layout: post
title: "Cómo montar tu propio asistente de voz con Python"
description: "Aprende paso a paso a crear un asistente de voz estilo Alexa con Python y librerías open source."
tags: [python, asistente de voz, programación, IA]
image: https://images.pexels.com/photos/4145352/pexels-photo-4145352.jpeg
---

![Asistente de voz con Python](https://images.pexels.com/photos/4145352/pexels-photo-4145352.jpeg)

Crear tu propio **asistente de voz** es más fácil de lo que crees gracias a Python.

---

## 🛠️ Código en Colab
```python
import speech_recognition as sr
import pyttsx3

r = sr.Recognizer()
engine = pyttsx3.init()

with sr.Microphone() as source:
    print("Habla algo...")
    audio = r.listen(source)
    texto = r.recognize_google(audio, language="es-ES")

print("Dijiste:", texto)
engine.say("Has dicho " + texto)
engine.runAndWait()
