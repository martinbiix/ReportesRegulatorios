
var X = XLS;
var XW = {
	/* worker message */
	msg: 'xlsx',
	/* worker scripts */
	rABS: 'assets/js/xlsworker2.js',
	norABS: 'assets/js/xlsworker1.js',
	noxfer: 'assets/js/xlsworker.js'
};

var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
if(!rABS) {
	document.getElementsByName("userabs")[0].disabled = true;
	document.getElementsByName("userabs")[0].checked = false;
}

var use_worker = typeof Worker !== 'undefined';
if(!use_worker) {
	document.getElementsByName("useworker")[0].disabled = true;
	document.getElementsByName("useworker")[0].checked = false;
}

var transferable = use_worker;
if(!transferable) {
	document.getElementsByName("xferable")[0].disabled = true;
	document.getElementsByName("xferable")[0].checked = false;
}

var wtf_mode = false;

function fixdata(data) {
	var o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
	return o;
}

function ab2str(data) {
	var o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));
	return o;
}

function s2ab(s) {
	var b = new ArrayBuffer(s.length*2), v = new Uint16Array(b);
	for (var i=0; i != s.length; ++i) v[i] = s.charCodeAt(i);
	return [v, b];
}

function xw_noxfer(data, cb) {
	var worker = new Worker(XW.noxfer);
	worker.onmessage = function(e) {
		switch(e.data.t) {
			case 'ready': break;
			case 'e': console.error(e.data.d); break;
			case XW.msg: cb(JSON.parse(e.data.d)); break;
		}
	};
	var arr = rABS ? data : btoa(fixdata(data));
	worker.postMessage({d:arr,b:rABS});
}

function xw_xfer(data, cb) {
	var worker = new Worker(rABS ? XW.rABS : XW.norABS);
	worker.onmessage = function(e) {
		switch(e.data.t) {
			case 'ready': break;
			//case 'e': console.error(e.data.d); break;
			default: xx=ab2str(e.data).replace(/\n/g,"\\n").replace(/\r/g,"\\r"); console.log("done"); cb(JSON.parse(xx)); break;
		}
	};
	if(rABS) {
		var val = s2ab(data);
		worker.postMessage(val[1], [val[1]]);
	} else {
		worker.postMessage(data, [data]);
	}
}

function xw(data, cb) {
	//transferable = document.getElementsByName("xferable")[0].checked;
	transferable = true;
	if(transferable) xw_xfer(data, cb);
	else xw_noxfer(data, cb);
}

function get_radio_value( radioName ) {
	var radios = document.getElementsByName( radioName );
	for( var i = 0; i < radios.length; i++ ) {
		if( radios[i].checked || radios.length === 1 ) {
			return radios[i].value;
		}
	}
}

