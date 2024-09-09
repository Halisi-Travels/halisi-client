// src/directives/lazyload.js
export default {
  mounted(el) {
    const loadImage = () => {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      );
      if (imageElement) {
        imageElement.addEventListener("load", () => {
          el.classList.add("loaded");
        });
        imageElement.src = imageElement.dataset.src;
      }
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(el);
  },
};
