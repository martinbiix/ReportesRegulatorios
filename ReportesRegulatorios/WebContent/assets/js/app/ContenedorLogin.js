(function(scope){
	//Construnctor
	function ContenedorLogin(){
		this.initialize();
	}

	//Variables
	var divPrincipalLogin = ContenedorLogin.prototype;
	var divBotones = ContenedorLogin.prototype;
	var formulario = ContenedorLogin.prototype;
	var formularioTxt = ContenedorLogin.prototype;
	var formularioImg = ContenedorLogin.prototype;
	var publicM = ContenedorLogin.prototype;

	//Inicializar
	ContenedorLogin.prototype.initialize= function(){

		var x = this;
		//Div principal
		this.divPrincipalLogin = document.createElement("div");
		this.divPrincipalLogin.id = "LoginMain";
		this.divPrincipalLogin.className="flexme";
		publicMF.addElement(this.divPrincipalLogin,"PrincipalIndex");

		//Logos infonavit
		this.formularioImg = document.createElement("img");
		this.formularioImg.id="LogoInfonavitPrincipal";
		this.formularioImg.src="assets/images/logo_info.png";
		publicMF.addElement(this.formularioImg,"PrincipalIndex");

		//Logo centrado de infornavit
		this.formularioImg = document.createElement("img");
		this.formularioImg.id="iso_logo";
		this.formularioImg.src="assets/images/iso_logo.jpg";
		publicMF.addElement(this.formularioImg,"LoginMain");

		//Div chld de LoginMain
		this.divPrincipalLogin = document.createElement("div");
		this.divPrincipalLogin.id="loginBtn";
		this.divPrincipalLogin.className="loginBtn";
		publicMF.addElement(this.divPrincipalLogin,"LoginMain");
	
		//Creación del form hijo de loginBtn
		this.formulario = document.createElement("form");
		this.formulario.className = "LoginForm";
		this.formulario.id = "LoginForm";
		this.formulario.name = "LoginForm";
		this.formulario.method = "get";
		publicMF.addElement(this.formulario,"loginBtn");

		//Primer imagen y txt para login
		this.formularioImg = document.createElement("img");
		this.formularioImg.src="assets/images/icono-usuario.png";
		publicMF.addElement(this.formularioImg,"LoginForm");

		this.formularioTxt = document.createElement("input");
		this.formularioTxt.type="text";
		this.formularioTxt.name="username";
		this.formularioTxt.id="username";
		this.formularioTxt.value="Usuario";
		this.formularioTxt.placeholder="Usuario";
		publicMF.addElement(this.formularioTxt,"LoginForm");

		//Segunda imagen y txt para login
		this.formularioImg = document.createElement("img");
		this.formularioImg.src="assets/images/icono-password.png";
		publicMF.addElement(this.formularioImg,"LoginForm");

		this.formularioTxt = document.createElement("input");
		this.formularioTxt.type="password";
		this.formularioTxt.name="password";
		this.formularioTxt.id="password";
		this.formularioTxt.value="Password";
		this.formularioTxt.placeholder="Contraseña";
		publicMF.addElement(this.formularioTxt,"LoginForm");

		//Botón para login
		this.formularioImg = document.createElement("img");
		this.formularioImg.id="loginAccessBtn";
		this.formularioImg.src="assets/images/boton_login_02.png";

		//Mensaje de error
		this.divPrincipalLogin = document.createElement("label");
		this.divPrincipalLogin.id="errorMensaje";
		this.divPrincipalLogin.className="errorMensaje";
		publicMF.addElement(this.divPrincipalLogin,"LoginMain");

		this.formularioImg.onmouseover= function(){
			this.src='assets/images/boton_login.png';
		}
		this.formularioImg.onmouseout=function(){
			this.src='assets/images/boton_login_02.png';
		}
		publicMF.addElement(this.formularioImg,"LoginForm");

		$.import_js('assets/js/app/validaLoginForm.js');
	}
	scope.ContenedorLogin = ContenedorLogin;

	/*Cargar validación del  form*/
}(window));