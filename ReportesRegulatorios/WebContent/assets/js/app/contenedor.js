//Inicializar scope
(function(scope){

	//Pintar lista del menú del usuario
	/*
 <li>
          <a class="accordion-toggle" href="#">
            <span class="glyphicon glyphicon-fire"></span>
            <span class="sidebar-title">Admin Plugins</span>
            
          </a>
          
        </li>
        */
	function renderList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','lblPopupList');

        var a = document.createElement('a');
        a.setAttribute('class','accordion-toggle');
        a.setAttribute('href','#');
        
        var span = document.createElement('span');
        span.setAttribute('class','sidebar-title');
		
		//Agregar span a elemento "a"
		a.appendChild(span);
        //Agregar A a elemento "li"
        li.appendChild(a);
        //Agregar elemento "li" a "ul"
        ul.appendChild(li);


        t = document.createTextNode(element);
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
		this.divPrincipal.className="navbar-branding dark";
		publicMF.addElement(this.divPrincipal,"headerBar");

		//Label ubicación
		this.label = document.createElement("label");
		this.label.id="ubicacion";
		this.label.className="navbar-brand";
		publicMF.addElement(this.label,"Left")
		$("#ubicacion").html("CEDEVIS");


		//BtnMenu
		this.divPrincipal = document.createElement("span");
		this.divPrincipal.id="toggle_sidemenu_l";
		this.divPrincipal.className="fa fa-align-justify";
		publicMF.addElement(this.divPrincipal,"Left");

		/*Imagen
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

		/*Label ubicación
		this.label = document.createElement("label");
		this.label.className="ubicacion";
		publicMF.addElement(this.label,"BtnMenu")
		$(".ubicacion").html("Ubicación");*/


		//RIGHT
		/*
			Nombre de usuario e img
		*/
		this.divPrincipal = document.createElement("ul");
		this.divPrincipal.className="nav navbar-nav navbar-right";
		this.divPrincipal.id="RightUl";
		publicMF.addElement(this.divPrincipal,"headerBar");
		
		//<li class="dropdown menu-merge open">
		this.divPrincipal = document.createElement("li");
		this.divPrincipal.className= "dropdown menu-merge open";
		this.divPrincipal.id="DropUsuarioLi";
		publicMF.addElement(this.divPrincipal,"RightUl")

		this.divPrincipal = document.createElement("a");
		this.divPrincipal.className= "dropdown-toggle fw700 p15";
		this.divPrincipal.id="DropUsuario";
		this.divPrincipal.setAttribute("data-toggle","dropdown");
		this.divPrincipal.setAttribute("aria-expanded","true");
		publicMF.addElement(this.divPrincipal,"DropUsuarioLi")

		//Imagen del usuario
		this.img = document.createElement("img");
		this.img.className="mw30 br64";
		this.img.src="http://livedemo00.template-help.com/wt_58393/theme-1/site/assets/img/avatars/1.jpg";
		publicMF.addElement(this.img,"DropUsuario");

		//Nombre del usuario
		this.divPrincipal = document.createElement("span");
		this.divPrincipal.className="hidden-xs pl15 pr5";
		this.divPrincipal.textContent = "Usuario";
		publicMF.addElement(this.divPrincipal,"DropUsuario");

		//Flecha del dropdown
		this.divPrincipal = document.createElement("span");
		this.divPrincipal.className="fa fa-angle-down hidden-xs";
		publicMF.addElement(this.divPrincipal,"DropUsuario");
		
			/** Parte del popup 
				<ul class="dropdown-menu list-group dropdown-persist w250" role="menu">
	            <li class="list-group-item">
	              <a href="#" class="animated animated-short fadeInUp">
	                <span class="fa fa-envelope"></span> Messages
	                <span class="label label-warning">2</span>
	              </a>
	            </li>
			**/
			this.divPrincipal = document.createElement("ul");
			this.divPrincipal.className="dropdown-menu list-group dropdown-persist w250";
			this.divPrincipal.setAttribute("role","menu");
			this.divPrincipal.id="menuPopupUsuario";
			publicMF.addElement(this.divPrincipal,"DropUsuarioLi");
			
			//Li para el menu Contraseña
			this.divPrincipal = document.createElement("li");
			this.divPrincipal.className= "list-group-item";
			this.divPrincipal.id="listPopupUsuarioPassw";
			publicMF.addElement(this.divPrincipal,"menuPopupUsuario")
			
			//Crear enlace
			this.divPrincipal = document.createElement("a");
			this.divPrincipal.className= "animated animated-short fadeInUp";
			this.divPrincipal.id="UsuarioCPassword";
			this.divPrincipal.href="#";
			publicMF.addElement(this.divPrincipal,"listPopupUsuarioPassw")

			//Nombre del menú
			this.divPrincipal = document.createElement("span");
			this.divPrincipal.className="fa fa-key";
			this.divPrincipal.textContent = "Contraseña";
			publicMF.addElement(this.divPrincipal,"UsuarioCPassword");


			//Li para el menu Salir
			this.divPrincipal = document.createElement("li");
			this.divPrincipal.className= "list-group-item";
			this.divPrincipal.id="listPopupUsuarioCSesion";
			publicMF.addElement(this.divPrincipal,"menuPopupUsuario")
			
			//Crear enlace
			this.divPrincipal = document.createElement("a");
			this.divPrincipal.className= "animated animated-short fadeInUp";
			this.divPrincipal.id="UsuarioCSesion";
			this.divPrincipal.href="#";
			publicMF.addElement(this.divPrincipal,"listPopupUsuarioCSesion")

			//Nombre del menú
			this.divPrincipal = document.createElement("span");
			this.divPrincipal.className="fa fa-close";
			this.divPrincipal.textContent = "Cerrar Sesion";
			publicMF.addElement(this.divPrincipal,"UsuarioCSesion");


	/**
		TERMINA HEADER BAR
	**/


	/** 
		INICIA MENU BAR
		<aside id="sidebar_left" class="nano nano-light affix has-scrollbar sidebar-default">
	**/
		this.divMenu = document.createElement("aside");
		this.divMenu.id = "sidebar_left";
		this.divMenu.className="nano nano-light affix has-scrollbar sidebar-default";
		publicMF.addElement(this.divMenu,self.idContenedorPrincipal);


		//<ul class="nav sidebar-menu">
		this.ul = document.createElement("ul");
		this.ul.id = "sidebarMenu_ul";
		this.ul.className="nav sidebar-menu";
		publicMF.addElement(this.ul,"sidebar_left");

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



		//Cargar archivo de jquery
		$.import_js('assets/js/app/jquery_app.js');

	}

	scope.contenedor = contenedor;
	//Inicializar el constructor para iniciar con el front principal
	new scope.contenedor();
}(window));
