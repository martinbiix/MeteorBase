function createMenu(data){

         var _url="",scripT="";
         data = $.parseJSON(data);

         var inicioM="",idP,nombreP;
         
         //Pintar los padre
         for(var i = 0; i < data.padres.length; ++i){
	       idP = data.padres[i].id;
	       nombreP=data.padres[i].nombre;
	       inicioM+='<li><a><i class="fa fa-home"></i>'+data.padres[i].nombre+'<span class="fa fa-chevron-down"></span></a> <ul class="nav child_menu" id="idPadre'+idP+'"></ul> </li>';
         }
         $("#MRoot").html(inicioM);

		 //Pintar los hijos
		 //"url":"admEstadisticas|web/estadisticas/index.html|EstadÃ­sticas - Cifras Control - Flujo"
		 var  actMenu=false,scripT;
		 for(var i = 0; i < data.submenus.length; ++i){
			 var id = data.submenus[i].id.split("."), html='', idContenedor='',urL;
			 try{
				 urL = data.submenus[i].url.split("|"); //el 2 es el icon

				 //$("#idPadre"+id[0]).append('<li id="Child'+id[0]+'"><a><i class="fa fa-home"></i>'+data.submenus[i].nombre+'<span class="fa fa-chevron-down"></span></a>  </li>');
	 			 scripT='<script> $("#Child_'+id[1]+'").click(function(e){e.preventDefault(); console.log("dasdasd"); });  <\/script>';
				 $("#idPadre"+id[0]).append('<li id="Child_'+id[1]+'"><a href="#">'+data.submenus[i].nombre+'</a></li>');
				 $("#idPadre"+id[0]).append(scripT);
			 }catch(err){
				 console.log("Warn: "+data.submenus[i].url); 
			 }
  		}
}

function createNotif(data){
	var todo='<li>'+
                '<div class="text-center">'+
                	'<a>'+
                    	'<strong>Ver todo</strong>'+
                          '<i class="fa fa-angle-right"></i>'+
                    '</a>'+
                '</div>'+
              '</li>';

  	data = $.parseJSON(data);
 	var  actMenu=false,scripT, inicio="<li><a>",fin="</a></li>";
 	var foto, texto, tiempo, nombre;

 	$("#TotalNotifiaciones").append(data.notificaciones.length);

	for(var i = 0; i < data.notificaciones.length; ++i){
		 var id = data.notificaciones[i].id, html='', idContenedor='',urL;
		 try{
			 texto 		= data.notificaciones[i].texto; //el 2 es el icon
			 foto    	= data.notificaciones[i].imgFoto;
			 nombre 	= data.notificaciones[i].titulo;
			 tiempo		= data.notificaciones[i].tiempo;
 	
 			 foto='<span class="image"><img src="'+foto+'" /></span>';
 			 contenido='<span><span>'+nombre+'</span><span class="time">'+tiempo+'</span></span>';
 			 texto='<span class="message">'+texto+'</span>';

 			 //Para agregar una acción aquí se puede agregar el script como al menú

			 $("#menu1").append(inicio+foto+contenido+texto+fin);
		 }catch(err){
			 console.log("Warn: "+ data.notificaciones[i].id); 
		 }
  	}
  	//Agregamos ver todo
 	$("#menu1").append(todo);
}


var jsonTmp='{"padres":[{"id":"1","nombre":"Fitness Metrics","url":"","desc":"% grasas","tipo":"P","idPerfil":"1","idPadre":"0"},{"id":"2","nombre":"Menú 2","url":"","desc":"% grasas","tipo":"P","idPerfil":"1","idPadre":"0"}],"submenus":[{"id":"1.1","nombre":"Weight","url":"x|x|x|list-alt","desc":"Generar calculos","tipo":"","idPerfil":"11","idPadre":"1"},{"id":"1.11","nombre":"Historial","url":"mHistorial|./usuario/historial|Reporte semanal de cambios|report","desc":"Reporte semanal","tipo":"","idPerfil":"111","idPadre":"1"}]}';
var jsonNotificaciones='{"notificaciones":[{"id":"1","imgFoto":"images/img.jpg","titulo":"Nombre","texto":"Generar reporte de contabilidad","tipo":"","tiempo":" Hace 3 minutos"},{"id":"2","imgFoto":"images/img.jpg","titulo":"Nombre 3","texto":"Generar reporte 2","tipo":"","tiempo":" Hace 2 horas"},{"id":"3","imgFoto":"images/img.jpg","titulo":"Nombre 3","texto":"Generar reporte 3","tipo":"","tiempo":" Hace 3 días"}]}';

createNotif(jsonNotificaciones);
createMenu(jsonTmp);
 /*jQuery.ajax({
    type: "POST",
    url: 'web/mn.php',
    dataType: 'text',
    data: {functionname: 'menu', user:localStorage.getItem("user")},
    success: function (result) {
   		//createMenu(result.trim());
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
});*/



/**
	Click en guardar medidas
*/
$("#sMedidas").click(function(e){
	e.preventDefault();
	var peso = $("#peso").val();
	var cuello = $("#cuello").val();
	var hombros = $("#hombros").val();
	var bizquierdo = $("#bizquierdo").val();
	var bderecho = $("#bderecho").val();
	var muneca = $("#muneca").val();
	var pecho = $("#pecho").val();
	var bpecho = $("#bpecho").val();
	var cintura = $("#cintura").val();
	var abdomen = $("#abdomen").val();
	var cadera = $("#cadera").val();


 		/*NProgress.start();
        jQuery.ajax({
					    type: "POST",
					    url: 'web/medidas.php',
					    dataType: 'text',
					    data: {
					    	functionname: 'medidas',
					    	idU:1,
					    	peso:peso,
					    	cuello:cuello,
					    	hombros:hombros,
					    	bicep_Izquiero:bizquierdo,
					    	bicep_Derecho:bderecho,
					    	muneca:muneca,
					    	pecho:pecho,
					    	bajo_pecho:bpecho,
					    	abdomen:abdomen,
							cadera:cadera,
							cintura,cintura
					    },
					    success: function (result) {
			                  alert("Registro completo.");
			                  NProgress.done();
			            }

					});*/
});



/*Gráfica

*

NProgress.start();
        jQuery.ajax({
					    type: "POST",
					    url: 'web/grafica.php',
					    dataType: 'text',
					    data: {
					    	functionname: 'historico',
					    	idU:localStorage.getItem("user")
					    },
					    success: function (result) {
			                 result = eval(result);
			                 
			                 

							var labelHost=[], labelDatos=[];
			        		var cntGrf=0;
			        		for(var i in result)
			            	{
			        			labelHost[cntGrf]=(result[i].fecha_registro);
			        			labelDatos[cntGrf]=(result[i].peso);
			        			cntGrf++;
			            	}

							var data = {
							    labels: labelHost,
							    datasets: [
							      {
							        label: "Histórico de peso",
							        fillColor: "rgba(220,220,220,0.2)",
							        strokeColor: "rgba(220,220,220,1)",
							        pointColor: "rgba(220,220,220,1)",
							        pointStrokeColor: "#fff",
							        pointHighlightFill: "#fff",
							        pointHighlightStroke: "rgba(220,220,220,1)",
							        data: labelDatos
							      }
							    ]
							  };
							 // Get the context of the canvas element we want to select
							  var ctx = document.getElementById("myChart").getContext("2d");

							var myChart = new Chart(ctx , {
							    type: "line",
							    data: data, 
							});

			                 NProgress.done();
			            }

					});

*/