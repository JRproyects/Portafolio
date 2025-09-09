// año automático
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

  // theme toggle (light/dark)
    const btn = document.getElementById('themeToggle');
    const KEY = 'jr-theme';

    const getPref = () => localStorage.getItem(KEY);

    const setTheme = (mode) => {
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem(KEY, mode);
      if (btn) btn.textContent = mode === 'light' ? '☼' : '☾';
    };

// init
const initial = getPref() || 
  (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(initial);

if (btn) {
  btn.addEventListener('click', () => {
    setTheme(getPref() === 'light' ? 'dark' : 'light');
  });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
    .then(() => alert('Correo enviado!'))
    .catch(err => alert('Error: ' + JSON.stringify(err)));
});

