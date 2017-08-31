$(function(){
	$("#matchScreen").hide();

});


 $("#login").click(function(){
   $("#matchScreen").show();
    $(".popup-close").click(function(){
    $("#matchScreen").hide();
		})
	});

 $("#submit").on("click",function(event){
 	event.preventDefault();

 	
 	
 	window.location = "main.html"
 })