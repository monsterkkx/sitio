document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do EmailJS
    emailjs.init("5cnTLMqvbMC8cQekf");

    // Captura o formulário
    var myForm = document.getElementById('contact-form'); 

    // Evento de envio do formulário
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Envio do formulário via EmailJS
        emailjs.sendForm('service_9utqt0e', 'template_p596ldb', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset();
            }, function(error) {
                alert('Erro ao enviar a mensagem: ' + error);
            });
    });
});
