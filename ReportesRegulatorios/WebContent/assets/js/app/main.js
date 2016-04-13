/**
	<ol class="breadcrumb" style="top: 12px;">
	  <li class="crumb-icon">
	    <a href="#">
	      <span class="glyphicon glyphicon-home"></span>
	    </a>
	  </li>
	  <li class="crumb-active">
	    <a href="#">Dashboard</a>
	  </li>
	  <li class="crumb-trail">
	    <a href="#">Dashboard</a>
	  </li>
</ol>
*/
function changeLocation(Ubicacion, icono){
	Ubicacion = Ubicacion.split("-");
	$(".crumb-active").html("<a href='#'>"+Ubicacion[0]+"</a>");
	$(".crumb-trail").html("<a href='#'>"+Ubicacion[1]+"</a>");
	$(".crumb-trail2").html("<a href='#'>"+Ubicacion[2]+"</a>");
	var clase='glyphicon glyphicon-'+icono;
	jQuery('#IconUbicacion').attr('class', clase);
}

function changeUser(img,nombre){
	$("#UserInfoName").html(nombre);
	$("#UserInfoPhoto").attr('src',img);
}

function changeAppName(name){
	$("#LblTituloApp").html(name);
}

function openModal(titulo,html){
	$("#myModalTitle").html(titulo);
	$("#html-modal-content").html(html);
	$("#openM").click();
}

function showError(Titulo, TextoError){
	 /* $("#myModalError").remove();
	var errorDiv='<div id="">  <a href="#" id="EditarError" data-toggle="modal" data-target="#myModalError"></a>';
	errorDiv+='<div class="modal fade" id="myModalError" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
		errorDiv+='  <div class="modal-dialog" role="document">';
			errorDiv+='<div class="modal-content">';
				errorDiv+='<div class="modal-body">';
					errorDiv+='<!--  Contenido Modal -->';
						errorDiv+='<label id="MsgError">'+TextoError+'</label>';
			errorDiv+='<!--  /Contenido Modal -->';
				errorDiv+='</div>';
					errorDiv+='<div class="modal-footer">';
						errorDiv+='<!--  Gráfica y Tabla -->';
					errorDiv+='<div style="position: relative; top: 15px;">';
						errorDiv+='<img id="cancelarErrorP" src="assets/img/confirmar1.png" width="100%" style=" width: 300px; height: 49px; position: relative; left: -132px; border-bottom-right-radius: 5px;" class="curs hoverClass" data-dismiss="modal">';
							errorDiv+='</div>';
						errorDiv+='</div>';
				errorDiv+='</div>';
			errorDiv+='</div>';
		errorDiv+='</div> </div>';
		$(".contenedorErrorX").append(errorDiv); */
		if(Titulo.length<=0){ Titulo="";}
		if(TextoError=== undefined){ TextoError="";}
		$("#myModalTitle").html(Titulo);
		$(".language-html").html(TextoError);
		$("#openM").click();
}
function showErrorNoClose(){
	$(".contenedorErrorX").html('');
	var errorDiv='<div id="">  <a href="#" id="popupNoClose" data-toggle="modal" data-target="#myModalErrorNoClose" data-backdrop="static" data-keyboard="false"></a>';
	errorDiv+='<div class="modal fade" id="myModalErrorNoClose" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
		errorDiv+='  <div class="modal-dialog" role="document">';
			errorDiv+='<div class="modal-content">';
				errorDiv+='<div class="modal-body">';
					errorDiv+='<!--  Contenido Modal -->';
					errorDiv+='<img src="assets/img/loading.gif" style="width: 54px; position:relative; left: 46%;">';
						errorDiv+='<br><label id="MsgError" style="position: relative;left: 39%;font-size: 2em;">Procesando</label>';
						errorDiv+='<img id="cancelarNoClose" src="assets/img/confirmar1.png" width="100%" style=" width: 300px; height: 49px; position: relative; left: -132px; /* top: 0px; */ border-bottom-right-radius: 5px;visibility: hidden;" class="curs hoverClass" data-dismiss="modal">';
			errorDiv+='<!--  /Contenido Modal -->';
				errorDiv+='</div>';
				errorDiv+='</div>';
			errorDiv+='</div>';
		errorDiv+='</div> </div>';
		$(".contenedorErrorX").append(errorDiv);
}

 // Define Source code modal
 var modalSource = '<div class="modal fade" id="source-modal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false"> ' +
        '<div class="modal-dialog modal-lg"> ' +
        '<div class="modal-content"> ' +
        '<div class="modal-header"> ' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> ' +
        '<h4 class="modal-title" id="myModalTitle"></h4> ' +
        '</div> ' +
        '<div class="modal-body"> ' +
        '<div class="highlight"> ' +
        '<pre> ' +
        '<code class="language-html" data-lang="html" id="html-modal-content"></code> ' +
        '</pre> ' +
        '</div> </div>'+
        '<div class="modal-footer"> ' +
        '<button type="button"  id="ModalAceptar" class="btn btn-primary">Aceptar</button> ' +
        '<button type="button" data-dismiss="modal" id="ModalCancelar" class="btn btn-primary">Cancelar</button> ' +
        '</div>' +
       	'</div> </div> </div> </div>';
