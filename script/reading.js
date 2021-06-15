$(document).ready(function(){

$('.reading').hide();

$("#reading1").show();

$("#reading1 #next").click(function(){
	$(".reading").hide();
	$("#reading2").fadeIn(300);
	return false;
});


$("#reading2 #next").click(function(){
	$(".reading").hide();
	$("#reading3").fadeIn(300);
	return false;
});


$("#reading2 #back").click(function(){
	$(".reading").hide();
	$("#reading1").fadeIn(300);
	return false;
});


$("#reading3 #back").click(function(){
	$(".reading").hide();
	$("#reading2").fadeIn(300);
	return false;
});

});