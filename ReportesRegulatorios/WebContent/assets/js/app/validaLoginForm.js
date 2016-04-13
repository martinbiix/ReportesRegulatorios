$().ready(function() {
	//Inicia el Login
	
	$("#LoginForm").validate({
		rules: {
			username: {
				required: true,
				alphanum:true,
				minlength: 5
			},
			password: {
				required: true,
				alphanum:true,
				minlength: 8
			}
		},
		messages: {
			username: {
				required: "Favor de ingresar un usuario",
				minlength: "Minimo 5 caracteres en usuario"
			},
			password: {
				required: "Favor de ingresar una contraseña",
				minlength: "La contraseña debe ser 8 caracteres, alfanumerico"
			}
		},errorPlacement: function(error, element) {  
			$('#errorMensaje').html("<br>"+error[0].innerText);
	    },success: function (error) {
            error.remove();
        },submitHandler: function(form) {
	    	doLogin();
        }
	});
	
	$("#loginAccessBtn").click(function(e){
		e.preventDefault();
		$("#LoginForm").submit();
	});
	
	//Una vez que el formulario esta completo y validado realizamos la acción de envío
	function doLogin(){
		/*var arreglo = {
			"username":$('#username').val(),
			"password":""+CryptoJS.MD5($('#password').val())
		};
		$.peticionAjax(arreglo,"http://localhost:8080/web/web.php");*/
		console.log("Entro al doLogin");
		
		//Importamos los scripts del segundo layout
		//$.import_js("assets/js/app/contenedor.js");
		$('.MainHTML').empty();

		/*
		$('<script>', {src: 'https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js'}).appendTo('head');
		$('<script>', {src: 'https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/jquery-1.11.1.min.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/jquery-ui.min.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/circles.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/jquery.jvectormap.min.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/jquery-jvectormap-us-lcc-en.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/bootstrap-tabdrop.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/moment.min.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/assets/libs/utility.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/assets/js/demo.js'}).appendTo('head');
		$('<script>', {src: 'assets/js/main.js'}).appendTo('head');
		$('<script>', {src: 'assets/libs/widgets.js'}).appendTo('head');
		$('<script>', {src: 'assets/js/app/main.js'}).appendTo('head');

		$('.MainHTML').load('main.html');
		
		*/
		location.href='main.html';
	}

	//Capturar evento "Enter" en los textbox
	$('#username').on('keyup', function(e) {
	    if (e.which == 13) {
	        e.preventDefault();
	        $("#LoginForm").submit();
	    }
	});
	$('#password').on('keyup', function(e) {
	    if (e.which == 13) {
	        e.preventDefault();
	        $("#LoginForm").submit();
	    }
	});
});//Fin onReady

