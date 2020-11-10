$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

    const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 

    $('#login').click(function () {
        var name = $('#name').val();
        var password = $('#password').val();
        recuperar('GET', URL + '/login?user=' + name + '&pswd=' + password, null, function (data) {
            console.log(data)
            if (data.user) {
                console.log('usuario encontrado:' + data.user);
                localStorage.setItem('user',data.user)
                window.location.href = (data.user.tipo == 0 ? './paginaprincipaladmin.html' : './paginaprincipalclientes.html');
                
            } else {
                alert('usuario o contraseña incorrecta');
            }
        })
    });



    function recuperar(method, url, data, funcion) {  //#metodo (get o post) url es la del servidor data son los objetos jason funcion lo que hace cuando retorne la data
        $.ajax({
            type: method,
            url: url,
            data: data,
            success: function (data) {
                funcion(data);
            }
        });
    }


});