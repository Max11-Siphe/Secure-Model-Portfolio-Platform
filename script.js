// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form (missing an endpoint)
const form = document.getElementById('contactForm');
const status = document.getElementById('contactStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in every field.';
    return;
  }
  const name = document.getElementById('cf-name').value.trim();
  status.textContent = `Thanks, ${name} — message noted. (Connect this form to an email service or backend to actually receive it.)`;
  form.reset();
});