//Arroja el resultado final
var headers="";
function to_json(workbook) {
	
	console.log("Entro a to_json");
	
	var result = {}, datos;
	var contadorLineas=0,activo=true;
	workbook.SheetNames.forEach(function(sheetName) {
		
		console.log("sheetName: "+sheetName);
		
		
		var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		var progressbar = $( "#progressbar-4" );
		
		console.log("sheetName: "+sheetName);
		localStorage.setItem("TotalExcel",roa.length);
		
		var bol=false;
		$.each(roa, function (key, data) {
			headers="";
			$.each(data, function (index, data) {
	    		headers+=index+"|";
		    });
		});
    	headers = headers.slice(0,-1);

    	console.log("Headers: "+headers);
    	
        var datoss = {
        	headers:headers
        }
        
        $.ajax({
    	    url: "xs/carga/valida_headers.xsjs",
    	    cache: false,
    	    crossDomain:true,
    	    dataType: "json",
    	    async: true, 
    	    data:datoss,
    	    contentType: "application/json",
    	    // Regresamos la respuesta
    	    success: function( resultadoD ) {
    	    	if(resultadoD.indexOf("Procesamiento exitoso")>-1){
    	    		$.each(roa, function (key, data) {
    	    			setTimeout(function(){
    	    			 if(activo){
    	    					datos="";
    	    					key=key+1;
    	    				    //console.log(key)
    	    				    var consulta="";
    	    				    bol=false;
    	    				    
    	    			    	$.each(data, function (index, data) {
    	    			    		data= "'"+data+"'";
    	    				    	data = replaceAll(',','',data);
    	    				    	consulta += data;
    	    				    	
    	    				    	consulta +=",";
    	    	
    	    				    });
    	    			    	consulta= consulta.slice(0, -1);
    	    			    	
    	    			    	
    	    			    	var val = progressbar.progressbar( "value" ) || 0;
    	    		            progressbar.progressbar( "value", val + 1 );
    	    		            
    	    		            //Ingresa linea por linea a la DB
    	    		            //$.post("xs/sp.xsjs", { query:consulta, linea:contadorLineas, tipo:2 });
    	    		            var datos = {
    	    		            		query:consulta,
    	    		            		linea:contadorLineas,
    	    		            		tipo:2
    	    		            }
    	    		            $.ajax({
    	    		        	    url: "xs/sp.xsjs",
    	    		        	    cache: false,
    	    		        	    crossDomain:true,
    	    		        	    dataType: "json",
    	    		        	    async: true, 
    	    		        	    data:datos,
    	    		        	    contentType: "application/json",
    	    		        	    // Regresamos la respuesta
    	    		        	    success: function( resultado ) {
    	    		        	    	if(resultado.indexOf("excepción")>-1){
    	    		        	    		activo=false;
    	    		        	    		$("#cancelarUpdatePopup").click();
    	    		        	    		showError(resultado);
    	    			        			$("#EditarError").click();
    	    		        	    		return false;
    	    		        	    	}else{
    	    			        	    	//console.log("Resultado "+key+" : "+" | "+contadorLineas+" => "+resultado);
    	    			        	    	if(roa.length==contadorLineas){
    	    			        	    		//Manda llamar el SP para procesar el excel debe de ejecutarse al final
    	    			    		    		$.post("xs/carga/sp.xsjs", { usuario:localStorage.getItem("idUsuario"), periodo:localStorage.getItem("periodo"), nombreExcel:localStorage.getItem("excel") });
    	    			    		    		
    	    			    		    		$("#cancelarUpdatePopup").click();
    	    			    		    		
    	    			    		    		showError("Archivo cargado correctamente");
    	    			    		    		$("#EditarError").click();
    	    			    		    		
    	    			    		    		getDataTable();
    	    			    		    		getPeriodoTable();
    	    			        	    	}
    	    		        	    	}
    	    		        	    },
    	    		        	    error: function(XMLHttpRequest, textStatus, errorThrown) {
    	    		        	    	showError(XMLHttpRequest.responseText);
    	    		        			$("#EditarError").click();
    	    		        	    }
    	    		        	});	
    	    		            
    	    			    	
    	    		            if(!activo)
    	    		            	return false;
    	    		            
    	    			    	if(roa.length > 0){
    	    						//console.log("result[sheetName]: "+result[sheetName]);
    	    						result[sheetName] = roa;
    	    					}
    	    			  
    	    			    	contadorLineas++;
    	    			 }else{
    	    				 console.log("Se detuvo el proceso");
    	    			 }
    	    			}, (key*contadorLineas)+(key *300) );
    	    		},contadorLineas*500);


    	    	}else{
    	    		$("#cancelarUpdatePopup").click();
    	        	showError(resultadoD);
        			$("#EditarError").click();
    	    	}
    	    },
    	    error: function(XMLHttpRequest, textStatus, errorThrown) {
    	    	showError(XMLHttpRequest.responseText);
    			$("#EditarError").click();
    	    }
    	});	
    	
	});	
	return result;
}


/*Auxiliar*/
function replaceAll(find, replace, str) {
	  var texto = str.replace(new RegExp(find, 'g'), replace);
	  return texto;
}


function to_csv(workbook) {
	var result = [];
	workbook.SheetNames.forEach(function(sheetName) {
		var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);
		if(csv.length > 0){
			result.push("SHEET: " + sheetName);
			result.push("");
			result.push(csv);
		}
	});
	return result.join("\n");
}

