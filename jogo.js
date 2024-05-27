const lobisomem = document.getElementById('lobisomem');
let velocidade = 3;
let direcao = 0;

function atualizarPosicao() {
    let posicaoAtual = parseFloat(window.getComputedStyle(lobisomem).getPropertyValue('left'));
    let novaPosicao = posicaoAtual + (velocidade * direcao);
    novaPosicao = Math.max(novaPosicao, 0);
    novaPosicao = Math.min(novaPosicao, window.innerWidth - lobisomem.offsetWidth);
    lobisomem.style.left = novaPosicao + 'px';
}

// Adiciona um evento de escuta de teclado para detectar pressionamentos de tecla
document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é "A" (esquerda) ou "D" (direita)
    if (event.key === 'a' || event.key === 'A') {
        direcao = -1; // Define a direção para esquerda
    } else if (event.key === 'd' || event.key === 'D') {
        direcao = 1; // Define a direção para direita
    }
});

// Adiciona um evento de escuta de teclado para detectar quando a tecla é liberada
document.addEventListener('keyup', function(event) {
    // Verifica se a tecla liberada é "A" ou "D" e para o movimento definindo a direção para 0
    if (event.key === 'a' || event.key === 'A' || event.key === 'd' || event.key === 'D') {
        direcao = 0;
    }
});

// Atualiza a posição do lobisomem em intervalos regulares
setInterval(atualizarPosicao, 30);


const mario = document.querySelector('.mario');

// Define a velocidade do movimento
let velocidade = 5;

// Função para fazer o personagem Mario se mover para a esquerda ou para a direita
const mover = (event) => {
    if (event.key === 'a' || event.key === 'A') { // Se a tecla pressionada for 'A' ou 'a'
        mario.style.left = parseInt(window.getComputedStyle(mario).getPropertyValue('left')) - velocidade + 'px'; // Move para a esquerda
    } else if (event.key === 'd' || event.key === 'D') { // Se a tecla pressionada for 'D' ou 'd'
        mario.style.left = parseInt(window.getComputedStyle(mario).getPropertyValue('left')) + velocidade + 'px'; // Move para a direita
    }
}

document.addEventListener('keydown', mover); // Adiciona um EventListener para detectar pressionamentos de tecla e chamar a função mover
