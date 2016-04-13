<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link href="assets/css/jquery-ui.css" rel="stylesheet">
<style>
.ui-widget-header {
   color:white;
   background-color:#C0002A;
   border: 1px solid #DDDDDD;
   font-weight: bold;
}

/** UPLOAD   **/
#upload {
    background-color: #FFF;
    background-image: -webkit-linear-gradient(top, #FFF, #FFF);
    background-image: -moz-linear-gradient(top, #373a3d, #313437);
    background-image: linear-gradient(top, #373a3d, #313437);
    /* width: 250px; */
    padding: 30px;
    height: 170px;
    border-radius: 3px;
    box-shadow: 0 0 2px red;
}

#drop {
    background-color: #FFF;
    padding: 40px 50px;
    margin-bottom: 30px;
    border: 0px;
    /* box-shadow: 0 0 2px red; */
    border-radius: 3px;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    height: 140px;
    font-weight: bold;
    color: #7f858a;
}

#uploadIcon {
    width: 108px;
    /* margin: 3px; */
    cursor: pointer;
    position: relative;
    top: -36px;
}
</style>

<!-- Inicia carga de archivos -->
<div id="oculto"   style="visibility: hidden; width:0px; height: 0px;">
	<p><input type="file" name="xlfile" id="xlf" /></p>
	<textarea id="b64data">base64-encoding</textarea>
	<input type="button" id="dotext" value="Click here to process the base64 text" onclick="b64it();"  style="visibility:gone"/><br />
	<input type="checkbox" name="useworker" checked   style="visibility:gone"><br />
	<input type="checkbox" name="xferable" checked   style="visibility:gone"><br />
	<input type="checkbox" name="userabs" checked   style="visibility:gone"><br />
</div>


<div class="row">
	<form id="upload" method="post" action="upload.php" enctype="multipart/form-data">
		<div id="drop" name="drop" class="drop">
			<label for="fileUpload">
			    <img src="assets/images/nubeLoad.png" id="uploadIcon"/>
			</label>
		</div>
	</form>
</div>
<!-- termina front de carga de archivos -->


<!-- Inicia la parte de mostrar datos en un grid -->
<div class="row">
  	<div class="col-md-4 col-lg-6">
  		Your Column1 Content
	</div>
  	<div class="col-md-4 col-lg-6">
   		Your Column1 Content
  	</div>
</div>

<!-- Termina la parte de mostrar datos en grid -->

<!-- jQuery File Upload Dependencies -->
<script src="assets/libs/jquery.knob.js"></script>
<script src="assets/libs/jquery.ui.widget.js"></script>
<script src="assets/libs/jquery.iframe-transport.js"></script>
<script src="assets/libs/jquery.fileupload.js"></script>
<script src="assets/libs/jquery-ui.js"></script>
<script src="assets/libs/xls/jszip.js"></script>
<script src="assets/libs/xls/xlsx.js"></script>
<script src="assets/libs/xls/main.js"></script>

