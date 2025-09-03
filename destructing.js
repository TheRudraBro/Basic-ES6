const product = { name : 'shirt', price: 2009, quantity: 13};


// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 15/100;
// const totalPayable = yourPay + vatAmount;
// const price = product.price;
const { price } = product;
const discount = price * 20 / 100;
const yourPay = price - discount;
const vatAmount = price * 15 / 100;
const totalPayable = yourPay + vatAmount;


// ------------------------------------------//
const numbers = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = numbers;
console.log(first, second, third, fourth, fifth);
console.log(first);