//Inicializar scope
(function(scope){
	//Crear constructor de la aplicación
	function App(){
		console.log("Iniciando aplicacion");
		this.initialize();
	}

	//Declaracion de variables generales, principales
	var LoginCall = App.prototype;

	//ID de divs

	//Paths a imagenes

	//Contenedor principal
	var idContenedorPrincipal = App.prototype;

	//Función de carga
	App.prototype.initialize = function(){
		var self = this;
		//Asignar elemento principal
		self.idContenedorPrincipal = "PrincipalIndex";

		//Iniciar div login
		LoginCall = new ContenedorLogin();
	}

	scope.App = App;
}(window));

//Iniciar la carga de la aplicación una vez el navegador este listo
window.onload=function(){
	this.App = new App();
}
