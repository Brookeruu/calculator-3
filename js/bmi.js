var imputMass =parseFloat(prompt("How much do you weight, in kilograms?"));
var imputHeight =parseFloat(prompt("How tall are you, in meters?"));

var bmi = function(mass, height) {
  var result = mass / Math.pow(height, 2);
	return result;
};

alert("Your BMI is " + bmi(imputMass, imputHeight));
