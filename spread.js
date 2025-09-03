const numbers = [88,225,5,54]
// console.log(numbers);
console.log(...numbers); // spread operator

const max = Math.max(...numbers);
console.log(max);


const first = [1,2,3,4,5];
const second = [...first];
const third = [0, ...first, 98, 45, 433];
second.push(6);
console.log(first);
console.log(second);
console.log(third);
