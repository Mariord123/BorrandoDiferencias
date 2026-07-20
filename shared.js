// shared.js — Navbar, footer, WhatsApp y comportamientos comunes
(function(){
'use strict';

/* ---- NAVBAR HTML ---- */
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
var navHTML = `
<header id="navbar" role="banner">
  <div class="container">
    <nav class="nav-inner" aria-label="Navegación principal">
      <a href="index.html" class="nav-logo" aria-label="Borrando Diferencias — Inicio">
        <img src="Borrando Diferencias (1).jpg" alt="Borrando Diferencias — Asociación de Familias con Hijos de Necesidades Especiales" style="height:54px;width:auto;object-fit:contain">
      </a>
      <ul class="nav-links" role="list">
        <li><a href="index.html" class="${currentPage==='index.html'?'active':''}">Inicio</a></li>
        <li><a href="nosotros.html" class="${currentPage==='nosotros.html'?'active':''}">Sobre Nosotros</a></li>
        <li><a href="objetivos.html" class="${currentPage==='objetivos.html'?'active':''}">Objetivos</a></li>
        <li><a href="actividades.html" class="${currentPage==='actividades.html'?'active':''}">Actividades</a></li>
        <li><a href="noticias.html" class="${currentPage==='noticias.html'?'active':''}">Noticias</a></li>
        <li><a href="unete.html" class="${currentPage==='unete.html'?'active':''}">Únete</a></li>
        <li><a href="contacto.html" class="${currentPage==='contacto.html'?'active':''}">Contacto</a></li>
      </ul>
      <a href="contacto.html" class="btn btn-red nav-cta" aria-label="Asóciate">ASÓCIATE</a>
      <button class="nav-hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
  <div class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Menú móvil">
    <a href="index.html" class="${currentPage==='index.html'?'active':''}">Inicio</a>
    <a href="nosotros.html" class="${currentPage==='nosotros.html'?'active':''}">Sobre Nosotros</a>
    <a href="objetivos.html" class="${currentPage==='objetivos.html'?'active':''}">Objetivos</a>
    <a href="actividades.html" class="${currentPage==='actividades.html'?'active':''}">Actividades</a>
    <a href="noticias.html" class="${currentPage==='noticias.html'?'active':''}">Noticias</a>
    <a href="unete.html" class="${currentPage==='unete.html'?'active':''}">Únete</a>
    <a href="contacto.html" class="${currentPage==='contacto.html'?'active':''}">Contacto</a>
    <a href="contacto.html" class="btn btn-red">ASÓCIATE</a>
  </div>
</header>`;

/* ---- FOOTER HTML ---- */
var footerHTML = `
<footer id="footer" role="contentinfo">
  <div aria-hidden="true" style="position:absolute;inset:0;overflow:hidden;pointer-events:none">
    <svg style="top:-20%;right:-5%;width:300px;opacity:.06;position:absolute" viewBox="0 0 300 300"><path d="M150,15 C220,10 290,70 285,150 C280,230 210,285 145,280 C80,275 10,210 15,135 C20,60 80,20 150,15 Z" fill="#74C2E1"/></svg>
    <svg style="bottom:-15%;left:-3%;width:240px;opacity:.05;position:absolute" viewBox="0 0 240 240"><path d="M120,15 C175,10 230,60 225,120 C220,180 165,225 110,220 C55,215 10,165 15,105 C20,45 65,20 120,15 Z" fill="#52B788"/></svg>
  </div>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-logo">
        <img src="Borrando Diferencias (1).jpg" alt="Logo Borrando Diferencias" style="max-width:200px;filter:none">
        <p class="footer-tagline">Asociación de Familias con Hijos de Necesidades Especiales</p>
      </div>
      <div class="footer-center">
        <p>📍 C/ Cervantes, 7 · Cabra (Córdoba)</p>
        <p>✉️ <a href="mailto:borrandodiferencias@gmail.com">borrandodiferencias@gmail.com</a></p>
        <p>📞 <a href="tel:666729863">666 729 863</a></p>
      </div>
      <div class="footer-links">
        <a href="https://www.facebook.com/borrando_diferencias" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          📘 Facebook
        </a>
        <a href="https://www.instagram.com/borrando_diferencias" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          📸 Instagram
        </a>
        <a href="https://www.youtube.com/@borrandodiferencias8245" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          ▶️ YouTube
        </a>
        <a href="https://wa.me/34666729863?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          💬 WhatsApp
        </a>
      </div>
    </div>
    <hr class="footer-divider">

    <!-- ============================================================
         ENTIDADES COLABORADORAS / PATROCINADORAS
         INSTRUCCIONES: Para añadir los logos reales, sustituye cada
         bloque .sponsor-item por: <img src="logo_entidad.png" alt="Nombre entidad">
         y ajusta el tamaño con width/height según sea necesario.
         ============================================================ -->
      <div class="sponsors-section">
      <p class="sponsors-label">Con el apoyo de nuestras entidades colaboradoras</p>
      <div class="sponsors-grid">
        <div class="sponsor-item" title="Ayuntamiento de Cabra">
          <div style="background:#fff;border-radius:10px;padding:8px 12px;display:flex;align-items:center;justify-content:center;min-width:130px;min-height:56px">
            <img src="ayuntamiento de cabra.png" alt="Ayuntamiento de Cabra" style="max-height:44px;max-width:120px;object-fit:contain;display:block">
          </div>
        </div>
        <div class="sponsor-item" title="Junta de Andalucía">
          <div style="background:#fff;border-radius:10px;padding:8px 14px;display:flex;align-items:center;justify-content:center;min-width:150px;min-height:56px">
            <img src="Junta de Andalucia LINEA 5.png" alt="Junta de Andalucía" style="max-height:44px;max-width:140px;object-fit:contain;display:block">
          </div>
        </div>
        <div class="sponsor-item" title="Diputación de Córdoba">
          <div style="background:#fff;border-radius:10px;padding:8px 14px;display:flex;align-items:center;justify-content:center;min-width:150px;min-height:56px">
            <img src="Diputacion cordoba sin fondo.png" alt="Diputación de Córdoba" style="max-height:44px;max-width:140px;object-fit:contain;display:block">
          </div>
        </div>
        <div class="sponsor-item" title="Instituto Aguilar y Eslava">
          <div style="background:#fff;border-radius:10px;padding:8px 10px;display:flex;align-items:center;justify-content:center;min-width:80px;min-height:56px">
            <img src="IES Felipe Solis.jpg" alt="Instituto Aguilar y Eslava" style="max-height:52px;max-width:70px;object-fit:contain;display:block;border-radius:4px">
          </div>
        </div>
      </div>
    </div>

    <hr class="footer-divider">
    <div class="footer-bottom" style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px">
      <p>© 2024 Borrando Diferencias · C.I.F. G-14981881. Todos los derechos reservados.</p>
      <p style="margin:4px 0">
        <a href="aviso-legal.html" style="color:rgba(255,255,255,.65); text-decoration:underline; font-size:.85rem; margin-right:16px">Aviso Legal</a>
        <a href="privacidad.html" style="color:rgba(255,255,255,.65); text-decoration:underline; font-size:.85rem; margin-right:16px">Política de Privacidad</a>
        <a href="cookies.html" style="color:rgba(255,255,255,.65); text-decoration:underline; font-size:.85rem">Política de Cookies</a>
      </p>
      <p style="font-size:.8rem; opacity:.75">Hecho con ❤️ en Cabra, Córdoba</p>
    </div>
  </div>
</footer>

<a href="https://wa.me/34666729863?text=Hola,%20quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20asociaci%C3%B3n%20Borrando%20Diferencias."
   class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.57 1.977 14.1 1.053 11.998 1.053c-5.439 0-9.866 4.372-9.87 9.802-.002 1.77.474 3.498 1.38 5.048l-.995 3.635 3.78-.973zm9.193-7.253c-.344-.173-2.042-1.01-2.358-1.124-.314-.115-.544-.173-.773.172-.228.345-.885 1.124-1.085 1.353-.199.23-.399.258-.743.086-1.144-.572-1.921-1.077-2.678-2.385-.2-.343-.02-.529.15-.7.154-.153.344-.403.516-.604.172-.201.229-.345.344-.575.115-.23.057-.431-.028-.604-.086-.172-.773-1.868-1.059-2.558-.28-.671-.56-.58-.773-.591-.199-.01-.429-.012-.658-.012s-.6.086-.915.431c-.314.345-1.202 1.178-1.202 2.87 0 1.693 1.23 3.33 1.402 3.56.173.229 2.42 3.696 5.861 5.182.818.354 1.456.565 1.954.723.822.261 1.57.225 2.161.137.66-.099 2.042-.834 2.329-1.64.286-.805.286-1.495.2-.164-.088-.171-.344-.271z"/></svg>
</a>`;

/* ---- INSERT HTML ---- */
document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

/* ---- NAVBAR scroll ---- */
var nav = document.getElementById('navbar');
window.addEventListener('scroll', function(){
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, {passive:true});

/* ---- HAMBURGER ---- */
var hb = document.getElementById('hamburger');
var mm = document.getElementById('mobile-menu');
hb.addEventListener('click', function(){
  var open = hb.classList.toggle('open');
  mm.classList.toggle('open', open);
  hb.setAttribute('aria-expanded', open.toString());
});
mm.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click', function(){
    hb.classList.remove('open');
    mm.classList.remove('open');
    hb.setAttribute('aria-expanded','false');
  });
});

