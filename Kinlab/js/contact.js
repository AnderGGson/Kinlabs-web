document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('.form-submit .btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(function () {
      form.style.display = 'none';
      success.style.display = 'block';
    }, 1200);
  });

});
