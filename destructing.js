const product = { name : 'shirt', price: 2009, quantity: 13};
const discount = product.price*20/100;
const yourPay = product.price - discount;
const vatAmount = product.price * 15/100;
const totalPayable = yourPay + vatAmount;