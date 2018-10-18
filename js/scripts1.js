//Back-end logic
//Calculator-3
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
	$("form#calculator").submit(function() {

		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		var result;
		if (operator === "add"){
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result = divide(number1, number2);
		}
		$("#output").text(result);
		});
	});

	// var number1 = parseInt(prompt("Enter a number:"));
	// var number2 = parseInt(prompt("Enter another number: "));


 // How to properly write : if (arguemnt){
	//  return sum;
 // } else if () {
 //
 // }
 //






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