function to_formulae(workbook) {
	var result = [];
	workbook.SheetNames.forEach(function(sheetName) {
		var formulae = X.utils.get_formulae(workbook.Sheets[sheetName]);
		if(formulae.length > 0){
			result.push("SHEET: " + sheetName);
			result.push("");
			result.push(formulae.join("\n"));
		}
	});
	return result.join("\n");
}

var tarea = document.getElementById('b64data');
function b64it() {
	if(typeof console !== 'undefined') console.log("onload", new Date());
	var wb = X.read(tarea.value, {type: 'base64',WTF:wtf_mode});
	process_wb(wb);
}

function replacer(key, value) {
	  if (typeof value === "string") {
	    return undefined;
	  }
	  return value;
	}


function process_wb(wb) {
	if(use_worker) XLS.SSF.load_table(wb.SSF);
	var output = "";
	switch(get_radio_value("format")) {
		case "json":
			output = JSON.stringify(to_json(wb), 2, 2);
			break;
		case "form":
			output = to_formulae(wb);
			break;
		default:
			output = to_csv(wb);
	}
	//console.log(output);

	if(typeof console !== 'undefined') console.log("output", new Date());
}

var drop = document.getElementById('drop');
var fileInput = document.getElementById('fileUpload');
var temporal="",files;

/*$("#uploadIcon").click(function(e){
	e.preventDefault();
	alert("Click");
});*/

//Inicia proceso de lectura de archivos
function handleDrop(e) {
	e.stopPropagation();
	e.preventDefault();
	temporal=e;
	rABS = document.getElementsByName("userabs")[0].checked;
	use_worker = document.getElementsByName("useworker")[0].checked;

	files = e.dataTransfer.files;
	

	var e = temporal;
	e.stopPropagation();
	e.preventDefault();
	
	console.log("Handle drop");
	
	
	var f = files[0];
	{
		var reader = new FileReader();
		var name = f.name;
		localStorage.setItem("excel",name);
		reader.onload = function(e) {
			if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
			var data = e.target.result;

				console.log("use_worker: "+use_worker);
			
				var timeOut = function(){
				if(use_worker) {
					xw(data, process_wb);
				} else {
					var wb;
					if(rABS) {
						wb = X.read(data, {type: 'binary'});
					} else {
						var arr = fixdata(data);
						wb = X.read(btoa(arr), {type: 'base64'});
					}
					process_wb(wb);
				}
			};
			setTimeout(timeOut, 2000);
		};
		if(rABS) reader.readAsBinaryString(f);
		else reader.readAsArrayBuffer(f);
	}

	//Ejecutar SP para limpiar tablas
	/*
		$.post("xs/carga/limpiar.xsjs", { tipo:"0"});
		
		//Open Modal
		  $( "#progressbar-4" ).progressbar({
	          value: 0
	       });
		$.ajax({
		    url: "xs/carga/periodo.xsjs",
		    cache: false,
		    crossDomain:true,
		    dataType: "json",
		    async: true, 
		    contentType: "application/json",
		    // Regresamos la respuesta
		    success: function( resultado ) {
		    	$("#periodo").val(resultado);
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {
		    	showError(XMLHttpRequest.responseText);
				$("#EditarError").click();
		    }
		});	
	*/
}//Termina el handle


//$(".BtnSubirArchivo").click(function(r){
	//r.preventDefault();
