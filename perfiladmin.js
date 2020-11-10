$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

  //const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 
  const URL = 'http://localhost:5000/'

  $('#modificar').click(function(){
    var nombre=$('#name').val()
    var apellido=$('#apellido').val()
    var user=$('#user').val()
    var contra=$('#contra').val()
    
    let body={
      id:localStorage.getItem('user').id,
      user:user,
      apellido:apellido,
      pswd:contra,
      nombre:nombre,
    };
    console.log(body);
    recuperar('POST',URL+'usuario/editar',body,function(data){
      console.log(data)
    });
  })


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