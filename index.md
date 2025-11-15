---
layout: home
title: "SantanaSmart Blog"
description: "Reflexiones, aprendizajes y proyectos personales sobre innovación, tecnología y desarrollo profesional."
pagination:
  enabled: true
---

# Bienvenido a mi espacio personal

¡Hola! 👋  
Soy **SantanaSmart**, y este es mi blog personal donde comparto **ideas, aprendizajes y proyectos** relacionados con la innovación, la tecnología y el mundo profesional.  

Mi objetivo es inspirarte, ayudarte a aprender y, de paso, compartir experiencias que quizás te resulten útiles en tu propio camino.

---

## ✨ Lo que encontrarás aquí

- **Reflexiones y consejos** sobre productividad, innovación y desarrollo profesional.  
- **Proyectos personales** y casos prácticos que me han enseñado algo valioso.  
- **Noticias y tendencias** en tecnología e industria.  

No es un blog corporativo; es mi espacio para **aprender contigo y compartir conocimiento de manera honesta y cercana**.

---

## 📰 Últimos artículos

{% for post in paginator.posts %}
### [{{ post.title }}]({{ post.url }})
**Publicado el {{ post.date | date: "%d %B %Y" }}**  

{{ post.excerpt | strip_html | truncate: 180 }}  
[Leer más →]({{ post.url }})
{% endfor %}

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
  <a href="{{ paginator.previous_page_path }}" class="previous">&larr; Anterior</a>
  {% endif %}
  
  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span class="current">{{ page }}</span>
    {% else %}
      <a href="{{ paginator.paginate_path | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}
  
  {% if paginator.next_page %}
  <a href="{{ paginator.next_page_path }}" class="next">Siguiente &rarr;</a>
  {% endif %}
</div>
{% endif %}

---

## 📬 Conecta conmigo

Me encanta recibir mensajes y conversar sobre ideas y proyectos.  
Puedes escribirme a **[santanasmart@proton.me](mailto:santanasmart@proton.me)** o seguirme en mis redes:  

- [Twitter](https://twitter.com/santanasmart)  
- [LinkedIn](https://www.linkedin.com/in/santanasmart)  
- [GitHub](https://github.com/santanasmart)  

---

> "Aprender y compartir es la mejor manera de crecer juntos."  
> – SantanaSmart


