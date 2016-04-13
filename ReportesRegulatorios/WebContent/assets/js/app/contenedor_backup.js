//Inicializar scope
(function(scope){

	//Pintar lista del menú del usuario
	function renderList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','lblPopupList');
        ul.appendChild(li);
		var imagen='';        
        var textImg = element.split(",");
        t = document.createTextNode(textImg[1]);

        //key
        if(textImg.indexOf('key')>-1){
	       imagen = '<img id="imgPopupList" src="assets/images/usuario_passw.png">';
		}
		if(textImg.indexOf('door')>-1){
			imagen = '<img id="imgPopupList" src="assets/images/usuario_sesion.png">';
		}
       	console.log("Imagen: "+imagen);
		li.innerHTML=li.innerHTML + imagen + textImg[1];
    }

	//Crear constructor de la aplicación
	function contenedor(){
		console.log("Iniciando contendor");

		//Limpiamos la pantalla principal
		$("#PrincipalIndex").html('');

		//Iniciamos el 2do screen
		this.initialize();
	}

 	//Iniciando variables privadas
	var divPrincipal = ContenedorLogin.prototype;
	var divMenu = ContenedorLogin.prototype;
	var divContenedor = ContenedorLogin.prototype;
	var divPopup = ContenedorLogin.prototype;
	var input = ContenedorLogin.prototype;
	var label = ContenedorLogin.prototype;
	var img = ContenedorLogin.prototype;
	var btn = ContenedorLogin.prototype;
	var ul = ContenedorLogin.prototype;

	//Paths a imagenes


	//Contenedor principal
	var idContenedorPrincipal = contenedor.prototype;

	//Función de carga
	contenedor.prototype.initialize = function(){
		var self = this;
		//Asignar elemento principal
		self.idContenedorPrincipal = "PrincipalIndex";

	/**
		HeaderBar
	**/
		//Div principal
		this.divPrincipal = document.createElement("header");
		this.divPrincipal.id = "headerBar";
		this.divPrincipal.className="navbar navbar-fixed-top navbar-shadow fixed-nav-bar";
		publicMF.addElement(this.divPrincipal,this.idContenedorPrincipal);

		//Left - Logo?
		this.divPrincipal = document.createElement("div");
		this.divPrincipal.id="Left";
		publicMF.addElement(this.divPrincipal,"headerBar");
		$("#Left").html("CEDEVIS");  //Test

		//BtnMenu
		this.divPrincipal = document.createElement("div");
		this.divPrincipal.id="BtnMenu";
		publicMF.addElement(this.divPrincipal,"headerBar");

		//Imagen
		this.img = document.createElement("img");
		this.img.id="BtnMenu2";
		this.img.src="assets/images/menu02.png";
		this.img.onmouseover= function(){
			this.src='assets/images/Menu01.png';
		}
		this.img.onmouseout=function(){
			this.src='assets/images/menu02.png';
		}
		publicMF.addElement(this.img,"BtnMenu")

		//Label ubicación
		this.label = document.createElement("label");
		this.label.className="ubicacion";
		publicMF.addElement(this.label,"BtnMenu")
		$(".ubicacion").html("Ubicación");


		//RIGHT
		this.divPrincipal = document.createElement("div");
		this.divPrincipal.id="Right";
		publicMF.addElement(this.divPrincipal,"headerBar");
		

		//Mostrar usuario, nombre, etc...
		this.label = document.createElement("label");
		this.label.id="info_usuario";
		publicMF.addElement(this.label,"Right");
		$("#info_usuario").html("temp");


		//Imagen del usuario		
		this.img  = document.createElement("img");
		this.img.id = "btnCSesion";
		this.img.src="assets/images/usuario.png";
		this.img.onmouseover = function(){
			this.src = 'assets/images/usuario_1.png';
		}
		this.img.onmouseout = function(){
			this.src = 'assets/images/usuario.png';
		}
		publicMF.addElement(this.img,"Right");

		//Popup del usuario

		this.divPopup = document.createElement("div");
		this.divPopup.id= "pop-up";
		publicMF.addElement(this.divPopup,"Right")

		ul=document.createElement('ul');
		ul.id="popupList";
		//publicMF.addElement(ul,"pop-up");

		var t, tt;
    	var productList = ['key,Cambiar contraseña','door,Cerrar sesión'];
		document.getElementById('pop-up').appendChild(ul);
    	productList.forEach(renderList);

	/**
		TERMINA HEADER BAR
	**/


	/** 
		INICIA MENU BAR
	**/
		this.divMenu = document.createElement("div");
		this.divMenu.id = "accordian";
		$("#"+self.idContenedorPrincipal).append(this.divMenu);	
		$("#accordian").html("asdjklasdjklsdajklasdjklasdjkl");
	/**
		TERMINA MENU BAR
	**/


	/**
		INICIA CONTENEDOR
	**/
		this.divContenedor = document.createElement("div");
		this.divContenedor.className="contenedor";
		$("#"+self.idContenedorPrincipal).append(this.divContenedor);	
	/**
		TERMINA CONTENEDOR
	**/
	}

	scope.contenedor = contenedor;
	//Inicializar el constructor para iniciar con el front principal
	new scope.contenedor();
}(window));
