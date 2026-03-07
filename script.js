document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------
  // 1. Navigation mobile (Menu bulle)
  // ---------------------------------------------
  // CORRECTION : On cible les nouvelles classes du menu bulle
  const floatingNav = document.querySelector('.floating-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksItems = document.querySelectorAll('.nav-items a');

  if (mobileToggle && floatingNav) {
    mobileToggle.addEventListener('click', () => {
      floatingNav.classList.toggle('is-open');
    });
  }

  // Fermer le menu si on clique sur un lien
  navLinksItems.forEach((link) => {
    link.addEventListener('click', () => {
      floatingNav.classList.remove('is-open');
    });
  });

  // (Optionnel) Réduire la bulle au scroll pour le style
  window.addEventListener('scroll', () => {
    if (floatingNav) {
      if (window.scrollY > 100) {
        floatingNav.style.padding = '0.3rem';
        floatingNav.style.top = '1rem';
      } else {
        floatingNav.style.padding = '0.5rem';
        floatingNav.style.top = '1.5rem';
      }
    }
  });


  // ---------------------------------------------
  // 2. Scroll reveal des sections (.reveal)
  // (protégé si IntersectionObserver n'est pas supporté)
  // ---------------------------------------------
  if ('IntersectionObserver' in window) {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  } else {
    // Fallback : on affiche tout directement
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

});