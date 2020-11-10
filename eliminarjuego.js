$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 
  
  
  recuperar('GET',URL+'juego',null,function(data){
    console.log(data);
    let html = '';
    for(let juego of data.juegos){
      html+=`
      <tr>
        <td><p>`+juego.id+`</p></td>
        <td><p>`+juego.nombre+`</p></td> 
        <td><p>`+juego.año+`</p></td>
        <td><p>`+juego.precio+`</p></td>
        <td><p>`+juego.categoria[0]+`</p></td>
        <td><p>`+juego.categoria[1]+`</p></td>
        <td><p>`+juego.categoria[2]+`</p></td>
        <td><p>`+juego.foto+`</p></td>
        <td><p>`+juego.banner+`</p></td>
        <td><p>`+juego.descripcion+`</p></td>
        <td><button id=`+juego.id+`>Eliminar</button></td>
      </tr>
      `
    }
    $('#tabla').append(html)
    $('button').click(function(e){
      var id=e.target.id;
      recuperar('GET',URL+'juego/del?id='+id,null,function(data){
        console.log(data)
      })
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