// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header con sombra al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Formulario (envía a Formspree - crea cuenta gratis en formspree.io)
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validación básica
  if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
    alert('Por favor, rellena los campos obligatorios.');
    return;
  }

  // ⚠️ Sustituye por tu endpoint real de Formspree
  const ENDPOINT = 'https://formspree.io/f/mjyyyyeb';

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    if (res.ok) {
      form.reset();
      success.hidden = false;
      setTimeout(() => success.hidden = true, 6000);
    } else {
      alert('Error al enviar. Inténtalo más tarde.');
    }
  } catch {
    alert('Error de conexión. Inténtalo más tarde.');
  }
});
