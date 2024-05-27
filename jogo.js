// Obtém a referência para o elemento de imagem do lobisomem
const lobisomem = document.querySelector('.lobisomem');

// Obtém a largura da janela do navegador
const larguraJanela = window.innerWidth;

// Obtém a largura do lobisomem
const larguraLobisomem = lobisomem.clientWidth;

// Define a posição inicial do lobisomem no centro da página
let posicaoX = (larguraJanela - larguraLobisomem) / 2;



// Função para mover o lobisomem
function moverLobisomem(event) {
    // Verifica qual tecla foi pressionada
    if (event.key === 'a' || event.key === 'A') {
        // Move o lobisomem para a esquerda
        posicaoX -= 10;
        // Vira o sprite para a esquerda
        lobisomem.style.transform = 'scaleX(-1)';
    } else if (event.key === 'd' || event.key === 'D') {
        // Move o lobisomem para a direita
        posicaoX += 10;
        // Vira o sprite para a direita
        lobisomem.style.transform = 'scaleX(1)';
    }

    // Limita a posição do lobisomem aos cantos da página
    const posicaoMaxima = larguraJanela - larguraLobisomem;

    if (posicaoX < 0) {
        posicaoX = 0;
    } else if (posicaoX > posicaoMaxima) {
        posicaoX = posicaoMaxima;
    }

    // Atualiza a posição do lobisomem
    lobisomem.style.left = posicaoX + 'px';
}

// Adiciona um ouvinte de eventos para a tecla pressionada
document.addEventListener('keydown', moverLobisomem);


// Obtém a referência para o elemento de imagem da pedra
const pedra = document.querySelector('.pedra');

// Define a posição inicial da pedra no topo da página
let posicaoY = 0;

// Função para mover a pedra
function moverPedra() {
    // Move a pedra para baixo
    posicaoY += Math.random() * 5 + 1; // Velocidade aleatória

    // Limita a posição da pedra à altura da janela do navegador
    const alturaJanela = window.innerHeight;
    const alturaPedra = pedra.clientHeight;
    const posicaoMaxima = alturaJanela - alturaPedra;

    if (posicaoY > posicaoMaxima) {
        // A pedra chegou ao fim da imagem da floresta
        // Reinicia a posição da pedra no topo
        posicaoY = 0;
    }

    // Atualiza a posição da pedra
    pedra.style.top = posicaoY + 'px';

    // Chama a função novamente para animação contínua
    requestAnimationFrame(moverPedra);
}

// Inicia a animação da pedra
requestAnimationFrame(moverPedra);


function detectarColisao(lobisomem, pedra) {
    var rect1 = lobisomem.getBoundingClientRect();
    var rect2 = pedra.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}


function gerarPedra() {
    var pedra = document.createElement('img');
    pedra.src = 'Fotos/Pedra.png';
    pedra.className = 'pedra';
    pedra.style.left = Math.random() * window.innerWidth + 'px';
    pedra.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duracao da queda
    document.body.appendChild(pedra);

    var lobisomem = document.querySelector('.lobisomem');

    var intervalo = setInterval(() => {
        if (detectarColisao(lobisomem, pedra)) {
            clearInterval(intervalo);
            alert('Game Over! O lobisomem foi atingido por uma pedra.');
            // Aqui você pode adicionar o código para terminar o jogo
        }
    }, 100);

    setTimeout(() => {
        pedra.remove();
        clearInterval(intervalo);
    }, 5000); // Remove a pedra depois de 5 segundos
}

setInterval(gerarPedra, 1000); // Gera uma nova pedra a cada segundo

// Variáveis globais
let score = 0; // Pontuação inicial
let counting = false; // Flag para controlar a contagem

// Função para aumentar a pontuação
function aumentarPontuacao() {
    if (!counting) {
        counting = true; // Inicia a contagem
        setInterval(() => {
            score++; // Aumenta a pontuação a cada segundo
            document.getElementById('score').textContent = score;
        }, 1000); // Intervalo de 1 segundo
    }
}

// Event listener para teclas "A" e "D"
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A' || event.key === 'd' || event.key === 'D') {
        aumentarPontuacao();
    }
});

// Event listener para notificações (simulado aqui com um botão)
document.getElementById('notificacao').addEventListener('click', () => {
    counting = false; // Interrompe a contagem
});

// Exemplo de notificação (simulado com um botão)
// <button id="notificacao">Exibir Notificação</button>
