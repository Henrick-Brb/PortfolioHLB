document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const serviceID = "service_k0123kd"; 
    const templateID = "template_00510vs"; 

    const templateParams = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensagem enviada com sucesso!'); // Feedback ao usuário
            document.getElementById('formulario-contato').reset(); //limpa o formulário.
        }, function(error) {
            console.error('FAILED...', error);
            alert('Falha ao enviar a mensagem. Tente novamente.');
        });
});