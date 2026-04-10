// Aguarda o DOM carregar e confia que o GSAP já foi importado via CDN no index.html
document.addEventListener("DOMContentLoaded", () => {
  // GSAP animations ANTES do registerPlugin corrigido - SEMPRE PRIMEIRO
  gsap.registerPlugin(ScrollTrigger);

  // Inicializamos a timeline do GSAP com easing premium
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1.4
    }
  });

  // Mostramos os cards que estavam invisíveis
  gsap.set(".glass-card", { visibility: "visible" });
  gsap.set(".navbar", { visibility: "visible" });

  // 1. Animação da Navbar deslizando de cima suavemente
  tl.fromTo(".navbar",
    { y: -60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2 }
  );

  // 2. Animação de Stagger para os Glassmorphism cards deslizando de baixo
  tl.fromTo(".glass-card",
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.25
    },
    "-=0.8" // Offset para iniciar antes da navbar terminar o fade-in 
  );

  // 3. (Opcional) Micro-interação levitando a thumbnail suavemente
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    gsap.to(".thumbnail-img", {
      scale: 1.05,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }

  /* =========================================
     SCROLLTRIGGER: FEATURES SECTION
     ========================================= */

  // Animando a entrada dos triângulos (formas geométricas)
  gsap.from(".triangle", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 85%", // Dispara quando o topo da seção atinge 70% da viewport
    },
    y: 60,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out"
  });

  // Entrada Textual (Cromo Title e subtítulo)
  gsap.from(".features-content > *", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 90%", // Dispara bem no início para evitar invisibilidade
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
  });

  // Entrada da lista vertical
  gsap.from(".numbered-list .list-item", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 80%",
    },
    x: 30,
    duration: 1,
    stagger: 0.1, // Efeito escada
    ease: "power2.out",
    clearProps: "transform" // Ouro: garante que transform do CSS (como translateX(8px) no hover) volte a funcionar perfeitamente!
  });

  // Animação direcional das linhas divisoras ao entrar na viewport
  // .divider-long: scaleX 0->1 com transform-origin: left (CSS já configura)
  // .divider-short: scaleX 0->1 com transform-origin: right (CSS já configura)
  gsap.from(".numbered-list .divider", {
    scrollTrigger: {
      trigger: ".features-right",
      start: "top 85%",
    },
    scaleX: 0, // Entram do 0 até o tamanho nativo do CSS
    duration: 0.8,
    stagger: {
      each: 0.12,
      from: "start",
    },
    ease: "power3.out",
    clearProps: "transform" // Restaura o controle absoluto pro arquivo de SCSS
  });

  /* =========================================
     SCROLLTRIGGER: DIAMOND GALLERY SECTION
     ========================================= */

  // Título entra de baixo com escala sutil
  gsap.from(".diamond-title", {
    scrollTrigger: {
      trigger: ".diamond-section",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // Subtítulo aparece depois do título
  gsap.from(".diamond-subtitle", {
    scrollTrigger: {
      trigger: ".diamond-section",
      start: "top 80%",
    },
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
  });

  // Losangos entram com stagger: esquerdo → centro → direito
  gsap.from(".diamond-left", {
    scrollTrigger: { trigger: ".diamond-section", start: "top 75%" },
    x: -80, opacity: 0, duration: 1.1, ease: "power3.out"
  });
  gsap.from(".diamond-center", {
    scrollTrigger: { trigger: ".diamond-section", start: "top 75%" },
    y: 80, opacity: 0, duration: 1.1, delay: 0.2, ease: "power3.out"
  });
  gsap.from(".diamond-right", {
    scrollTrigger: { trigger: ".diamond-section", start: "top 75%" },
    x: 80, opacity: 0, duration: 1.1, delay: 0.1, ease: "power3.out"
  });

  /* =========================================
     SCROLLTRIGGER: COMFORT SECTION
     ========================================= */

  /* =========================================
     SCROLLTRIGGER: INTERIOR GRID SECTION
     ========================================= */
  gsap.from(".interior-title", {
    scrollTrigger: {
      trigger: ".interior-section",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(".bento-item", {
    scrollTrigger: {
      trigger: ".bento-grid",
      start: "top 75%",
    },
    y: 30,
    scale: 0.95,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  });

  /* =========================================
     SCROLLTRIGGER: COMFORT SECTION
     ========================================= */
  gsap.from(".comfort-title", {
    scrollTrigger: {
      trigger: ".comfort-section",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(".comfort-stage .text-item", {
    scrollTrigger: {
      trigger: ".comfort-stage",
      start: "top 60%", // Aparece quando a imagem já está bem visível
    },
    opacity: 0,
    y: 20, 
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  /* =========================================
     SCROLLTRIGGER: FOREST VIEW SECTION
     ========================================= */
  gsap.from(".forest-title-box", {
    scrollTrigger: {
      trigger: ".forest-section",
      start: "top 75%",
    },
    x: -80, // Entra deslizando da esquerda
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });

  gsap.from(".forest-right", {
    scrollTrigger: {
      trigger: ".forest-section",
      start: "top 65%",
    },
    x: 80, // Entra deslizando da direita
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.2
  });

  /* =========================================
     SCROLLTRIGGER: EXPLORE SECTION (REFORMULADO)
     ========================================= */
  const exploreTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".explore-section",
      start: "top 70%", // Aciona de forma confiável
      toggleActions: "play none none reverse", // Reinicia suavemente se subir e descer a página
    }
  });

  exploreTl.fromTo(".explore-left > *", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
  )
  .fromTo(".video-thumbnail-card", 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      stagger: 0.15, // Cascata elegante entre card 1 e card 2
      ease: "power3.out",
      clearProps: "transform" // O ouro puro: limpa os rastros do GSAP que desalinhava os cards depois da animação
    },
    "-=0.6" // Começa sincronizado e muito sutil
  );

  /* =========================================
     SCROLLTRIGGER: CONTACT SECTION
     ========================================= */
  gsap.fromTo(".contact-card",
    { y: 60, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }
  );

  gsap.fromTo(".site-footer",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".site-footer",
        start: "top 95%",
      },
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }
  );

  /* =========================================
     INTERACTIVE GALLERY (FEATURES SECTION)
     ========================================= */
  const galleryData = {
    chale: [
      "imgs/vista-bosque-rio.webp",
      "imgs/nevoa-densidade.webp",
      "imgs/sala-do-chale.webp",
      "imgs/lareira.webp"
    ],
    bosque: [
      "imgs/o-bosque.webp",
      "imgs/luzes-bosque.webp",
      "imgs/pinheiros-nevoa.webp",
      "imgs/pinheiros-visto-de-cima.webp"
    ],
    rio: [
      "imgs/rio.webp",
      "imgs/rio (2).webp",
      "imgs/rio (3).webp",
      "imgs/rio (4).webp"
    ],
    aconchego: [
      "imgs/tecido-do-cobertor.webp",
      "imgs/cama-do-chale.webp",
      "imgs/poltrona-aconchegante.webp",
      "imgs/vinhos-lareira.webp"
    ],
    detalhes: [
      "imgs/meias-lareira.webp",
      "imgs/cafe-na-janela.webp",
      "imgs/lenha.webp",
      "imgs/cozinha-do-chale.webp"
    ],
    horizonte: [
      "imgs/horizonte.webp",
      "imgs/horizonte (2).webp",
      "imgs/montanha.webp",
      "imgs/vista-dos-pinheiros-do-chão.webp"
    ],
    noturno: [
      "imgs/noturna.webp",
      "imgs/vista-noturna.webp",
      "imgs/vista-noturna-do-rio.webp",
      "imgs/vista-noturna-ceu.webp"
    ]
  };

  const galleryItems = document.querySelectorAll('.interactive-gallery-nav .list-item');
  const triangleWrappers = document.querySelectorAll('.triangles-strip .triangle');
  const triangleImages = document.querySelectorAll('.triangles-strip .triangle img');

  // Variável Global da Galeria para gerenciar cancelamentos suaves e cliques rápidos
  let currentGalleryTl = null;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('is-active')) return;

      const category = item.getAttribute('data-category');
      const newSrcs = galleryData[category];

      if (newSrcs) {
        // Kill imediato da timeline em andamento (overlapping orgânico)
        if (currentGalleryTl) {
          currentGalleryTl.kill();
        }

        // Atualizar estado ativo da lista instantaneamente (o CSS vai transitar as cores da linha lisamente)
        galleryItems.forEach(li => li.classList.remove('is-active'));
        item.classList.add('is-active');

        // Cria a nova Timeline orgânica e atribui à Variável Global
        currentGalleryTl = gsap.timeline();

        // 1. Fade-out das formas inteiras e recuo! (Fade leva todo decorativo, até as linhas amarelas!)
        currentGalleryTl.to(triangleWrappers, {
          opacity: 0,
          scale: 0.95,
          y: -15,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.inOut"
        }, 0);

        // 2. Transição cega de DOM no "Vale Obscuro" do GSAP (ocorre silenciosamente aos 0 opaque)
        currentGalleryTl.call(() => {
          triangleImages.forEach((img, idx) => {
            if (newSrcs[idx]) {
              img.src = newSrcs[idx];
            }
          });
        });

        // 3. Fade-in triunfal das formas em escala simultânea
        currentGalleryTl.to(triangleWrappers, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "transform,scale,y" // Ouro: garante compatibilidade futura do CSS :hover preservando opacity
        }, "+=0.05");
      }
    });
  });

});
