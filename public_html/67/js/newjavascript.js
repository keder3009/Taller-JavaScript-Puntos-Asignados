class Number {
  constructor() {
    this._array;
    this._pair;
    this._prime = [];
    this._sumPair;
    this._sumPrime;
    this._medianPair;
    this._medianPrime;
  }
  set array(array) {
    this._array = array;
  }
  get array() {
    return this._array;
  }
  set pairs(array) {
    this._pair = array.filter((e) => {
      return e % 2 === 0;
    });
  }
  get pairs() {
    return this._pair;
  }
  set prime(array) {
    for (let num of array) {
      let tmp = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          tmp++;
        }
      }
      if (tmp === 2) {
        this.prime.push(num);
      }
    }
  }
  get prime() {
    return this._prime;
  }
  set sumPair(array) {
    this._sumPair = array.reduce((a, e) => {
      return a + e;
    });
  }
  get sumPair() {
    return this._sumPair;
  }
  set sumPrime(array) {
    this._sumPrime = array.reduce((a, e) => {
      return a + e;
    });
  }
  get sumPrime() {
    return this._sumPrime;
  }
  set medianPair(array) {
    this._mediaPair = array / this._pair.length;
  }
  get medianPair() {
    return this._mediaPair;
  }
  set medianPrime(array) {
    this._medianPrime = array / this._prime.length;
  }
  get medianPrime() {
    return this._medianPrime;
  }
}
let size = parseInt(prompt("Define el tamaño del arreglo"));
var arreglo = [];
for (let i = 0; i < size; i++) {
  arreglo[i] = parseInt(prompt("Digite el numero"));
}

let numbers = new Number();

numbers.array = arreglo;
console.log(numbers.array);

numbers.pairs = numbers.array;
console.log(numbers.pairs);

numbers.prime = numbers.array;
console.log(numbers.prime);

numbers.sumPair = numbers.pairs;
console.log(numbers.sumPair);

numbers.sumPrime = numbers.prime;
console.log(numbers.sumPrime);

numbers.medianPair = numbers.sumPair;
console.log(numbers.medianPair);

numbers.medianPrime = numbers.sumPrime;
console.log(numbers.medianPrime);