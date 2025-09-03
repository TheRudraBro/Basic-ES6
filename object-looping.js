const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    // console.log(num);
}
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    salary: 75000
};
for (const key in employee) {
    const value = employee[key];
    console.log(key, value);
}

const keys = Object.keys(employee);
console.log(keys);
for (const key of keys) {
    const value = employee[key];
    console.log(key, value);
}