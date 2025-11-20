---
layout: post
title: "Cómo detectar correos phishing con inteligencia artificial"
description: "Aprende a usar Python e IA para identificar correos electrónicos sospechosos y protegerte del phishing en 2025."
tags: [ciberseguridad, phishing, python, google colab]
image: https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg
---

![Detección de phishing](https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg)

El **phishing** sigue siendo una de las amenazas más comunes en internet.  
Con un poco de Python y procesamiento de texto, podemos detectar correos sospechosos.

---

## 🛠️ Ejemplo en Colab
```python
import re

def es_phishing(texto):
    patrones = ["verifica tu cuenta", "urgente", "haz clic aquí", "contraseña"]
    for p in patrones:
        if re.search(p, texto.lower()):
            return True
    return False

correo = "Estimado cliente, haz clic aquí para verificar tu cuenta inmediatamente."
print("¿Phishing?:", es_phishing(correo))
