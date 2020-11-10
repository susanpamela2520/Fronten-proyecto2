$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

    const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 

    $('#registro').click(function () {
        var user = $('#user').val();
        var name = $('#name').val();
        var lastname = $('#lastname').val();
        var password = $('#password').val();
        var confirm = $('#confirm').val();

        if (password !== confirm) {
            alert('las contraseñas no son iguales')
            return;
        }

        var body = {
            user: user, nombre: name, apellido: lastname, pswd: password
        }

        recuperar('POST', URL + '/registro', body, function (data) {
            console.log(data)
            if (data.ok) {
                window.location.href = './paginaprincipalclientes.html';

            } else {
                alert('registro incorrecto');
            }
        })
    });



    function recuperar(method, url, data, funcion) {  //#metodo (get o post) url es la del servidor data son los objetos jason funcion lo que hace cuando retorne la data
        $.ajax({
            type: method,
            url: url,
            data: JSON.stringify(data),
            'contentType': 'application/json',
            success: function (data) {
                funcion(data);
            }
        });
    }


});