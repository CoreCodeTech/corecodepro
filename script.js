/**
 * CoreCode - Comportamentos e Interações Globais
 */

// Função para abrir e fechar o menu responsivo em dispositivos móveis
function abrirMenu() {
    const menu = document.getElementById("nav-links"); 
    if (menu) {
        menu.classList.toggle("menu-aberto");
    }
}

// Configuração do Intersection Observer para efeitos de fade-in e revelação ao rolar a página
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
}, { 
    threshold: 0.1 // Dispara a animação quando 10% do elemento estiver visível na tela
});

// Seleciona todos os elementos que possuem as classes de animação e aplica o observador
const elementosParaAnimar = document.querySelectorAll('.revelar, .revelar-esquerda');
elementosParaAnimar.forEach((elemento) => observador.observe(elemento));