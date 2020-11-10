$(document).ready(function(){   //#cuando ya este listo el documento que ejecute todas las acciones

    const URL='https://backend-proyecto2.herokuapp.com/';  //#variable constante que contiene la URL 

$('#recuperar').click(function(){
var user = $('#user').val();

recuperar('GET',URL+'/recuperacion?user='+user,null,function(data){
    console.log(data)
    if(data.ok){
    alert('el password es: ' +data.pass);

    }else{
        alert('usuario no encontrado');
    }
})
});



    function recuperar (method, url, data, funcion){  //#metodo (get o post) url es la del servidor data son los objetos jason funcion lo que hace cuando retorne la data
        $.ajax({
            type:method,
            url:url,
            data:data,
            success:function(data){
                funcion(data);
            }
        });
    }


});