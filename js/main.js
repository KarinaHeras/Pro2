var altoHeader = $(".mainHeader").height()+75 ;



$(".mainNav li").on("click" , irAseccion ) ;




function irAseccion() {
	
	var $liPulsado = $(this) ;
	
	var numLiPulsado = $liPulsado.index() ;
	
	var $seccionDestino = $(".secciones section").eq(numLiPulsado) ;
	
	var scrollTopDestino = $seccionDestino.offset().top - altoHeader ;
		
	$("html").animate({ scrollTop: scrollTopDestino } , 1000) ;

	$('#menu-btn').prop('checked', false); 

}


$(".logo").on("click" , irArriba ) ;

function irArriba() {
	
	$("html").animate({ scrollTop: 0 } , 1000) ;
	
}



























