function numbers(a){
  return function(b){
    return a+b
  }
};

let sumFunc = numbers(99);
let sum = sumFunc(1);
console.log(sum)