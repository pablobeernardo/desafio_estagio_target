function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (a <= num) {
      if (a === num) {
        return true;
      }
      [a, b] = [b, a + b];
    }
    return false;
  }
  
  const num = 21;
  
  if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
  }
  