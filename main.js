// ─────────────────────────────────────────
// 🌀 AVATAR - Os Quatro Elementos
// ─────────────────────────────────────────

// ⏳ LOADER — cicla os 4 elementos e some após 2 segundos
const loader = document.getElementById('loader');
const lcEl   = document.getElementById('lcElement');

const loaderElements = [
    { label: '💧 Água',  color: '#38bdf8' },
    { label: '🌬️ Ar',   color: 'rgb(43,255,0)' },
    { label: '🔥 Fogo',  color: '#f97316' },
    { label: '🪨 Terra', color: '#a3820a' },
];

let lcIdx = 0;
let loaderRemoved = false;

const lcCycle = setInterval(() => {
    lcIdx = (lcIdx + 1) % loaderElements.length;
    lcEl.style.opacity = '0';
    setTimeout(() => {
        lcEl.textContent = loaderElements[lcIdx].label;
        lcEl.style.color = loaderElements[lcIdx].color;
        lcEl.style.opacity = '1';
    }, 200);
}, 500);

// Esconde o loader via inline style (funciona independente do CSS)
function hideLoader() {
    if (loaderRemoved) return;
    loaderRemoved = true;
    clearInterval(lcCycle);
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    document.body.classList.remove('loading');
    setTimeout(() => { if (loader && loader.parentNode) loader.remove(); }, 500);
}

// Esconde após exatamente 2 segundos
setTimeout(hideLoader, 2000);
// Fallback: garante que some mesmo se algo atrasar
window.addEventListener('load', () => setTimeout(hideLoader, 2100));

// 🎯 Elementos do DOM
const rotateBtn   = document.getElementById('rotateBtn');
const slides      = document.querySelectorAll('.bg-slide');
const hamburger   = document.getElementById('hamburger');
const navbar      = document.getElementById('navbar');
const botaoMusica = document.getElementById('som');

const totalSlides = slides.length;
let index         = 0;
let isAnimating   = false; // 🔒 Trava duplo clique durante animação

// 🎵 Áudio com loop
const musica  = new Audio('som/Korra.mp3');
musica.loop   = true;
musica.volume = 0.7;

// ─────────────────────────────────────────
// 🔄 ROTAÇÃO DOS SLIDES
// ─────────────────────────────────────────
rotateBtn.addEventListener('click', () => {
    // 🔒 Bloqueia novos cliques enquanto a animação roda
    if (isAnimating) return;
    isAnimating = true;

    // 🔄 Gira o ícone do botão
    rotateBtn.classList.add('active');

    // ⏩ Marca slide atual como "saindo"
    slides[index].classList.add('after-active');
    slides[index].classList.remove('active');

    // 📌 Avança para o próximo índice
    index = (index + 1) % totalSlides;

    // ✅ Ativa o novo slide
    slides[index].classList.add('active');

    // 🧹 Limpa classes after-active dos slides que não são o atual saindo
    slides.forEach((slide, i) => {
        if (i !== (index - 1 + totalSlides) % totalSlides) {
            slide.classList.remove('after-active');
        }
    });

    // ⏳ Libera o botão após a animação completa (1.5s transição + 0.9s delay máx)
    setTimeout(() => {
        rotateBtn.classList.remove('active');
        isAnimating = false;
    }, 2100);
});

// ─────────────────────────────────────────
// 🎵 CONTROLE DE MÚSICA
// ─────────────────────────────────────────
botaoMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        botaoMusica.querySelector('i').className = 'bx bx-pause';
    } else {
        musica.pause();
        botaoMusica.querySelector('i').className = 'bx bx-music';
    }
});

// ─────────────────────────────────────────
// 🍔 MENU HAMBÚRGUER (mobile)
// ─────────────────────────────────────────
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('open');
    // 🔒 Impede scroll da página com menu aberto
    document.body.style.overflow = navbar.classList.contains('open') ? 'hidden' : '';
});

// Fecha menu ao clicar em um link
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('open');
        document.body.style.overflow = '';
    });
});
