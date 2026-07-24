(() => {
  'use strict';

  const menuButton = document.getElementById('menu-toggle');
  const navigationMenu = document.getElementById('menu-principal');
  const currentYearElement = document.getElementById('ano-atual');
  const revealElements = document.querySelectorAll('.reveal');

  /**
   * Abre ou fecha o menu e mantém os atributos de acessibilidade atualizados.
   */
  function setMenuState(isOpen) {
    if (!menuButton || !navigationMenu) return;

    navigationMenu.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
  }

  function initializeMobileMenu() {
    if (!menuButton || !navigationMenu) return;

    menuButton.addEventListener('click', () => {
      const menuIsOpen = navigationMenu.classList.contains('is-open');
      setMenuState(!menuIsOpen);
    });

    navigationMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });

    const desktopBreakpoint = window.matchMedia('(min-width: 900px)');
    const closeMenuOnDesktop = ({ matches }) => {
      if (matches) setMenuState(false);
    };

    if (typeof desktopBreakpoint.addEventListener === 'function') {
      desktopBreakpoint.addEventListener('change', closeMenuOnDesktop);
    } else {
      desktopBreakpoint.addListener(closeMenuOnDesktop);
    }
  }

  function updateCurrentYear() {
    if (!currentYearElement) return;
    currentYearElement.textContent = String(new Date().getFullYear());
  }

  function showAllRevealElements() {
    revealElements.forEach((element) => {
      element.classList.add('is-visible');
    });
  }

  function initializeRevealAnimations() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      showAllRevealElements();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element, index) => {
      const delay = Math.min(index * 80, 320);
      element.style.setProperty('--reveal-delay', `${delay}ms`);
      observer.observe(element);
    });
  }

  initializeMobileMenu();
  updateCurrentYear();
  initializeRevealAnimations();
})();
