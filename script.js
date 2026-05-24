document.getElementById("year").textContent = new Date().getFullYear();

const branchLinks = {
  principal: "https://la-guarida-frontend-5uqi.vercel.app/",
  kids: "https://la-guarida-kids.vercel.app/"
};

document.querySelectorAll("[data-branch]").forEach((card) => {
  const branch = card.getAttribute("data-branch");
  const url = branchLinks[branch];

  if (!url) return;

  card.setAttribute("href", url);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

if (!prefersReducedMotion) {
  const spotlight = document.getElementById("spotlight");

  if (spotlight) {
    document.addEventListener("mousemove", (event) => {
      spotlight.style.left = `${event.clientX}px`;
      spotlight.style.top = `${event.clientY}px`;
    });
  }

  const canvas = document.getElementById("particles");
  const context = canvas?.getContext("2d");
  const particles = [];
  const particleCount = 46;

  const resizeCanvas = () => {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createParticle = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2.4 + 0.6,
    speedX: (Math.random() - 0.5) * 0.32,
    speedY: (Math.random() - 0.5) * 0.32,
    opacity: Math.random() * 0.35 + 0.12
  });

  const drawParticles = () => {
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(232, 48, 48, ${particle.opacity})`;
      context.fill();
    });

    requestAnimationFrame(drawParticles);
  };

  if (canvas && context) {
    resizeCanvas();
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(createParticle());
    }
    drawParticles();
    window.addEventListener("resize", resizeCanvas);
  }

  document.querySelectorAll(".branch-card:not(.card-soon)").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
