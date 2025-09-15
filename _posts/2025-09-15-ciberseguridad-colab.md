---
layout: post
title: "Ciberseguridad en 2025: aprende a analizar contraseñas con Python en Google Colab"
description: "La ciberseguridad es clave en 2025. Descubre un ejemplo práctico en Google Colab para evaluar la fortaleza de contraseñas con Python."
tags: [ciberseguridad, python, google colab, hacking ético, 2025]
image: https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg
---

![Ciberseguridad y Python](https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg)

La **ciberseguridad personal** es un tema urgente en 2025: robo de datos, deepfakes, phishing y fugas de información afectan a millones de usuarios cada día.  
Una buena práctica básica es **revisar la fortaleza de tus contraseñas**.

En este artículo aprenderás cómo hacerlo con un pequeño **script en Python usando Google Colab**, ideal para quienes están empezando en la programación y en la seguridad digital.

---

## ⚡ Qué es Google Colab
[Google Colab](https://colab.research.google.com/) es una plataforma gratuita que permite ejecutar código Python en la nube sin instalar nada en tu ordenador.  
Perfecta para pruebas rápidas y proyectos educativos.

---

## 🛠️ Ejemplo en Python: analizador simple de contraseñas
Copia y pega este código en una celda de Colab:

```python
import re

def evaluar_password(password):
    score = 0
    mensajes = []

    # Longitud mínima
    if len(password) >= 8:
        score += 1
    else:
        mensajes.append("La contraseña debería tener al menos 8 caracteres.")

    # Mayúsculas y minúsculas
    if re.search(r"[A-Z]", password) and re.search(r"[a-z]", password):
        score += 1
    else:
        mensajes.append("Incluye mayúsculas y minúsculas.")

    # Números
    if re.search(r"[0-9]", password):
        score += 1
    else:
        mensajes.append("Añade al menos un número.")

    # Símbolos especiales
    if re.search(r"[@$!%*?&]", password):
        score += 1
    else:
        mensajes.append("Incluye un carácter especial como @$!%*?&.")

    # Resultado
    if score == 4:
        return "Contraseña fuerte 💪"
    else:
        return "Contraseña débil ⚠️\n" + "\n".join(mensajes)

# Prueba el sistema
print(evaluar_password("Santana2025!"))
