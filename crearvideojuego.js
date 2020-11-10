$(document).ready(function () {   //#cuando ya este listo el documento que ejecute todas las acciones

  const URL = 'https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 
  

  $('#crear').click(function(){
    var name=$('#name').val()
    var year=$('#year').val()
    var precio=$('#precio').val()
    var cat1=$('#cat1').val()
    var cat2=$('#cat2').val()
    var cat3=$('#cat3').val()
    var foto=$('#foto').val()
    var banner=$('#banner').val()
    var desc=$('#desc').val()
    
    let body={
      name:name,
      year:year,
      price:precio,
      cat1:cat1,
      cat2:cat2,
      cat3:cat3,
      photo:foto,
      banner:banner,
      desc:desc
    };
    console.log(body);
    recuperar('POST',URL+'juego/new',body,function(data){
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