$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 00000-0000'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder: '000.000.000-00'});

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'});

        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true,
                },
                CPF: {
                    required: true,
                },
                endereço: {
                    required: true,
                },
                estado: {
                    required: true,
                },
                cep: {
                    required: true,
                },
            },            
            submitHandler: function(form) {
                alert('Seu cadastro foi enviado com sucesso')
            },
            invalidHandler: function(evento, validador) {
                let Incorretos = validador.numberOfInvalids();
                if (Incorretos) {
                    alert(`Existem ${Incorretos} campos incorretos `);
                }
            }
        });
});