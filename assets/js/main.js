document.addEventListener('DOMContentLoaded', () => {

  /* ── Modal CV ── */
  const modal = document.getElementById('modal-cv');
  const open  = document.getElementById('btn-cv');
  const close = document.getElementById('modal-close');

  open.addEventListener('click', () => { modal.style.display = 'block'; document.body.style.overflow = 'hidden'; });
  close.addEventListener('click', hide);
  window.addEventListener('click', e => { if (e.target === modal) hide(); });
  function hide(){ modal.style.display = 'none'; document.body.style.overflow = ''; }

  /* ── Hamburger menu ── */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.querySelector('.nav nav');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Fermer le menu au clic sur un lien
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Fermer le menu au clic en dehors
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-in')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── Scroll: nav shadow ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ── Scroll reveal ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (e.target.dataset.delay || 0) + 's';
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    const siblings = el.parentElement.querySelectorAll('.fade-up');
    const idx = Array.from(siblings).indexOf(el);
    el.dataset.delay = (idx * 0.1).toFixed(1);
    io.observe(el);
  });

  /* ── Formulaire contact (mailto) ── */
  // ⚠️  Remplace TON_EMAIL@exemple.com par ton adresse email réelle
  const CONTACT_EMAIL = 'TON_EMAIL@exemple.com';

  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nom     = document.getElementById('nom').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !email || !message) {
      feedback.textContent = 'Merci de remplir tous les champs.';
      feedback.style.color = '#e05';
      return;
    }

    const subject = encodeURIComponent(`Contact portfolio — ${nom}`);
    const body    = encodeURIComponent(`Nom : ${nom}\nEmail : ${email}\n\n${message}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    feedback.textContent = 'Votre client mail va s\'ouvrir. Merci !';
    feedback.style.color = '';
  });

});
