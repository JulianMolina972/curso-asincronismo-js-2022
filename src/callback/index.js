function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
};

console.log(calc(1, 2, sum));


setTimeout(() => {
  console.log('Hello JavaScript');
}, 3000);

function greeting(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, 'Julian');