function BtnSubirArchivo(){	
	console.log("Entro a subir archivo, empiezan las validaciones? ");
	
	
	
	//Temporal para que pase el proceso, borrar...
	$("#periodo").val("1992");
	
	
	
	var valor=$("#periodo").val();
	if(valor=="" || valor.length==0){
		console.log("Ingresa un valor en el periodo");
		$("#periodo").attr("placeholder", "Ingresa un periodo");
		$("#periodo").prop("placeholder", "Ingresa un periodo");
	}else{
			console.log("Cargando para el periodo: "+valor);
			localStorage.setItem("periodo",valor);
			
			var datos = {
		            "periodo": $("#periodo").val()
			}	
			$.ajax({
			    url: "xs/carga/valida_periodo.xsjs",
			    cache: false,
			    crossDomain:true,
			    // Asignamos tipo de datos
			    dataType: "json",
			    async: true, 
			    contentType: "application/json",
			    // Asignamos los datos
			    data:datos,
			    // Regresamos la respuesta
			    success: function( resultado ) {	  
			    	if(resultado.indexOf("correcto")>-1){
			    		$.ajax({
						    url: "xs/carga/candado.xsjs",
						    cache: false,
						    crossDomain:true,
						    // Asignamos tipo de datos
						    dataType: "json",
						    async: true, 
						    contentType: "application/json",
						    // Asignamos los datos
						    data:datos,
						    // Regresamos la respuesta
						    success: function( resultado ) {	    	
						    	if(resultado[0].fvobo==0){
					
						    		var e = temporal;
						    		e.stopPropagation();
						    		e.preventDefault();
						    		getDataTable();
			    		    		getPeriodoTable();
			    		    		
						    		var f = files[0];
						    		{
						    			var reader = new FileReader();
						    			var name = f.name;
						    			localStorage.setItem("excel",name);
						    			reader.onload = function(e) {
						    				if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
						    				var data = e.target.result;
						    					var timeOut = function(){
						    					if(use_worker) {
						    						xw(data, process_wb);
						    					} else {
						    						var wb;
						    						if(rABS) {
						    							wb = X.read(data, {type: 'binary'});
						    						} else {
						    							var arr = fixdata(data);
						    							wb = X.read(btoa(arr), {type: 'base64'});
						    						}
						    						process_wb(wb);
						    					}
						    				};
						    				setTimeout(timeOut, 2000);
						    			};
						    			if(rABS) reader.readAsBinaryString(f);
						    			else reader.readAsArrayBuffer(f);
						    		}
						    	}else{
						    		$("#cancelarUpdatePopup").click();
						    		showError("El periodo ya existe");
									$("#EditarError").click();
						    	}
						    },
						    error: function(XMLHttpRequest, textStatus, errorThrown) {
						    	 if(textStatus==="timeout") {
						    		 $("#cancelarUpdatePopup").click();
						    		showError("Tiemout");
						 			$("#EditarError").click();
						         } else {
						        	 $("#cancelarUpdatePopup").click();
						        	showError(t);
						 			$("#EditarError").click();
						         }
						    }
					    });
			    	}else{
			    		$("#cancelarUpdatePopup").click();
			    		showError(resultado);
			 			$("#EditarError").click();
			    	}
			    },
			    error: function(XMLHttpRequest, textStatus, errorThrown) {
			    	$("#cancelarUpdatePopup").click();
			    	showError(XMLHttpRequest.responseText);
		 			$("#EditarError").click();
			    }
		    });
			
			
	}//Termina el else
//});
};



function handleDragover(e) {
	e.stopPropagation();
	e.preventDefault();
	e.dataTransfer.dropEffect = 'copy';
}

if(drop.addEventListener) {
	drop.addEventListener('dragenter', handleDragover, false);
	drop.addEventListener('dragover', handleDragover, false);
	drop.addEventListener('drop', handleDrop, false);
}




var xlf = document.getElementById('xlf');
function handleFile(e) {
	rABS = document.getElementsByName("userabs")[0].checked;
	use_worker = document.getElementsByName("useworker")[0].checked;
	var files = e.target.files;
	var f = files[0];
	{
		var reader = new FileReader();
		var name = f.name;
		reader.onload = function(e) {
			if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
			var data = e.target.result;
			if(use_worker) {
				xw(data, process_wb);
			} else {
				var wb;
				if(rABS) {
					wb = X.read(data, {type: 'binary'});
				} else {
					var arr = fixdata(data);
					wb = X.read(btoa(arr), {type: 'base64'});
				}
				process_wb(wb);
			}
		};
		if(rABS) reader.readAsBinaryString(f);
		else reader.readAsArrayBuffer(f);
	}
}
if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);