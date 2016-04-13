var publicMF = (function(scope)
{
//Métodos privados
	_addElement = function(elemento,idContenedorPrincipal){
		var Contenedor = document.getElementById(idContenedorPrincipal);
		Contenedor.appendChild(elemento); 
	};
	//Métodos públicos
    return {
        //Agregar elemento a algún contenedor
        addElement: function(elemento,idContenedorPrincipal){
          	_addElement(elemento,idContenedorPrincipal);
        }
    };

})();