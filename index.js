const m = 4;
const n = 89;

if (false) {
  const isPrime = require("prime-number-check");

  console.log(isPrime(m));
  console.log(isPrime(n));
  // Пакет с npmjs, проверяющий простые числа в формате boolean
}

if (true) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  function getPrimesInRange(m, n) {
    const primes = [];
    for (let i = m; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  const primes = getPrimesInRange(m, n);

  console.log(`Простые числа в диапазоне от ${m} до ${n}:`, primes);
}