<script type="text/javascript">
$(function(){
	/* Inicia progress bar */
	
    function progress() {
        var val = progressbar.progressbar( "value" ) || 0;
        progressbar.progressbar( "value", val + 1 );
        if ( val < 99 ) {
           setTimeout( progress, 1 );
        }
    }
    /* Termina progress bar */

	/* Inicia Upload */
    var ul = $('#upload ul');
    $('#drop a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#upload').fileupload({
        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),
        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {

            var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"'+
                ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

            var tipo=data.files[0].type;
            var extension = data.files[0].name.replace(/^.*\./, '');

            console.log("Nombre: "+data.files[0].name);
            console.log(formatFileSize(data.files[0].size));

 			switch (extension) {
	            case 'txt':
	            	console.log("Archivo de texto detectado");
	            break;
	            case 'xls':
	            	console.log("Archivo xls detectado");
	            break;
	            case 'xlsx':
	            	console.log("Archivo xlsx detectado");
	              	//$("#modalV").click();
	              	
	              	$("#myModalTitle").html("Verificando: "+data.files[0].name + " <b>"+formatFileSize(data.files[0].size)+"</b>");
	              	$(".language-html").html('<!--  Contenido Modal --> '+
    											'<form class="periodoForm" id="periodoForm" name="periodoForm" > '+
												'	<!--  Primer linea -->'+
												'	  <div class="col-md-12">'+
												'	  	  <!-- <label class="sr-only" for="periodo">Periodo</label> -->'+
												'	  	  <label class="sr-only" for="periodo" value="2993">2992</label>'+
												'	      <input type="text" class="form-control" id="periodo" name="periodo"placeholder="Ingresa el periodo (YYYY/PP)" maxlength="6" size="6" disabled>'+
												'         <div id="progressbar-4"></div>'+
												'	  </div>'+
												'	<!-- <div class="row">'+
												'	  <div class="col-md-12">'+
												'	 	 <div class="checkbox">'+
												'		    <label>'+
												'		      <input type="checkbox" id="periodoCheckBox"> Otro periodo'+
												'		    </label>	'+
												'		  </div>'+
												'	  </div>'+
												'	 </div> -->'+
												'</form>'+
									    		'<!--  /Contenido Modal -->');
	              	
	              	$("#ModalAceptar").attr("onclick", "BtnSubirArchivo();");
					$('<script type="text/javascript"> $( "#progressbar-4" ).progressbar({value: 0});var progressbar = '+
					  '$("#progressbar-4" ); $( "#progressbar-4" ).progressbar( "option", "max", 30 ); <\/script>')
					.appendTo("#openM");
	              	$("#openM").click();

	                // Append the file name and file size
	                tpl.find('p').text(data.files[0].name).append('<i>' + formatFileSize(data.files[0].size) +'</i>');

	                // Add the HTML to the UL element
	                data.context = tpl.appendTo(ul);

	                // Initialize the knob plugin
	                tpl.find('input').knob();

	                //Click para mostrar la tabla 
	                tpl.find('p').click(function(){
	                	click('P');
	                });
	                
	                tpl.find('canvas').click(function(){
	                	click('Canvas');
	                });
	                
	                // Listen for clicks on the cancel icon
	                tpl.find('span').click(function(){

	                    if(tpl.hasClass('working')){
	                        //jqXHR.abort();
	                    }

	                    tpl.fadeOut(function(){
	                        tpl.remove();
	                    });

	                });

	                data.context.addClass('hoverClass');
	                // Automatically upload the file once it is added to the queue
	                var jqXHR = data.submit();
				break;
	            case 'js':
					console.log("Archivo js detectado");
				break;
				default:
					console.log("Archivo "+extension+" no válido");
				break;
	        }
            /*
            if(tipo == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
            */
        },progress: function(e, data){
            var tipo=data.files[0].type;
              
            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();

            if(progress == 100){
                data.context.removeClass('working');
            }
        },
        fail:function(e, data){
           // Something has gone wrong!
           // data.context.addClass('error');
        }
    });

    
    function click(evento){
    	//alert(evento);
    }

    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        
    	  e.stopPropagation();
    	  e.preventDefault();
    	  if(e.dataTransfer===undefined){
    		  //console.log("Undefined!");
    	  }else{
    		  var files = e.dataTransfer.files;
        	  var i,f;
        	  for (i = 0, f = files[i]; i != files.length; ++i) {
        	    var reader = new FileReader();
        	    var name = f.name;

        	    console.log("Drop detectado");
        	    console.log("Nombre: "+f.name);
        	    console.log("Ext:    "+f.type);

        	    reader.onload = function(e) {
        	      var data = e.target.result;
        	      var cfb = XLS.CFB.read(data, {type: 'binary'});
        	      //var arr = String.fromCharCode.apply(null, new Uint8Array(data));
        	      //var cfb = XLS.CFB.read(btoa(arr), {type: 'base64'});
        	      var wb = XLS.parse_xlscfb(cfb);
        	      process_wb(wb);
        	    };
        	    reader.readAsBinaryString(f);
        	    //reader.readAsArrayBuffer(f);
        	  }
    	  }
    	  
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }
        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }
        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }
        return (bytes / 1000).toFixed(2) + ' KB';
    }
});
</script>