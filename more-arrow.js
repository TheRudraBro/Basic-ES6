const getTax = (amount, taxRate) => {
    const tax = amount * taxRate;
    return tax;
}
const taxAmount = getTax(50000, 0.1);
console.log(taxAmount);


// single parameter arrow function
const getSquare = amount => amount * amount;
const squareAmount = getSquare(50000);
console.log(squareAmount);

const getHalf = amount => amount / 2;
const halfAmount = getHalf(50000);
console.log(halfAmount);

// multi line
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const product = x * y;
    return { sum, diff, product };
}
const { sum, diff, product } = doMath(10, 5);
console.log(sum);
console.log(diff);
console.log(product);

// anonymous function
document.getElementById('btn-click').addEventListener('click', () => {
    console.log('Button clicked!');
});
