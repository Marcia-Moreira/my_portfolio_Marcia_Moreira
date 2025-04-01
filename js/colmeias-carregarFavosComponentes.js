
//* OK Código para Carregar a Imagem Gerada pelo HTML dos Favos de Mel:

// partituras-carregarAcordesComponentes.js
async function carregarFavo(container, nomeFavo) {
    try {
        // Carrega o arquivo HTML do favo
        const response = await fetch(`../favosComponentes/${nomeFavo}.html`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar a img do Favo: ${nomeFavo}`);
        }

        // Converte a resposta para texto (HTML)
        const html = await response.text();

        // Insere o HTML no container
        container.innerHTML = html;

        // Apenas para projects, chama a organização
        if (nomeFavo === 'favos-projectsMoldura') {
            setTimeout(organizarColmeiaProjects, 100); // Pequeno delay para o DOM atualizar
        }

        // ⚡️ Reaplica ScrollReveal após o HTML ser inserido para que os Favos Apareçam depois de Carregados
        if (window.revelar) {
            revelar.reveal('.hexagono');
        } else {
            console.warn("ScrollReveal não carregado corretamente!");
        }

    } catch (error) {
        console.error(error);
    }
}

// Carrega todos os favos da página
document.querySelectorAll('.img-favoColmeia').forEach(container => {
    const nomeFavo = container.getAttribute('data-img-favo');
    carregarFavo(container, nomeFavo);
});
