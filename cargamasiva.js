$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

    const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 
   

    $('#subir').click(function (){

        var file = $('#archivo').get(0).files[0]
        console.log(file)

        var reader = new FileReader;
        reader.readAsText(file);
        var t = null
        reader.onload = function (e) {
            let a = {data:reader.result.replace('\r','')};
            console.log(a)
            if(a!=null)
                $.ajax({
                    type: 'POST',
                    url: URL+'carga',
                    data: JSON.stringify(a),
                    'contentType': 'application/json',
                    success: function (data) {
                        console.log(data);
                    }
                });
        };
        
    })





    function recuperar(method, url, data, funcion) {  //#metodo (get o post) url es la del servidor data son los objetos jason funcion lo que hace cuando retorne la data
        
    }


});