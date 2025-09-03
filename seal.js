const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    salary: 75000,
    age: 30
};
Object.seal(employee); // seal hoye jabe shob kichu
delete employee.age;
employee.salary= employee.salary + 1000;
employee.position = 'Senior Software Engineer';
console.log(employee);