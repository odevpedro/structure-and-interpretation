// Lecture 1B — Procedures and Processes; Substitution Model
// SICP-JS Seção 1.2
// ============================================================

// 1.2.1 — Processo Recursivo Linear (fatorial)
// Expansão: n * (n-1) * ... * 1 fica pendente na pilha
function factorial_recursive(n) {
  return n === 1 ? 1 : n * factorial_recursive(n - 1);
}
// Trace para n=5:
// factorial(5)
//   5 * factorial(4)
//         4 * factorial(3)
//               3 * factorial(2)
//                     2 * factorial(1)
//                           1
//                     2 * 1 = 2
//               3 * 2 = 6
//         4 * 6 = 24
//   5 * 24 = 120

// 1.2.1 — Processo Iterativo (fatorial com acumulador)
// Estado completo em: product, counter, max
function factorial_iterative(n) {
  function iter(product, counter) {
    return counter > n ? product : iter(product * counter, counter + 1);
  }
  return iter(1, 1);
}
// Trace para n=5:
// iter(1, 1) → iter(1, 2) → iter(2, 3) → iter(6, 4) → iter(24, 5) → iter(120, 6) → 120

// 1.2.2 — Tree Recursion (Fibonacci ingênuo)
// Complexidade: O(φ^n) onde φ ≈ 1.618
function fib_tree(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib_tree(n - 1) + fib_tree(n - 2);
}

// Fibonacci iterativo — O(n) tempo, O(1) espaço
function fib_iter(n) {
  function iter(a, b, count) {
    return count === 0 ? b : iter(a + b, a, count - 1);
  }
  return iter(1, 0, n);
}

// 1.2.3 — Orders of Growth
// O(1): operações independentes do input
// O(log n): dividir o problema ao meio a cada passo
// O(n): um passo por unidade de input
// O(n²): dois loops aninhados, etc.

// 1.2.4 — Exponentiation
// Recursivo linear — O(n) passos
function expt_linear(b, n) {
  return n === 0 ? 1 : b * expt_linear(b, n - 1);
}

// Fast expt — O(log n) usando quadrado sucessivo
function expt_fast(b, n) {
  if (n === 0) return 1;
  if (n % 2 === 0) return square(expt_fast(b, n / 2));
  return b * expt_fast(b, n - 1);
}

function square(x) { return x * x; }

// 1.2.5 — Greatest Common Divisors (algoritmo de Euclides)
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Testes
console.log("Fatorial recursivo 10:", factorial_recursive(10)); // 3628800
console.log("Fatorial iterativo 10:", factorial_iterative(10)); // 3628800
console.log("Fib(10) tree:", fib_tree(10));   // 55
console.log("Fib(10) iter:", fib_iter(10));   // 55
console.log("2^10 linear:", expt_linear(2, 10)); // 1024
console.log("2^10 fast:", expt_fast(2, 10));     // 1024
console.log("gcd(40, 6):", gcd(40, 6));           // 2
