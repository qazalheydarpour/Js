function fizzBuzz(a){
    if (a%15 === 0)  return 'fizzBuzz';
    else if (a%3 === 0) return 'fizz';
    else if (a%5 === 0) return 'Buzz';
    else return a;
}

console.log(fizzBuzz(2));