const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvens = document.querySelector('.nuvens');
const gameBoard = document.querySelector('.game-board');

const painelInicial = document.getElementById('painel-inicial');
const painelControle = document.getElementById('painel-controle');
const tituloControle = document.getElementById('titulo-controle');
const botaoIniciar = document.getElementById('botao-iniciar');
const botaoRetomar = document.getElementById('botao-retomar');
const botaoReiniciar = document.getElementById('botao-reiniciar');
const placar = document.getElementById('pontuacao');

let loopJogo, pontuacao, jogoAtivo = false, jogoPausado = false;

// Função para iniciar as animações do jogo
const iniciarAnimacoes = () => {
    tubo.style.animationPlayState = 'running';
    nuvens.style.animationPlayState = 'running';
};

// Função para pausar as animações do jogo
const pausarAnimacoes = () => {
    tubo.style.animationPlayState = 'paused';
    nuvens.style.animationPlayState = 'paused';
};

// Lógica principal de pontuação e colisão
const gameLoop = () => {
    const tuboPosicao = tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Lógica de pontuação
    if (tuboPosicao < 70 && tubo.dataset.pontuado !== 'true') {
        pontuacao++;
        placar.textContent = pontuacao;
        tubo.dataset.pontuado = 'true';
    } else if (tuboPosicao > 70) {
        tubo.dataset.pontuado = 'false';
    }

    // Lógica de colisão
    if (tuboPosicao <= 130 && tuboPosicao > 0 && marioPosicao < 70) {
        // Fim do jogo
        pausarAnimacoes();
        jogoAtivo = false;
        clearInterval(loopJogo);

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosicao}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosicao}px`;
        mario.src = "assets/imgs/game-over.png";
        mario.style.width = '60px';
        mario.style.marginLeft = '70px';

        tituloControle.textContent = 'Game Over';
        botaoRetomar.classList.add('oculto');
        painelControle.classList.remove('oculto');
    }
};

const reiniciarJogo = () => {
    // Limpa o loop anterior para evitar múltiplas execuções
    if (loopJogo) {
        clearInterval(loopJogo);
    }

    // Resetar o estado do jogo e as animações
    pontuacao = 0;
    placar.textContent = pontuacao;
    mario.style.animation = '';
    mario.style.bottom = '0px';
    mario.src = "assets/imgs/mario.gif";
    mario.style.width = '150px';
    mario.style.marginLeft = '0px';
    tubo.style.animation = 'animacao-tubo 2s infinite linear';
    tubo.style.left = '';
    tubo.dataset.pontuado = 'false';

    // Esconde os painéis de controle
    painelInicial.classList.add('oculto');
    painelControle.classList.add('oculto');
    jogoAtivo = true;
    jogoPausado = false;
    
    iniciarAnimacoes();
    loopJogo = setInterval(gameLoop, 10);
};

const pausarJogo = () => {
    if (!jogoAtivo || jogoPausado) return;
    jogoPausado = true;
    pausarAnimacoes();
    tituloControle.textContent = 'Jogo Pausado';
    botaoRetomar.classList.remove('oculto');
    painelControle.classList.remove('oculto');
};

const retomarJogo = () => {
    if (!jogoPausado) return;
    jogoPausado = false;
    iniciarAnimacoes();
    painelControle.classList.add('oculto');
};

const pulo = () => {
    if (!jogoAtivo || jogoPausado || mario.classList.contains('pulo')) {
        return;
    }
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 800);
};

// Event Listeners
document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    if (tecla === ' ' || tecla === 'ArrowUp') {
        // Iniciar ou reiniciar o jogo com a tecla espaço/seta
        if (!jogoAtivo) {
            reiniciarJogo();
        } else {
            pulo();
        }
    } else if (tecla === 'p' && jogoAtivo && !jogoPausado) {
        pausarJogo();
    } else if (tecla === 'p' && jogoAtivo && jogoPausado) {
        retomarJogo();
    }
});

gameBoard.addEventListener('click', () => {
    // Ação de iniciar/reiniciar com clique
    if (!jogoAtivo) {
        reiniciarJogo();
    } else {
        pulo();
    }
});
gameBoard.addEventListener('touchstart', () => {
    // Ação de iniciar/reiniciar com toque
    if (!jogoAtivo) {
        reiniciarJogo();
    } else {
        pulo();
    }
});

botaoIniciar.addEventListener('click', reiniciarJogo);
botaoRetomar.addEventListener('click', retomarJogo);
botaoReiniciar.addEventListener('click', reiniciarJogo);