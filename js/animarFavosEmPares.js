// animarFavosEmPares.js

function animarFavosEmPares() {
    // Seleciona todos os hexagonos
    const todosHexagonos = Array.from(document.querySelectorAll('.hexagono'));
    
    // Embaralha a ordem dos favos
    shuffleArray(todosHexagonos);
    
    // Configurações
    const intervaloEntrePares = 200; // ms entre cada par
    const duracaoPiscar = 2000; // ms da animação de piscar
    
    // Processa os favos em pares
    for (let i = 0; i < todosHexagonos.length; i += 2) {
        // Pega o par atual (pode ser 1 ou 2 elementos no final)
        const parAtual = todosHexagonos.slice(i, i + 2);
        
        // Agenda a animação para este par
        setTimeout(() => {
            // Mostra os favos
            parAtual.forEach(hex => {
                hex.style.opacity = '1';
                hex.style.transform = 'scale(1)';
                hex.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                // Adiciona a classe de piscar
                hex.classList.add('piscando');
                
                // Remove a classe após a animação terminar
                setTimeout(() => {
                    hex.classList.remove('piscando');
                }, duracaoPiscar);
            });
        }, (i/2) * intervaloEntrePares);
    }
}

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


