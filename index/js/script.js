document.addEventListener('DOMContentLoaded', function () {
  const fleche = document.querySelector('.arrow');
  const cible = document.getElementById('vedette1');
  const positionCible = cible.offsetTop;

  fleche.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: positionCible,
      behavior:'smooth'
    });
  });
});
