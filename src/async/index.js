const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('done!'), 2000)
      : reject(new Error('Error"')); 
  });
}

const anotherFunction = async () => {
  const result = await fnAsync();
  console.log(result);
  console.log('Hello');
}

console.log('Before');
anotherFunction();
console.log('After');