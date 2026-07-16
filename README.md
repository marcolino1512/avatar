# 🌍 Avatar — Os Quatro Elementos

> Um site interativo inspirado no universo de **Avatar: A Lenda de Korra**, com transições animadas entre os quatro elementos: Água 💧, Ar 🌬️, Fogo 🔥 e Terra 🪨.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🔄 Slider circular | Transição animada entre os 5 slides com efeito de rotação e escala |
| 🎵 Música ambiente | Toca/pausa a trilha sonora da Korra com loop automático |
| 📱 Responsivo | Layout adaptado para desktop, tablet e mobile |
| 🍔 Menu hambúrguer | Navegação mobile com animação de abertura em tela cheia |

---

## 🗂️ Estrutura do Projeto

```
Html-teste-18/
├── 📄 index.html       — Estrutura HTML do site
├── 🎨 style.css        — Estilos, animações e responsividade
├── ⚙️ main.js          — Lógica dos slides, música e menu mobile
├── 📁 img/
│   ├── 🌐 Korra.png    — Slide 1: Equilíbrio
│   ├── 💧 agua.jpg     — Slide 2: Água
│   ├── 🌬️ Ar.jpg       — Slide 3: Ar
│   ├── 🔥 fogo.jpg     — Slide 4: Fogo
│   └── 🪨 Terra.jpg    — Slide 5: Terra
└── 📁 som/
    └── 🎵 Korra.mp3    — Trilha sonora ambiente
```

---

## 🚀 Como usar

1. Clone ou baixe o repositório
2. Abra `index.html` no seu navegador
3. Clique no botão 🔄 (canto inferior direito) para trocar de elemento
4. Clique no botão 🎵 para tocar/pausar a música

> ⚠️ O áudio pode exigir interação do usuário antes de tocar (política dos navegadores modernos).

---

## 🎨 Slides disponíveis

| # | 🌐 Elemento | 🏷️ Título | 💬 Subtítulo |
|---|---|---|---|
| 1 | 🌐 Korra | Equilíbrio | Avatar |
| 2 | 💧 Água | Água | Adaptação |
| 3 | 🌬️ Ar | Ar | Livre |
| 4 | 🔥 Fogo | Fogo | Incandescente |
| 5 | 🪨 Terra | Terra | Sólido |

---

## ⚡ Performance

As animações usam:
- **`will-change: transform, opacity`** — pré-aloca camadas GPU evitando jank
- **`backface-visibility: hidden`** — reduz custo de renderização 3D
- **`transform: translateZ(0)`** — força compositing independente por círculo
- **Bloqueio de duplo-clique** — impede que cliques rápidos sobreponham animações

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| > 1024px | Layout desktop completo |
| ≤ 1024px | Padding e fontes reduzidos (tablet) |
| ≤ 768px | Menu hambúrguer, fontes fluidas com `clamp()` |
| ≤ 480px | Textos compactos para telas pequenas |

---

## 🛠️ Tecnologias

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat) HTML5 semântico
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat) CSS3 com animações e `clip-path`
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) JavaScript puro (Vanilla JS)
- [Boxicons](https://boxicons.com/) — ícones SVG via CDN

---

## 📝 Licença

Projeto pessoal para fins educacionais e criativos. 🎨
