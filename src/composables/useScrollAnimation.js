// src/composables/useScrollAnimation.js
import { onMounted } from "vue";

export function useScrollAnimation() {
  onMounted(() => {
    const elements = document.querySelectorAll(".v-scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  });
}
