---
layout: default
title: "Mi Blog Personal"
---

<!-- Banner Section -->
<section class="banner_main">
  <div id="banner1" class="carousel slide banner_slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#banner1" data-slide-to="0" class="active"></li>
      <li data-target="#banner1" data-slide-to="1"></li>
      <li data-target="#banner1" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container-fluid">
          <div class="carousel-caption">
            <div class="row">
              <div class="col-md-7 col-lg-5">
                <div class="text-bg">
                  <h1>Bienvenido a mi Blog</h1>
                  <span>Este es un espacio personal para compartir ideas y proyectos.</span>
                  <a class="read_more" href="#contact">Contactarme</a>
                </div>
              </div>
              <div class="col-md-12 col-lg-7">
                <div class="row">
                  <div class="col-md-6">
                    <div class="ban_track">
                      <figure><img src="{{ '/assets/images/track.png' | relative_url }}" alt="banner image"/></figure>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <form class="transfot">
                      <div class="col-md-12">
                        <span>Suscríbete a mi newsletter</span>
                        <h3>Recibe actualizaciones</h3>
                      </div>
                      <div class="col-md-12">
                        <input class="transfot_form" placeholder="Tu correo" type="text" name="email">
                      </div>
                      <div class="col-md-12">
                        <button class="get_now">Suscribirse</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Puedes agregar más carousel items aquí -->
    </div>
    <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </a>
    <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </a>
  </div>
</section>

<!-- About Section -->
<section id="about" class="about">
  <div class="container">
    <div class="row d_flex">
      <div class="col-md-6">
        <div class="about_right">
          <figure><img src="{{ '/assets/images/about.png' | relative_url }}" alt="about image"/></figure>
        </div>
      </div>
      <div class="col-md-6">
        <div class="titlepage">
          <h2>Sobre mí</h2>
          <p>Este blog es un espacio donde comparto mis proyectos, aprendizajes y reflexiones sobre tecnología y desarrollo personal.</p>
          <a class="read_more" href="#contact">Leer más</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact">
  <div class="container">
    <div class="titlepage">
      <h2>Contacto</h2>
    </div>
    <form id="request" class="main_form">
      <div class="row">
        <div class="col-md-12">
          <input class="contactus" placeholder="Nombre" type="text" name="name">
        </div>
        <div class="col-md-12">
          <input class="contactus" placeholder="Email" type="text" name="email">
        </div>
        <div class="col-md-12">
          <input class="contactus" placeholder="Mensaje" type="text" name="message">
        </div>
        <div class="col-md-12">
          <button class="send_btn">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</section>



