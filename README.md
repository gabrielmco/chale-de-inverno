# O Refúgio de Inverno 🌲❄️

Uma Landing Page *Dark Luxe* meticulosamente desenvolvida para hospitalidade de ponta (Hotelaria Boutique). Arquitetura desenhada para evocar um sentimento de isolamento sereno nas montanhas.

## 🕸️ Visão Geral do Projeto

Este projeto é uma vitrine de imersão virtual, focado em alta-conversão tátil e polimento extremo na renderização. A interface adota premissas rígidas do design suíço misturado com componentes *Glassmorphism* para criar profundidade e elegância exclusivas em propriedades de luxo.

**URL em Produção**: *(Aguardando Deploy na Vercel/Netlify)*

### 💎 Pilares de Design (Pro Max UI/UX)
- **Aesthetic:** Interface baseada num tema de alto contraste *Dark Luxe* com gradações de cores da natureza (Prata, Ouro envelhecido, Verde profundo).
- **Core Layout:** Seções fluidas de alto engajamento, como o grid em mosaico diamante (`.diamond-gallery`) e malhas assimétricas (`bento grids`).
- **Responsive-edge:** Reengenharia completa do grid para usabilidade impecável no polegar (Mobile), com triângulos 100vw *edge-to-edge* mantendo a integridade poligonal do CSS.
- **Tipografia:** Famílias curadas de fontes de alto padrão (`Bebas Neue` para *Display* monolítico, `Outfit` para hiper legibilidade em corpo de leitura).

## 🛠️ Stack Tecnológica

O projeto foi conscientemente construído de forma limpa e modular sem a asfixia de frameworks pesados de mercado, apostando na eficiência e baixo *Render Blocking*:

- **Estrutura:** Semantic HTML5
- **Estilização:** Vanilla CSS3 compilado através de SCSS Modular (*Sass architecture*)
- **Animações (Motion):** GSAP (GreenSock) para coreografia de frames premium 
- **Otimizações:** LCP *Preload* explícito no Header, tratamentos nativos `.webp` para *Performance Budget* global e *Lazy Loading* cirúrgico para preservação de bateria mobile.

## 📂 Arquitetura de Pastas

```text
├── imgs/               # Artefatos visuais (.webp) e SVGs otimizados
├── js/                 # Motores Lógicos e Triggers GSAP
├── scss/               # Arquitetura modular de estilos (.scss)
│   ├── _hero.scss             # Front-desk component
│   ├── _features.scss         # Interactive triangle engine
│   ├── _diamond-gallery.scss  # Grids estáticos de imagem
│   └── ...                    
├── index.html          # Ponto de Orquestração Principal
└── README.md
```

## ⚙️ Como Executar o Projeto Localmente

Nenhum processo de build assíncrono extravagante (como npm, webpack ou vite) é exigido. Contudo, devido à requisição restrita de mapas e iframes, rolar a solução hospedada num mini-server pode facilitar o trabalho:

1. Clone o repositório
```bash
git clone https://github.com/gabrielmco/chale-de-inverno.git
```
2. Abra seu terminal na pasta do projeto e inicie um servidor vivo provisório (Extensão Live Server no VSCode é sugerida, ou via bash se houver Node.js):
```bash
npx serve .
```

---
> 💡 *Site com arquitetura de front-end escalável, otimizado para os sinais de experiência da web (Core Web Vitals) do Google Lighthouse.*
