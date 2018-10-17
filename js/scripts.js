//Back-end logic

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

//Front-end logic

$(document).ready(function(){
	$("form#add").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#outputAdd").text(result);
	});

	$("form#subtract").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#outputSubtract").text(result);
	});

	// var number1 = parseInt(prompt("Enter a number:"));
	// var number2 = parseInt(prompt("Enter another number: "));


});








// var result = add(number1, number2);
// alert(result);
//
// var result = subtract(number1, number2);
// alert(result);
//
// var result = multiply(number1, number2);
// alert(result);
//
// var result = divide(number1, number2);
// alert(result);
