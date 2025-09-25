---
layout: default
title: "SantanaSmart"
---

<!-- Hero Section -->
<section class="bg-gray-100 text-center py-32" data-aos="fade-up">
  <img src="{{ site.baseurl }}/assets/images/logo.jpg" alt="SantanaSmart" class="mx-auto mb-6 w-40" data-aos="zoom-in" data-aos-delay="200">
  <h1 class="text-5xl font-bold mb-4" data-aos="fade-down" data-aos-delay="400">Bienvenido a SantanaSmart</h1>
  <p class="text-lg max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="600">
    Empresa de asesoría industrial especializada en apoyar a startups y empresas consolidadas del parque empresarial de Linares. Innovación, eficiencia y desarrollo tecnológico.
  </p>
  <a href="#servicios" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105" data-aos="zoom-in" data-aos-delay="800">Descubre nuestros servicios</a>
</section>

<!-- Sobre Nosotros -->
<section id="sobre-nosotros" class="py-32 bg-white" data-aos="fade-up">
<div class="max-w-5xl mx-auto px-6 text-center">
  <h2 class="text-4xl font-bold mb-12">Sobre Nosotros</h2>
  <p class="text-lg mb-6">
    SantanaSmart nace con el objetivo de transformar la industria a través de la innovación tecnológica y la asesoría industrial especializada. Nos enfocamos en mejorar la eficiencia, optimizar procesos y apoyar a empresas emergentes y consolidadas dentro del parque empresarial de Linares.
  </p>
  <p class="text-lg">
    Nuestro equipo combina experiencia en ingeniería, diseño industrial y automatización, ofreciendo soluciones adaptadas a cada cliente. Creemos que la innovación y la eficiencia no solo generan resultados, sino que fortalecen el desarrollo sostenible de las empresas.
  </p>
</div>
</section>

<!-- Servicios -->
<section id="servicios" class="py-32 bg-gray-50">
<div class="max-w-6xl mx-auto px-6 text-center">
  <h2 class="text-4xl font-bold mb-16" data-aos="fade-up">Nuestros Servicios</h2>
  <div class="grid md:grid-cols-3 gap-12">
    
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-right">
      <img src="{{ site.baseurl }}/assets/images/asesoria.jpg" alt="Asesoría Industrial" class="w-full h-48 object-cover">
      <div class="p-6 text-left">
        <h3 class="text-2xl font-semibold mb-3">Asesoría Industrial</h3>
        Consultoría especializada para optimizar procesos, aumentar la productividad y mejorar la eficiencia en empresas del parque industrial.
      </div>
    </div>
    
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-up">
      <img src="{{ site.baseurl }}/assets/images/innovacion.jpg" alt="Innovación Tecnológica" class="w-full h-48 object-cover">
      <div class="p-6 text-left">
        <h3 class="text-2xl font-semibold mb-3">Innovación Tecnológica</h3>
        Desarrollo de soluciones tecnológicas y sistemas de automatización que aumentan la competitividad y transforman los procesos industriales.
      </div>
    </div>
    
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105" data-aos="fade-left">
      <img src="{{ site.baseurl }}/assets/images/desarrollo.jpg" alt="Desarrollo y Diseño" class="w-full h-48 object-cover">
      <div class="p-6 text-left">
        <h3 class="text-2xl font-semibold mb-3">Desarrollo y Diseño</h3>
        Proyectos de investigación, diseño industrial y desarrollo de soluciones a medida para startups y empresas consolidadas.
      </div>
    </div>

  </div>
</div>
</section>

<!-- Testimonios -->
<section class="py-32 bg-white">
<div class="max-w-4xl mx-auto px-6 text-center">
  <h2 class="text-4xl font-bold mb-16" data-aos="fade-up">Lo que dicen nuestros clientes</h2>
  <div class="space-y-10">
    <div class="bg-gray-100 p-8 rounded-xl shadow" data-aos="fade-right">
      <p class="mb-4">"Gracias a SantanaSmart logramos optimizar nuestros procesos y reducir costes significativamente. Su equipo combina profesionalidad y visión tecnológica."</p>
      <strong>- Empresa Industrial de Linares</strong>
    </div>
    <div class="bg-gray-100 p-8 rounded-xl shadow" data-aos="fade-left">
      <p class="mb-4">"Su asesoría en innovación tecnológica nos permitió implementar sistemas automatizados que mejoraron nuestra productividad y eficiencia."</p>
      <strong>- Startup de Tecnología</strong>
    </div>
  </div>
</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-16 text-center" data-aos="fade-up">
  <p class="mb-2">&copy; {{ "now" | date: "%Y" }} SantanaSmart. Todos los derechos reservados.</p>
  <p class="mb-2">Marca registrada: <strong>Santana</strong> (Clases 35, 37, 42)</p>
  <p class="mb-2">Email: <a href="mailto:{{ site.author.email }}" class="underline">{{ site.author.email }}</a></p>
  <p>Síguenos en Twitter: <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank" class="underline">@{{ site.author.twitter }}</a></p>
</footer>
