function fibonacci(n) {
    let a = 0, b = 1;
    let fibSeq = [a, b];
  
    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
        fibSeq.push(b);
    }
    
    return fibSeq;
}

function isFibonacci(num) {
    let fibSeq = fibonacci(num);

    if (fibSeq.includes(num)) {
        return `O número ${num} pertence a sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence a sequência de Fibonacci.`;
    }
}

let numero = 21;
console.log(isFibonacci(numero));