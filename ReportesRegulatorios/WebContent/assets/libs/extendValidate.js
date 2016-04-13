//Acción por default del submit
$.validator.setDefaults({
		submitHandler: function() {
			//alert("submitted!");
		}
});

//Traducción a español de los mensajes de jQuery
jQuery.extend(jQuery.validator.messages, {
	  required: "Este campo es obligatorio.",
	  remote: "Por favor, rellena este campo.",
	  email: "Por favor, escribe una dirección de correo válida",
	  url: "Por favor, escribe una URL válida.",
	  date: "Por favor, escribe una fecha válida.",
	  dateISO: "Por favor, escribe una fecha (ISO) válida.",
	  number: "Por favor, escribe un número entero válido.",
	  digits: "Por favor, escribe sólo dígitos.",
	  creditcard: "Por favor, escribe un número de tarjeta válido.",
	  equalTo: "Por favor, escribe el mismo valor de nuevo.",
	  accept: "Por favor, escribe un valor con una extensión aceptada.",
	  maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
	  minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
	  rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
	  range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
	  max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
	  min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}."),
	  alphanumeric:"Solo se permiten caracteres A-Z 0-9"
	});

//Validaciones alfanumericas
$.validator.addMethod("alphanum", function(value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
}, "Solo se permiten caracteres A-Z 0-9");
$.validator.addMethod("alphanumeric2", function(value, element) {
   var valor = $('input:radio[name="radioCasaActual"]:checked').val();
   if(valor.indexOf("Propia") > -1){
      return this.optional(element) || value == value.match(/^[a-zA-Z0-9 ]*$/)
   }else{
      return false;
   }
}, "Solo se permiten caracteres A-Z 0-9");

//Recibe el arreglo de datos a enviar, la URL y regresa el resultado de la petición
function _peticionAjax(Arry,UrL){
	console.log("entro a la petición");
	$.ajax({
	    url: UrL,
	    cache: false,
	    crossDomain:true,
	    dataType: "json",
	    async: true, 
	    contentType: "application/json",
	    // Asignamos los datos
	    data:Arry,
	    // Regresamos la respuesta
	    success: function( response ) {
	    	console.log("r: "+response);
	    	return response;
	    },
	    error: function(XMLHttpRequest, textStatus, errorThrown) {
	    	return "<br>No es posible conectar con el servidor";
	    }
	});
}

//Importar archivos JS
function importJS(script){
	var import_js_imported = [];
	var found = false;
    for (var i = 0; i < import_js_imported.length; i++)
        if (import_js_imported[i] == script) {
            found = true;
            break;
        }

    if (found == false) {
        $("head").append('<script type="text/javascript" src="' + script + '"></script>');
        import_js_imported.push(script);
    }
}

//Crear accesos a las funciones, mediante una extensión de jQuery
(function($)
{
    $.extend(true,
    {
        import_js : function(script)
        {
           importJS(script); 
        },peticionAjax : function(Array)
       	{
           return _peticionAjax(Array);
        }
    });

})(jQuery);