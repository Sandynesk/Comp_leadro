function gerarPedra() {
    var pedra = document.createElement('img');
    pedra.src = 'Fotos/Pedra.png'; // Certifique-se de que o caminho está correto
    pedra.className = 'pedra';
    pedra.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // Evita sair da tela
    pedra.style.position = 'absolute'; // Garante que a posição seja absoluta
    pedra.style.top = '0px'; // Começa do topo da página
    pedra.style.width = '120px'; // Tamanho da pedra
    pedra.style.height = '120px'; // Tamanho da pedra
    document.body.appendChild(pedra);

    setTimeout(() => {
        pedra.remove();
    }, 5000); // Remove a pedra depois de 5 segundos
}

setInterval(gerarPedra, 1000); // Gera uma nova pedra a cada segundo
