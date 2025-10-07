// Adicionar interatividade extra
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe quando scrollar
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navegacao');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
            nav.style.backdropFilter = 'none';
        }
    });

    // Adicionar confirmação no formulário
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(e) {
        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !mensagem) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos!');
            return false;
        }
    });
});