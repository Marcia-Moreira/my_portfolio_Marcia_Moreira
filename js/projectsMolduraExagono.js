// Projects

// Função para organizar os hexágonos conforme o tamanho da tela
function organizarColmeiaProjects() {
    const projectsColmeia = document.querySelector('.projects-colmeia-hexagonal');
    const projectsHexagonos = Array.from(document.querySelectorAll('.projects-moldura-hexagono'));
    
    // Limpa a colmeia
    projectsColmeia.innerHTML = '';
    
    // Organiza os hexágonos em linhas alternadas
    const screenWidth = window.innerWidth;
    let projectsLinhas = [];
    
    if (screenWidth >= 1200) {
        // Padrão 4-3-4 para telas grandes
        projectsLinhas = [
            projectsHexagonos.slice(0, 4),
            projectsHexagonos.slice(4, 7),
            projectsHexagonos.slice(7, 11)
        ];
    } else if (screenWidth >= 768) {
        // Padrão 3-2-3 para telas médias
        projectsLinhas = [
            projectsHexagonos.slice(0, 3),
            projectsHexagonos.slice(3, 5),
            projectsHexagonos.slice(5, 8)
        ];
    } else {
        // Padrão 2-1-2 para mobile
        projectsLinhas = [
            projectsHexagonos.slice(0, 2),
            projectsHexagonos.slice(2, 3),
            projectsHexagonos.slice(3, 5)
        ];
    }
    
    // Insere os hexágonos na colmeia
    projectsLinhas.forEach(linha => {
        const linhaContainer = document.createElement('div');
        linhaContainer.className = 'linha-colmeia';
        linha.forEach(hex => {
            linhaContainer.appendChild(hex.cloneNode(true));
        });
        projectsColmeia.appendChild(linhaContainer);
    });
}

// Executa ao carregar e redimensionar
window.addEventListener('DOMContentLoaded', organizarColmeiaProjects);
window.addEventListener('resize', organizarColmeiaProjects);