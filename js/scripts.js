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
		alert(add(number1, number2));
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
