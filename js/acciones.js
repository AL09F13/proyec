// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
$('#btn_comenzar').on ('tap', function() {
	navigator.vibrate(1000);
	
	
}); 


$('#btn_regresar').on ('tap', function() {
	navigator.vibrate(1000);
	
	
}); 



$('#atras').on ('tap', function() {
	navigator.vibrate(1000);
	
	
});

$('#continu').on ('tap', function() {
	navigator.vibrate(1000);
	
});

$('#btn_inicio').on ('tap', function() {
	navigator.vibrate(1000);

    $('#diacumple').val('');
	$('#mescumple').val('');
    $('#yearcumple').val('');
    $('#txt_nom').val('');

});



	var nombre;
	$('#btn_conti').on ('tap',function(){
		nombre=$('#txt_nom').val();
		navigator.vibrate(1000);
		
	});//click siguiente nombre
	
	$('#continu').on ('tap',function(e){
		var fecha= new Date();
		

		fechaA = new Date(fecha.getFullYear() + '/' +(fecha.getMonth()+1) +'/'+ fecha.getDate());

		var diaC=$('#diacumple').val();
		var mesC=$('#mescumple').val();
		var yearC=$('#yearcumple').val();

		fechaC=new Date(fecha.getFullYear() +'/'+ mesC +'/'+ diaC);
		fechaCA = fechaC;
		

	
	if(fechaC > fechaA)
	{
       cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	  
	}
	else
	{
	fechaC=new Date((fecha.getFullYear()+1) +'/'+ mesC +'/'+ diaC);
	  cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	   
	}
	$('#name').text(nombre +' faltan');
		$('#day').text(faltan);
		if (faltan==1)
		{
		$('#bird').text('Dia Para Tu Cumple');
		}
		else
		{
		$('#bird').text('Dias Para Tu Cumple');
		
		
		}
		if (faltan <30)
		
		{
					
		
	$('#congra').show();}

		edad=fecha.getFullYear()-yearC;
		if (fechaCA > fechaA)
		{
			edad=edad-1;
			$('#Medad').text('TIENES '+ edad  + ' AÑOS');
		}
		else
		{
		$('#Medad').text('TIENES '+ edad  +  'AÑOS');
		}
			function redondeo(numero, decimales)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
return resultado;
}
});// click sig fecha


});//ready
});