$('<a data-toggle="modal" href="#source-modal" id="openM" style="visibility:hidden;">Open Modal</a>').appendTo('body');


//Test Popup
 $("#CerrarSesion").attr("data-toggle","modal");
 $("#CerrarSesion").attr("href","#source-modal");
$(modalSource).appendTo('body');

/*
 	Manejo del json para el menú
	Ejemplo de entrada: 
	{"padres":[{"id":"1","nombre":"CEDEVIS","url":null,"desc":"Flujo a Transferir CEDEVIS","tipo":"P","idPerfil":"1","idPadre":"0"},{"id":"2","nombre":"Administración","url":null,"desc":"Concentra las actividades administrativas del sitio","tipo":"P","idPerfil":"2","idPadre":"0"},{"id":"3","nombre":"Estadísticas","url":null,"desc":"Concentra las estadisticas de los procesos del sitio","tipo":"P","idPerfil":"3","idPadre":"0"}],"submenus":[{"id":"1.1","nombre":"Flujo","url":null,"desc":"Reporte de Anexo-T","tipo":"h","idPerfil":"11","idPadre":"1"},{"id":"1.11","nombre":"Carga","url":"flCargaPadre|load.html|CEDEVIS - Cargar Flujo","desc":"Alta de archivo de Excel","tipo":"h","idPerfil":"111","idPadre":"1"},{"id":"1.12","nombre":"Consultar","url":"flDescarga|web/descarga/index.html|CEDEVIS - Consultar Flujo|","desc":"Consulta de archivos cargados","tipo":"h","idPerfil":"112","idPadre":"1"},{"id":"1.2","nombre":"Anexo - T","url":null,"desc":"Reporte de Anexo-T","tipo":"h","idPerfil":"12","idPadre":"1"},{"id":"1.21","nombre":"Ejecución","url":"emEjecucionPrc|web/emisiones/index.html|CEDEVIS - Anexo-T / Ejecución","desc":"Ejecución de reporte de Anexo-T","tipo":"h","idPerfil":"121","idPadre":"12"},{"id":"1.22","nombre":"Consultar","url":"emConsultaPrc|web/emisiones/consulta_prc.html|CEDEVIS - Anexo-T / Consultar","desc":"Consulta de reporte de Anexo-T","tipo":"h","idPerfil":"122","idPadre":"12"},{"id":"2.1","nombre":"Usuarios","url":null,"desc":"Concentra las actividades para ABC Usuarios","tipo":"h","idPerfil":"21","idPadre":"2"},{"id":"2.11","nombre":"Agregar","url":"usAdd|web/usuarios/formulario.html|Administración - Usuarios - Agregar","desc":"Formulario para alta de usuarios","tipo":"h","idPerfil":"211","idPadre":"21"},{"id":"2.12","nombre":"Eliminar","url":"usEliminar|web/usuarios/eliminar.html|Administración - Usuarios - Eliminar","desc":"Formulario para borrado de usuarios","tipo":"h","idPerfil":"212","idPadre":"21"},{"id":"2.13","nombre":"Modificar","url":"usEditar|web/usuarios/editar.html|Administración - Usuarios - Modificar","desc":"Formulario para cambios de usuarios","tipo":"h","idPerfil":"213","idPadre":"21"},{"id":"2.14","nombre":"Consultar","url":"usMain|web/usuarios/index.html|Administración - Usuarios - Consulta","desc":"Consulta de usuarios","tipo":"h","idPerfil":"214","idPadre":"21"},{"id":"2.2","nombre":"Catálogos","url":null,"desc":"Catálogo de emisiones","tipo":"h","idPerfil":"22","idPadre":"2"},{"id":"2.21","nombre":"Emisiones","url":null,"desc":null,"tipo":"h","idPerfil":"221","idPadre":"22"},{"id":"2.211","nombre":"Agregar","url":"emAdd|web/emisiones/agregar.html|Emisiones - Agregar","desc":"Formulario para agregar emisiones","tipo":"","idPerfil":"2211","idPadre":"221"},{"id":"2.212","nombre":"Eliminar","url":"emEliminar|web/emisiones/eliminar.html|Emisiones - Eliminar","desc":"Formulario para borrado de emisiones","tipo":"","idPerfil":"2212","idPadre":"221"},{"id":"2.213","nombre":"Modificar","url":"emEditar|web/emisiones/editar.html|Emisiones - Modificar","desc":"Formulario para cambios de emisiones","tipo":"","idPerfil":"2213","idPadre":"221"},{"id":"2.214","nombre":"Consultar","url":"emMain|web/emisiones/consulta.html|Emisiones - Consulta","desc":"Consulta de emisiones","tipo":"","idPerfil":"2214","idPadre":"221"},{"id":"3.1","nombre":"Cifras Control","url":null,"desc":"Gráficos de ejecución de procesos del sitio","tipo":"h","idPerfil":"31","idPadre":"3"},{"id":"3.11","nombre":"Flujo","url":"admEstadisticas|web/estadisticas/index.html|Estadísticas - Cifras Control - Flujo","desc":"Gráficos de ejecución de procesos del sitio","tipo":"h","idPerfil":"311","idPadre":"31"}]}

	Dar formato con prettyJson, buscar en google

	--------------------------------------------------------------+
	<ul class="nav sidebar-menu">
        <li class="sidebar-label">Usuario</li>
        <li>
          <a class="accordion-toggle" href="#"><span class="glyphicon glyphicon-fire"></span><span class="sidebar-title">Sección</span><span class="caret"></span></a>
        
          <ul class="nav sub-nav"><li><a href="#"><span class="glyphicon glyphicon-book"></span> Elemento 1 </a></li></ul>
        
        </li>
      </ul>
*/
function createMenu(data){
	data = $.parseJSON(data);
	var inicioM="",idP,nombreP;
	//Pintar los padre
	for(var i = 0; i < data.padres.length; ++i){
		  idP = data.padres[i].id;
		  nombreP=data.padres[i].nombre;
		  inicioM+='<li id="idPadre'+idP+'" class="sidebar-label"><h3>'+nombreP+'</h3></li>';
	}
	$(".sidebar-menu").html(inicioM);


	//Pintar los hijos
	//"url":"admEstadisticas|web/estadisticas/index.html|Estadísticas - Cifras Control - Flujo"
	  for(var i = 0; i < data.submenus.length; ++i){
	  	var id = data.submenus[i].id.split("."), html='', idContenedor='',urL;
	  	if(id[1].length==1){
	  		$('<li id="Child'+id[0]+'"><a class="accordion-toggle" href="#"><span class="glyphicon glyphicon-'+data.submenus[i].icon+'"></span><span class="sidebar-title">'+data.submenus[i].nombre+'</span><span class="caret"></span></a>  </li>').insertAfter("#idPadre"+id[0]);
	  	}else if(id[1].length==2){
	  		try{
	  			urL = data.submenus[i].url.split("|");
			}catch(err){
				console.log("Warn: "+data.submenus[i].url);
			}

	  		if ($("#Child"+id[0]).children("ul").length) {
			    idContenedor="#ChildUlLi"+id[0];
				html = '<a href="'+urL[1]+'" id="'+urL[0]+'" data-toggle="tooltip" data-container="body" data-placement="right" data-original-title="'+data.submenus[i].desc+'"><span class="glyphicon glyphicon-'+data.submenus[i].icon+'"></span> '+data.submenus[i].nombre+' </a>';
			}else{
				idContenedor="#Child"+id[0];
				html = '<ul class="nav sub-nav"><li id="ChildUlLi'+id[0]+'"><a href="'+urL[1]+'" id="'+urL[0]+'" data-placement="right" data-toggle="tooltip" data-container="body" data-original-title="'+data.submenus[i].desc+'"><span class="glyphicon glyphicon-'+data.submenus[i].icon+'"></span> '+data.submenus[i].nombre+' </a></li></ul>';
			}

			var scripT='<script>$("#'+urL[0]+'").click(function(e){e.preventDefault();$(".contentStyle").'+"load('"+urL[1]+"');changeLocation('"+urL[2]+"','"+data.submenus[i].icon+"');});<\/script>";
	  		$(idContenedor).append(html + scripT);
	  	
	  	}if(id[1].length==3){
	  		console.log("Tercer nivel del menú no establecido");
	  		//console.log("Length 3: "+data.submenus[i].id+" | "+data.submenus[i].nombre);
	  	}
	 }
}

	
changeLocation("Generación de reportes - Contabilidad - A0114","fire");
changeUser('./assets/images/perfil.jpg',"Cartera");
changeAppName('<b>Reportes Regul.</b>');
//createMenu('{"padres":[{"id":"1","nombre":"CEDEVIS","url":null,"desc":"Flujo a Transferir CEDEVIS","tipo":"P","idPerfil":"1","idPadre":"0"},{  "id":"2","nombre":"Administración","url":null,"desc":"Concentra las actividades administrativas del sitio","tipo":"P","idPerfil":"2","idPadre":"0"}   ],   "submenus":[   {  "id":"1.1","icon":"transfer","nombre":"Flujo","url":null,"desc":"Reporte de Anexo-T","tipo":"h","idPerfil":"11","idPadre":"1"},{  "icon":"floppy-open", "id":"1.11","nombre":"Carga","url":"flCargaPadre|load.html|CEDEVIS - Cargar Flujo","desc":"Alta de archivo de Excel","tipo":"h","idPerfil":"111","idPadre":"1"},{ "icon":"asterisk", "id":"2.1","nombre":"Usuarios","url":null,"desc":"Reporte de Anexo-T","tipo":"h","idPerfil":"12","idPadre":"1"},{ "icon":"user","id":"2.21","nombre":"Perfiles","url":"emEjecucionPrc|web-emisiones-index.html|CEDEVIS - Usuarios - Perfiles","desc":"Configuración de perfiles del usuario","tipo":"h","idPerfil":"121","idPadre":"12"}   ]}');
createMenu('{"padres":[{"id":"1","nombre":"Reportes","url":null,"desc":"Generación de reportes","tipo":"P","idPerfil":"1","idPadre":"0"},{"id":"2","nombre":"Seguimiento","url":null,"desc":"Consulta de insumos","tipo":"P","idPerfil":"1","idPadre":"0"},{"id":"3","nombre":"Administración","url":null,"desc":"Concentra las actividades administrativas del sitio","tipo":"P","idPerfil":"2","idPadre":"0"}],"submenus":[{"id":"1.1","icon":"transfer","nombre":"Contabilidad","url":null,"desc":"Generar reporte de contabilidad","tipo":"h","idPerfil":"11","idPadre":"1"},{"icon":"floppy-open","id":"1.11","nombre":"A-0114","url":"flCargaPadre|web/carga/index.jsp|Contabilidad - A-0114","desc":"Generar reporte 0114","tipo":"h","idPerfil":"111","idPadre":"1"},{"icon":"asterisk","id":"2.1","nombre":"Entrega de insumos","url":"emEjecucionPrc|web-emisiones-index.html|Seguimiento - Entrega de insumos - Inicio","desc":"Carga de insumos","tipo":"h","idPerfil":"12","idPadre":"2"},{"icon":"asterisk","id":"2.2","nombre":"Tablero","url":"emEjecucionPrc|web-emisiones-index.html|Seguimiento - Tablero - Inicio","desc":"Consulta de tablero","tipo":"h","idPerfil":"12","idPadre":"2"},{"icon":"user","id":"3.1","nombre":"Usuarios","url":null,"desc":"Configuración de usuarios","tipo":"h","idPerfil":"121","idPadre":"3"},{"icon":"asterisk","id":"3.11","nombre":"Perfiles","url":"emEjecucionPrc|web-emisiones-index.html|Administración - Usuarios - Perfiles","desc":"Consulta de perfiles","tipo":"h","idPerfil":"12","idPadre":"2"}]}');

//openModal("Modal","<b>Probando contenido</b>");