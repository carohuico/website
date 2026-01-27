import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;
    if (!scrollContainer) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const sections = Array.from(document.querySelectorAll('.section')) as HTMLElement[];
      const currentScrollPos = scrollContainer.scrollTop;
      const viewportHeight = scrollContainer.clientHeight;

      // Encontrar la sección actual
      let currentSectionIndex = 0;
      let currentSection = sections[0];

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentScrollPos >= sectionTop - 100 && currentScrollPos < sectionBottom) {
          currentSectionIndex = index;
          currentSection = section;
        }
      });

      const sectionTop = currentSection.offsetTop;
      const sectionBottom = sectionTop + currentSection.offsetHeight;
      const positionInSection = currentScrollPos - sectionTop;
      const sectionContentHeight = currentSection.offsetHeight;

      // Si hay scroll positivo (abajo) y estamos al final de la sección
      if (e.deltaY > 0) {
        const distanceToSectionEnd = sectionContentHeight - positionInSection - viewportHeight;

        // Si estamos cerca del final (menos de 200px), ir a la siguiente sección
        if (distanceToSectionEnd < 100 && currentSectionIndex < sections.length - 1) {
          isScrolling = true;
          const nextSectionTop = sections[currentSectionIndex + 1].offsetTop;

          scrollContainer.scrollTo({
            top: nextSectionTop,
            behavior: 'smooth'
          });

          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 1200);

          e.preventDefault();
        }
      }
      // Si hay scroll negativo (arriba) y estamos al inicio de la sección
      else if (e.deltaY < 0) {
        if (positionInSection < 200 && currentSectionIndex > 0) {
          isScrolling = true;
          const prevSectionTop = sections[currentSectionIndex - 1].offsetTop;
          const prevSectionHeight = sections[currentSectionIndex - 1].offsetHeight;

          scrollContainer.scrollTo({
            top: prevSectionTop + prevSectionHeight - viewportHeight,
            behavior: 'smooth'
          });

          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 1200);

          e.preventDefault();
        }
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);
};
