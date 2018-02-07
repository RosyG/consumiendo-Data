
  /*Función que manda a llamar al contenedo que será ocultado en el tiempo de la variable time, indicado en el body, al cargarse la página.*/
  function splash(time) {
  /*Función de splashscreen que recibe al tiempo en ms*/
  setTimeout(function () {
    $("#splashscreen").hide("slow");
    $("#principal").show();
  }, time);
  }

  /*Mandando a llamar a todos los elementos de HTML por DOM.*/
  var $nameRestaurant = $("#name-restaurant");
  var $imagen = $("#img-restaurant");
  var $motto = $("#motto");
  var $adress = $("#adress");
  var $princeRange = $("#price-range");
  var $homeService =$("#home-service");

  /*Mandando a ejecutar la función que filtrara por medio de food, cuando se da un click en filtrar restaurantes.*/
  $("#filtered").keyup(filterFood);

  /*Ejecutando el modal al dar click en las imagenes, para mostrar más información sobre los restaurantes*/
  $("#modal1").modal()

  /*Ejecutando la función para acceder a la data, que contiene la información del restaurante correspondiente a la imagen.*/
  $("#Japonesa").click(accessData);
  $("#China").click(accessData);
  $("#Portuguesa").click(accessData);
  $("#Argentina").click(accessData);

/*Función que añade la información de la data, tiene como parametros:
Nombre del restaurante, foto, leyenda, dirección, rango de precios y si tiene o no servicio a domicilio.*/
function accessData (event) {
  var target = $(event.target);/*Me arroja el elemento que detona al evento.*/
  var $index = target.data("index");/*Indice que corresponde al la información de la imagen, esa inf está dentro de la data.*/
////////////////////////////
  /*Valores de la data en cada rubro.*/
  var food = data[$index].food;
  var name = data[$index].name;
  var motto = data[$index].motto;
  var adress = data[$index].adress;
  var src = data[$index].photo;
  var princeRange = data[$index].prince;
  var homeService =  data[$index].services;

  console.log(src);
  console.log(food);
  console.log(adress);
  console.log(name);

  /*Ejecutando la función que dibuja los valores en HTML.*/
  paintInformationInHtml (name,motto,adress,src,princeRange,homeService);

  $("#close").click(cleanVar);/*Al cerrar el modarl se ejecuta la función cleanVar() para poder borrar todos los campos.*/

}//Fin de función accessData().
  /*Declaraión de la función que pinta los valores de la información del restaurante en HTML.*/
  function paintInformationInHtml (name,motto,adress,src,princeRange,homeService) {
    /*Agregando a lo que se accedio por medio de DOM.*/
    $nameRestaurant.append(name);
    $imagen.attr("src",src);
    $motto.append(motto)
    $adress.append(adress);
    $princeRange.append(princeRange);
    $homeService.append(homeService);

  }
  /*Declaración de la función que limpia los campos.*/
  function cleanVar() {
    $nameRestaurant.empty();
    $imagen.empty();
    $motto.empty();
    $adress.empty();
    $princeRange.empty();
    $homeService.empty();

  }

  /*Declaración de la función que filtrara los restaurantes  */
  function filterFood (){
  var searchFood = $("#filtered").val().toLowerCase(); /*El value del filtro se convierte en minúsculas para poder hacer que la comparació coincida. */
    if($("#filtered").val().trim().length > 0) {
        //Si en el filtro no es vacío se ejecuta de AQUÍ
        var filteredFood = data.filter(function(index) {

            return index.food.toLowerCase().indexOf(searchFood) >= 0;
            /*Index of busca al item especificado entre parentesis y devuelve la posición localizada.*/

        });
      $("#publish-restaurant").empty();
      filteredFood.forEach(function(index){
        paintfoodInHtml(index);
        console.log(index.food);
      });
      //Hasta AQUÍ
    } else if ($("#filtered").val().trim().length == 0) {
        $("#publish-restaurant").empty();/*Si en el input es vacío, se borra la lista.*/
    }else {
      $("#publish-restaurant").empty();
      data.forEach(function(index){
        paintfoodInHtml(index);
        console.log(index.food);
      });
    }
  }
  /*Función que pinta las imágenes en HTML*/
  function paintfoodInHtml (index){
     var $optionRestaurant = $("<p/>");
     //Añadiendo el texto a la nueva variable creada.
     $optionRestaurant.text(index.name);
     //Agregando al contenedor del HTML.
     $("#publish-restaurant").prepend($optionRestaurant);

  }
