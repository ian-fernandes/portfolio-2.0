// 1. Scroll Reveal - Efeito de Aparição Gradual
window.addEventListener('scroll', revealElements);

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// 2. Botão "Voltar ao Topo"
const toTopButton = document.createElement('button');
toTopButton.innerHTML = "&#8679;"; // Setinha para cima
toTopButton.classList.add('to-top-button');
document.body.appendChild(toTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
});

toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 3. Animação nos Botões de Projeto
const projectButtons = document.querySelectorAll('.project-buttons .button');

projectButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.5)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});