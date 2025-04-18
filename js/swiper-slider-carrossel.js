// Slider Carrossel:

const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,
  speed: 1000, // Velocidade da animação (quanto maior, mais lento)
  autoplay: {
    delay: 0, // Delay 0 para movimento contínuo
    disableOnInteraction: false,
  },
  freeMode: true, // Scroll livre (sem "encaixe" nos slides)
  slidesPerView: 'auto', // Mostra quantos couberem
  // spaceBetween: 20,
  // Espaço entre badges
  allowTouchMove: false,
  // Opcional: desativa arrastar (se quiser só auto)

});

// Pausa no hover:
document.querySelector('.swiper-container').addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});
// Play ao sair do hover:
document.querySelector('.swiper-container').addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});

// const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: true, // Loop infinito
//     autoplay: {
//       delay: 2000, // Tempo entre slides (ms)
//       disableOnInteraction: false, // Continua após interação
//     },
//     slidesPerView: 'auto', // Ajusta dinamicamente
//     spaceBetween: 20, // Espaço entre slides
//   });
