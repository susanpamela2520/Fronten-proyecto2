$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

    const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 


    recuperar('GET', URL + 'juego', null, function (data) {
        var cadena = "";
        console.log(data)
        for (var juego of data.juegos) {
            console.log(juego)
            cadena += '<div class="card"><img src="' + juego.foto + '"alt="game1" style="width:100%">' +
                '<h1>"' + juego.nombre + '"</h1>'
                + '<p class="price">"' + juego.precio + '"</p>'
                + '<p>"' + juego.descripcion + '"</p>'
                + '<a href="detalle.html?id=' + juego.id + '"><p><button>Detalle</button></p></a>' + '</div>'
        }

        console.log($('#juegos'))
        $("#juegos").html(cadena)
    })

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