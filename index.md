---
layout: default
title: "SantanaSmart Blog"
---

<!-- Hero Section con diseño moderno -->
<section class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 md:px-8 text-center">
  
  <!-- Gradiente animado de fondo -->
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900"></div>
  
  <!-- Partículas animadas -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="particles">
      <span class="particle" style="--x:20%; --y:80%; --duration:25s;"></span>
      <span class="particle" style="--x:80%; --y:20%; --duration:30s;"></span>
      <span class="particle" style="--x:40%; --y:60%; --duration:20s;"></span>
      <span class="particle" style="--x:60%; --y:40%; --duration:35s;"></span>
      <span class="particle" style="--x:70%; --y:70%; --duration:28s;"></span>
    </div>
  </div>

  <!-- Imagen de fondo con efecto parallax -->
  <div class="absolute inset-0 opacity-20">
    <img src="{{ site.baseurl }}/assets/images/fondo.jpg" 
         alt="Fondo SantanaSmart"
         class="w-full h-full object-cover">
  </div>

  <!-- Contenido encima -->
  <div class="relative z-10 max-w-5xl mx-auto">
    <!-- Logo con animación flotante -->
    <div class="mb-8">
      <img src="{{ site.baseurl }}/assets/images/logo.jpg" 
           alt="SantanaSmart" 
           class="mx-auto w-28 sm:w-36 md:w-44 lg:w-52 rounded-full shadow-2xl border-4 border-white/20 animate-float">
    </div>

    <!-- Título principal con efecto de escritura -->
    <div class="mb-8">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
          SantanaSmart
        </span>
      </h1>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-6 typing-effect">
        Bienvenido a mi Blog Personal
      </h2>
    </div>

    <!-- Párrafo descriptivo -->
    <p class="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/80 leading-relaxed">
      Este es un espacio donde comparto ideas, reflexiones, proyectos personales y cualquier tema que me apasione.  
      Aquí encontrarás artículos sobre tecnología, creatividad, desarrollo personal y curiosidades del día a día.
    </p>

    <!-- Botones con efecto de brillo -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#articulos" 
         class="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl glow-button">
        <span class="flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          Leer los artículos
        </span>
      </a>
      
      <a href="#sobre-mi" 
         class="px-8 py-4 rounded-full font-semibold text-gray-800 bg-white/90 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
        <span class="flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Conóceme
        </span>
      </a>
    </div>
  </div>
  
  <!-- Indicador de scroll -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

<!-- Sobre mí con diseño moderno -->
<section id="sobre-mi" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  <!-- Elemento decorativo -->
  <div class="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
  
  <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
    <div class="mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
        Sobre mí
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
    </div>
    
    <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 items-center">
        <div class="md:col-span-1">
          <div class="relative">
            <img src="{{ site.baseurl }}/assets/images/profile.jpg" alt="SantanaSmart" 
                 class="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl">
            <div class="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full p-3 shadow-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="md:col-span-2 text-left">
          <p class="text-lg mb-6 text-gray-700">
            Hola, soy el autor de <span class="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SantanaSmart</span>. Me gusta explorar temas de tecnología, creatividad y desarrollo personal, y este blog es mi espacio para compartir lo que aprendo y pienso.
          </p>
          <p class="text-lg text-gray-700">
            Me encanta escribir, investigar y compartir recursos útiles o curiosidades que puedan inspirar o ayudar a otras personas.  
            Aquí encontrarás reflexiones personales, proyectos propios y descubrimientos que me parecen interesantes.
          </p>
          
          <!-- Habilidades/Intereses -->
          <div class="mt-8 flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Tecnología</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Creatividad</span>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Desarrollo Personal</span>
            <span class="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Proyectos</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Curiosidades</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Artículos con diseño moderno -->
<section id="articulos" class="py-24 bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
        Últimos Artículos
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
    </div>

    <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- Card 1 -->
      <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div class="relative overflow-hidden h-48">
          <img src="{{ site.baseurl }}/assets/images/articulo1.jpg" alt="Reflexiones sobre creatividad" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span class="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">Creatividad</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">Reflexiones sobre creatividad</h3>
          <p class="text-gray-600 mb-4">Un vistazo a cómo la creatividad influye en nuestro día a día y algunas técnicas para potenciarla en proyectos personales.</p>
          <a href="#" class="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300">
            Leer más
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div class="relative overflow-hidden h-48">
          <img src="{{ site.baseurl }}/assets/images/articulo2.jpg" alt="Tecnología y vida diaria" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span class="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">Tecnología</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">Tecnología y vida diaria</h3>
          <p class="text-gray-600 mb-4">Explorando cómo la tecnología puede mejorar nuestras rutinas, aprendizaje y proyectos personales de manera simple y práctica.</p>
          <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
            Leer más
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div class="relative overflow-hidden h-48">
          <img src="{{ site.baseurl }}/assets/images/articulo3.jpg" alt="Proyectos personales" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span class="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">Proyectos</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300">Proyectos personales</h3>
          <p class="text-gray-600 mb-4">Ideas, aprendizajes y resultados de los proyectos que desarrollo por curiosidad o para aprender nuevas habilidades.</p>
          <a href="#" class="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">
            Leer más
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Botón para ver más artículos -->
    <div class="text-center mt-12">
      <a href="#" class="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
        Ver todos los artículos
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Suscríbete a mi newsletter</h2>
    <p class="text-xl mb-8 text-white/90">Recibe los últimos artículos directamente en tu correo</p>
    
    <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input type="email" placeholder="Tu correo electrónico" 
             class="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30">
      <button type="submit" 
              class="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
        Suscribirse
      </button>
    </form>
  </div>
</section>

<!-- Footer -->
{% include footer.html %}

<!-- Estilos personalizados -->
<style>
  /* Animación flotante para el logo */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  /* Efecto de escritura */
  .typing-effect {
    overflow: hidden;
    border-right: 3px solid rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
    max-width: fit-content;
    margin: 0 auto;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: rgba(255, 255, 255, 0.7) }
  }
  
  /* Efecto de brillo para botones */
  .glow-button {
    position: relative;
    overflow: hidden;
  }
  
  .glow-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.7s;
  }
  
  .glow-button:hover::before {
    left: 100%;
  }
  
  /* Partículas animadas */
  .particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    left: var(--x);
    top: var(--y);
    animation: float-up var(--duration) infinite linear;
  }
  
  @keyframes float-up {
    0% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) scale(1.5);
      opacity: 0;
    }
  }
</style>

<!-- Script para scroll suave -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animación de elementos al hacer scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });
</script>


