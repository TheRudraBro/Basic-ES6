// add(5,7);
// function declaration
function add(num1, num2){
    return num1 + num2;
}
// console.log(add(5,7));


// function expression
const addition = function(num1, num2){
    return num1 + num2;
}
const addResult = addition(5,7);
// console.log(addResult)

// arrow function
const arrowAddition = (num1, num2) => num1 + num2;
const arrowAddResult = arrowAddition(5,7);
console.log(arrowAddResult); 

// multi line arrow function
const multiLineArrowAddition = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
const multiLineArrowAddResult = multiLineArrowAddition(5,7);
console.log(multiLineArrowAddResult);