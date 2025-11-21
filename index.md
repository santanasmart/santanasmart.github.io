---
layout: default
title: "SantanaSmart Blog"
---

<!-- Hero Section -->
<section class="relative bg-gray-100 min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 md:px-8 text-center" data-aos="fade-up">
  
  <!-- Imagen de fondo -->
  <div class="absolute inset-0">
    <img src="{{ site.baseurl }}/assets/images/fondo.jpg" 
         alt="Fondo SantanaSmart"
         class="w-full h-full object-cover opacity-70">
  </div>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black opacity-20"></div>

  <!-- Contenido encima -->
  <div class="relative z-10">
    <img src="{{ site.baseurl }}/assets/images/logo.webp" 
         alt="SantanaSmart" 
         class="mx-auto mb-6 w-28 sm:w-36 md:w-44 lg:w-52" 
         data-aos="zoom-in" 
         data-aos-delay="200">

    <!-- Título principal -->
   <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight drop-shadow-lg">
     SantanaSmart
   </h2>

    <!-- Párrafo descriptivo -->
    <p class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-100 leading-relaxed drop-shadow-md" 
       data-aos="fade-up" 
       data-aos-delay="800">
       Este es un espacio donde comparto ideas, reflexiones, proyectos personales y cualquier tema que me apasione.  
       Aquí encontrarás artículos sobre tecnología, creatividad, desarrollo personal y curiosidades del día a día.
    </p>

    <!-- Botón adaptable -->
    <a href="#articulos" 
       class="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 text-sm sm:text-base md:text-lg shadow-lg" 
       data-aos="zoom-in" 
       data-aos-delay="800">
       Leer los artículos
    </a>
  </div>
</section>

<!-- Sobre mí -->
<section id="sobre-mi" class="py-32 bg-white" data-aos="fade-up">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold mb-12">Sobre mí</h2>
    <p class="text-lg mb-6">
      Hola, soy el autor de SantanaSmart. Me gusta explorar temas de tecnología, creatividad y desarrollo personal, y este blog es mi espacio para compartir lo que aprendo y pienso.
    </p>
    <p class="text-lg">
      Me encanta escribir, investigar y compartir recursos útiles o curiosidades que puedan inspirar o ayudar a otras personas.  
      Aquí encontrarás reflexiones personales, proyectos propios y descubrimientos que me parecen interesantes.
    </p>
  </div>
</section>

<!-- Artículos -->
<section id="articulos" class="py-32 bg-gray-50">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold mb-16" data-aos="fade-up">Últimos Artículos</h2>

    <div class="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

      <!-- Card 1 -->
      <div class="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-right">
        <img src="{{ site.baseurl }}/assets/images/asesoria.jpg" alt="Artículo 1" class="w-full h-48 object-cover">
        <div class="p-6 text-left">
          <h3 class="text-1xl font-semibold mb-3">Reflexiones sobre creatividad</h3>
          Un vistazo a cómo la creatividad influye en nuestro día a día y algunas técnicas para potenciarla en proyectos personales.
        </div>
      </div>

      <!-- Card 2 -->
      <div class="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-up">
        <img src="{{ site.baseurl }}/assets/images/desarrollo.jpg" alt="Artículo 2" class="w-full h-48 object-cover">
        <div class="p-6 text-left">
          <h3 class="text-1xl font-semibold mb-3">Tecnología y vida diaria</h3>
          Explorando cómo la tecnología puede mejorar nuestras rutinas, aprendizaje y proyectos personales de manera simple y práctica.
        </div>
      </div>

      <!-- Card 3 -->
      <div class="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-left">
        <img src="{{ site.baseurl }}/assets/images/energetico.jpg" alt="Artículo 3" class="w-full h-48 object-cover">
        <div class="p-6 text-left">
          <h3 class="text-1xl font-semibold mb-3">Proyectos personales</h3>
          Ideas, aprendizajes y resultados de los proyectos que desarrollo por curiosidad o para aprender nuevas habilidades.
        </div>
      </div>

    </div>
  </div>
</section>







