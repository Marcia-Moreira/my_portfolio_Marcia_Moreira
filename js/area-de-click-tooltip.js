// ÁREA DE CLICK DO TOOLTIP:

// !Acho que não está funcionando pois não coloquei a classe de conjunto tooltip!!!
{/* <div class="hexagon-tooltip-group">
  <div class="moldura-hexagono" id="favo-projects-03">...</div>
  <div class="hex-tooltip right">...</div>
</div> */}

// Seleciona todos os hexágonos com tooltips
const hexagonos = document.querySelectorAll('[id^="favo-projects-"]');

hexagonos.forEach(hex => {
  const tooltip = hex.nextElementSibling; // Assumindo que o tooltip vem logo após
  
  // Mostrar tooltip ao entrar no hexágono
  hex.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.style.pointerEvents = 'auto';
  });
  
  // Esconder apenas quando sair do conjunto hexágono+tooltip
  const grupo = [hex, tooltip];
  
  grupo.forEach(el => {
    el.addEventListener('mouseleave', () => {
      // Delay para permitir a transição entre elementos
      setTimeout(() => {
        // Verifica se o mouse ainda não está em nenhum dos elementos do grupo
        if (!grupo.some(e => e.matches(':hover'))) {
          tooltip.style.opacity = '0';
          tooltip.style.pointerEvents = 'none';
        }
      }, 100);
    });
  });
});