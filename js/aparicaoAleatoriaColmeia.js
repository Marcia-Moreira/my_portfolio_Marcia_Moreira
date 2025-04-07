// Aparição Aleatória de Colmeias:

// aparicaoAleatoriaColmeia.js
// ! Só está colorindo todos juntos, codigo deve carregar pares de favos e depois piscar os que surgiram um vez

// aparicaoAleatoriaColmeia.js
document.addEventListener("DOMContentLoaded", async function() {
    // Espera todos os favos serem carregados
    await carregarTodosFavos();
    
    // Agora anima os favos
    animarFavosEmPares();
});

async function carregarTodosFavos() {
    const containers = document.querySelectorAll('.img-favoColmeia');
    for (const container of containers) {
        const nomeFavo = container.getAttribute('data-img-favo');
        await carregarFavo(container, nomeFavo);
    }
}

async function carregarFavo(container, nomeFavo) {
    try {
        const response = await fetch(`./favosComponentes/${nomeFavo}.html`);
        if (!response.ok) throw new Error(`Erro ao carregar o favo: ${nomeFavo}`);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Para reiniciar com Scroll de tela:
function configurarScrollReveal() {
    // Configuração básica para os hexagonos (sem alterar o comportamento atual)
    window.revelar = ScrollReveal({ reset: true });
    
    revelar.reveal('.hexagono', {
      beforeReveal: function(el) {
        // Dispara sua animação quando o ScrollReveal ativar o elemento
        if(el.style.opacity !== '1') { // Evita duplicar seu efeito inicial
          el.style.opacity = '1';
          el.style.transform = 'scale(1)';
          el.classList.add('piscando');
          setTimeout(() => el.classList.remove('piscando'), 1500);
        }
      },
      reset: true // Permite reativar ao scrollar
    });
}
