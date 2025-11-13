const person = {name: "paco", edad: 30};
const student = Object.create(person);
student.course = "A";

const customer = Object.create(person);
customer.sales = 1234;

console.log(person);
console.log(student);
console.log(customer)