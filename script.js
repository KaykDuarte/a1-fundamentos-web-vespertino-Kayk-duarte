const form = document.getElementById('form-relatorio');
const relatorio = document.getElementById('relatorio');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    mensagem.hidden = false;
    form.reset();
    setTimeout(function () {
        window.location.href = 'painel.html';
    }, 3000);
});

