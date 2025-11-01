document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario__principal');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let nomeCompleto = document.getElementById('nomecompleto').value.trim();
        let email = document.getElementById('email').value.trim();
        let telefone = document.getElementById('telefone').value.trim();
        let mensagem = document.getElementById('mensagem').value.trim();
        let contatoPref = document.querySelector('input[name="contato"]:checked');
        let horarioPref = document.querySelector('select').value;
        let novidades = document.querySelector('.formulario__checkbox input').checked;

        if (nomeCompleto === '' || email === '' || telefone === '' || mensagem === '' || !contatoPref || horarioPref === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!telefone.match(/^\d{10,}$/)) {
            alert('Por favor, insira um telefone válido.');
            return;
        }

        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});