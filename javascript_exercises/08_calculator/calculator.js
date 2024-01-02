const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers = [...args]) {
	return numbers.reduce((total, num)=>{
    return total + num;
  }, 0);
};

const multiply = function(numbers = [...args]) {
    return numbers.reduce((total, num)=>{
      return total * num;
    }, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
  if (num==0) return 1;
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};