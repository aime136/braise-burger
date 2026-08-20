// ---------- Mobile nav ----------
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.textContent = open ? '✕' : '☰';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });
}

// ---------- Reveal on scroll ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// ---------- Reservation form ----------
const form = document.querySelector('.reserve');

if (form) {
  const successBox = document.querySelector('.form-success');

  const validators = {
    name: (v) => v.trim().length >= 2 || 'Merci d\'indiquer votre nom.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Adresse email invalide.',
    phone: (v) => /^[\d\s.+-]{8,}$/.test(v) || 'Numéro de téléphone invalide.',
    date: (v) => v !== '' || 'Merci de choisir une date.',
    guests: (v) => Number(v) >= 1 || 'Indiquez le nombre de convives.',
  };

  function showError(field, message) {
    const errorEl = form.querySelector(`[data-error-for="${field}"]`);
    if (errorEl) errorEl.textContent = message === true ? '' : message;
  }

  function validateField(input) {
    const rule = validators[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    showError(input.name, result === true ? '' : result);
    return result === true;
  }

  form.querySelectorAll('input[name], select[name]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;

    form.querySelectorAll('input[name], select[name]').forEach(input => {
      if (!validateField(input)) allValid = false;
    });

    if (allValid) {
      // Pas de backend branché pour l'instant : à connecter (email, CRM, Google Sheet...)
      form.reset();
      if (successBox) successBox.classList.add('visible');
    } else if (successBox) {
      successBox.classList.remove('visible');
    }
  });
}
