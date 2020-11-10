$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null) {
     return null;
  }
  return decodeURI(results[1]) || 0;
}


$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

  const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 

  var id = $.urlParam('id');
  console.log(id);

  recuperar('GET',URL+'juego/get?id='+id,null,function(data){
    console.log(data)
    data=data.juego
    let t= ''
    data.categoria.forEach(element => {
      t+=element
    });
    
    $('#detalle').html(`
      <div class="card">

          <img src=`+data.foto+` alt="game5" style="width:100%">
          <h1>`+data.nombre+`</h1>
          <p class="price">Q.`+data.precio+`</p>
          <p>`+t+`</p>

      </div>

      <q id="descripcion"> `+data.descripcion+` </q>

      <div class="info">
          <div id=comment></div>
          <input id="example" type="text" name="example" size="20">
          <button id="sent">Enviar</button>
      </div>
    `)
    $('#sent').click(function(){
      var texto = $('#example').val()
      $('#comment').append("<label id=comment>"+texto+"</label><br/>")
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