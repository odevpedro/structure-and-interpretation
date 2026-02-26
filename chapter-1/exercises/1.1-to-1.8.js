// SICP-JS — Capítulo 1
// Exercícios 1.1 a 1.8 — Seção 1.1: The Elements of Programming
// ============================================================

// Ex 1.1 — Qual é o resultado de cada expressão?
10;
5 + 3 + 4;
9 - 1;
6 / 2;
2 * 4 + (4 - 6);
const a_1 = 3;
const b_1 = a_1 + 1;
a_1 + b_1 + a_1 * b_1;
a_1 === b_1;
b_1 > a_1 && b_1 < (a_1 * b_1) ? b_1 : a_1;
// ... complete os demais

// Ex 1.2 — Traduza para notação de prefixo:
// (5 + 4 + (2 - (3 - (6 + 4/5)))) / (3 * (6 - 2) * (2 - 7))
const ex_1_2 = /* sua resposta aqui */ null;

// Ex 1.3 — Função que recebe 3 números e retorna a soma dos
// quadrados dos dois maiores
function sum_squares_two_largest(a, b, c) {
  // TODO
}

// Ex 1.4 — O que faz esta função? Descreva o comportamento.
function a_plus_abs_b(a, b) {
  return (b > 0 ? (x, y) => x + y : (x, y) => x - y)(a, b);
}
// Resposta:

// Ex 1.5 — Teste de ordem de avaliação (applicative vs normal)
function p() { return p(); } // loop infinito
function test_1_5(x, y) {
  return x === 0 ? 0 : y;
}
// O que acontece com test_1_5(0, p())?
// Applicative-order: ___
// Normal-order:      ___

// Ex 1.6 — Por que o if especial é necessário? O que acontece se
// usarmos uma função new_if?
function new_if(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}
// Problema com new_if em sqrt_iter:

// Ex 1.7 — good_enough melhorado para números muito pequenos/grandes
function good_enough_v2(guess, prev_guess) {
  // Compara a mudança relativa em vez do valor absoluto
  // TODO
}

function sqrt_v2(x) {
  function sqrt_iter(guess) {
    // TODO — use good_enough_v2
  }
  return sqrt_iter(1);
}

// Teste:
// console.log(sqrt_v2(0.0001));  // deve ser preciso
// console.log(sqrt_v2(1e12));    // deve funcionar para números grandes

// Ex 1.8 — Método de Newton para raiz cúbica
// Melhoria: (x/y² + 2y) / 3
function cube_root(x) {
  function good_enough(guess) {
    return Math.abs(guess * guess * guess - x) / x < 0.0001;
  }
  function improve(guess) {
    return (x / (guess * guess) + 2 * guess) / 3;
  }
  function cbrt_iter(guess) {
    return good_enough(guess) ? guess : cbrt_iter(improve(guess));
  }
  return cbrt_iter(1);
}

// Testes
console.log("Ex 1.8 — cube root de 27:", cube_root(27));   // ~3
console.log("Ex 1.8 — cube root de 8:", cube_root(8));     // ~2
console.log("Ex 1.8 — cube root de 125:", cube_root(125)); // ~5