/* ---- INTERSECTION OBSERVER (fade-up) ---- */
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold:.12});
document.querySelectorAll('.fade-up').forEach(function(el){ io.observe(el); });

/* ---- FORM SUBMIT (contacto.html) ---- */
var form = document.getElementById('signup-form');
if(form){
  var succ = document.getElementById('form-success');
  var submitBtn = document.getElementById('submit-btn');
  var radios = document.querySelectorAll('input[name="tipo_socio"]');
  var cf = document.getElementById('child-fields');

  radios.forEach(function(r){
    r.addEventListener('change', function(){
      if(cf) cf.classList.toggle('visible', this.value === 'activo');
    });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var valid = true;
    form.querySelectorAll('[required]').forEach(function(i){
      if (i.type === 'checkbox') {
        var parentLabel = i.closest('label') || i.parentElement;
        parentLabel.style.color = '';
        if(!i.checked){ parentLabel.style.color='var(--red)'; valid=false; }
      } else {
        i.style.borderColor = '';
        if(!i.value.trim()){ i.style.borderColor='var(--red)'; valid=false; }
      }
    });
    var em = document.getElementById('email');
    if(em && em.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){
      em.style.borderColor='var(--red)'; valid=false;
    }
    if(!valid){ 
      var firstInvalid = form.querySelector('[required]:invalid') || form.querySelector('[required]');
      if (firstInvalid) firstInvalid.focus();
      return; 
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'ENVIANDO...';

    var data = new FormData(form);

    fetch('https://formspree.io/f/mgojezwn', {
      method:'POST',
      body: data,
      headers:{'Accept':'application/json'}
    }).then(function(response){
      if(response.ok){
        form.style.display='none';
        succ.style.display='block';
        succ.scrollIntoView({behavior:'smooth',block:'center'});
      } else { throw new Error('error'); }
    }).catch(function(){
      // Fallback: abre cliente de correo con datos rellenados
      var body = 'Nombre: '+data.get('nombre')+' '+data.get('apellidos')+
        '\nTeléfono: '+data.get('telefono')+
        '\nDirección: '+data.get('direccion')+
        '\nPoblación: '+data.get('poblacion')+
        '\nEmail: '+data.get('email')+
        '\nTipo Socio: '+data.get('tipo_socio')+
        '\nNombre Niño/a: '+(data.get('nombre_nino')||'N/A')+
        '\nFecha Nacimiento: '+(data.get('fecha_nacimiento')||'N/A');
      window.location.href='mailto:borrandodiferencias@gmail.com'+
        '?subject=Solicitud%20Inscripción%20-%20Borrando%20Diferencias'+
        '&body='+encodeURIComponent(body);
      form.style.display='none';
      succ.style.display='block';
      succ.scrollIntoView({behavior:'smooth',block:'center'});
    });
  });
}

/* ---- Pre-selección desde unete.html ---- */
function selectType(val){
  var r = document.querySelector('input[name="tipo_socio"][value="'+val+'"]');
  if(r){ r.checked=true; r.dispatchEvent(new Event('change')); }
}
var btnA = document.getElementById('btn-activo');
var btnC = document.getElementById('btn-colaborador');
if(btnA) btnA.addEventListener('click', function(){ setTimeout(function(){ selectType('activo'); },300); });
if(btnC) btnC.addEventListener('click', function(){ setTimeout(function(){ selectType('colaborador'); },300); });

/* ---- BANNER DE COOKIES DINÁMICO ---- */
function initCookiesBanner() {
  if (localStorage.getItem('cookies-accepted') !== null) {
    return; // Ya ha aceptado o rechazado las cookies
  }

  var bannerHTML = `
    <div id="cookies-banner" style="position:fixed; bottom:20px; left:20px; right:20px; max-width:600px; background:#fff; border-radius:16px; box-shadow:0 10px 30px rgba(26,26,46,0.2); padding:24px; z-index:9999; display:flex; flex-direction:column; gap:16px; border:1px solid #e2e8f0; font-family:'Inter',sans-serif; animation:slideUpCookies .4s ease-out">
      <div style="font-size:.95rem; color:#374151; line-height:1.6">
        <span style="font-size:1.4rem; display:block; margin-bottom:8px">🍪</span>
        Utilizamos cookies propias y de terceros para asegurar el correcto funcionamiento del sitio web y reproducir vídeos embebidos de YouTube de forma óptima. Al continuar navegando, aceptas nuestra <a href="cookies.html" style="color:var(--green); text-decoration:underline; font-weight:700">Política de Cookies</a>.
      </div>
      <div style="display:flex; gap:12px; justify-content:flex-end">
        <button id="btn-cookies-reject" style="background:transparent; border:2px solid #cbd5e1; color:#64748b; padding:10px 20px; border-radius:999px; font-weight:700; font-size:.88rem; cursor:pointer; font-family:'Nunito',sans-serif; transition:all .2s">Rechazar</button>
        <button id="btn-cookies-accept" style="background:#52B788; border:none; color:#fff; padding:10px 24px; border-radius:999px; font-weight:700; font-size:.88rem; cursor:pointer; box-shadow:0 4px 12px rgba(82,183,136,0.3); font-family:'Nunito',sans-serif; transition:all .2s">Aceptar</button>
      </div>
    </div>
    <style>
      @keyframes slideUpCookies {
        from { transform: translateY(100px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      #btn-cookies-reject:hover { background:#f1f5f9; color:#475569; }
      #btn-cookies-accept:hover { background:#409a70; box-shadow:0 6px 16px rgba(82,183,136,0.4); }
      @media(max-width:580px) {
        #cookies-banner { bottom:10px; left:10px; right:10px; padding:16px; }
      }
    </style>
  `;

  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  document.getElementById('btn-cookies-accept').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'true');
    var banner = document.getElementById('cookies-banner');
    if (banner) banner.remove();
  });

  document.getElementById('btn-cookies-reject').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'false');
    var banner = document.getElementById('cookies-banner');
    if (banner) banner.remove();
  });
}

// Iniciar banner de cookies después de que cargue el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookiesBanner);
} else {
  initCookiesBanner();
}

})();
