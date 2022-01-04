// concat
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
console.log(negativeNumbers.concat(0, positiveNumbers));

// every
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0; // arrow function
numbers.every(isEven); // encerra as iterações no primeiro número que retornar false

// some
numbers.some(isEven); // lógica oposta do every

// forEach
numbers.forEach((x) => console.log(x % 2 === 0)); // percorre o array  inteiro sem interromper as iterações

// map e filter
const myMap = numbers.map(isEven); // cria outro array com o retorno da função isEven para cada elemento do array original
const myFilter = numbers.filter(isEven); // cria outro array com cada número do array original que a função isEven retorna true;
console.log(myMap);
console.log(myFilter);


