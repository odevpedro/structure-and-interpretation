// Lecture 1A — Overview and Introduction to Lisp
// SICP-JS Seção 1.1
// ============================================================

// 1.1.1 — Expressions
// Em JS, combinações são expressões com operadores
486;
137 + 349;
1000 - 334;
5 * 99;
10 / 5;
2.7 + 10;

// Combinações aninhadas
(3 * 5) + (10 - 6);
(3 * ((2 * 4) + (3 + 5))) + ((10 - 7) + 6);

// 1.1.2 — Naming and the Environment
const size = 2;
size;         // 2
5 * size;     // 10

const pi = 3.14159;
const radius = 10;
pi * radius * radius;       // área do círculo
2 * pi * radius;            // circunferência

// 1.1.4 — Compound Functions
function square(x) {
  return x * x;
}
square(21);       // 441
square(2 + 5);    // 49
square(square(3)); // 81

function sum_of_squares(x, y) {
  return square(x) + square(y);
}
sum_of_squares(3, 4); // 25

function f(a) {
  return sum_of_squares(a + 1, a * 2);
}
f(5); // 136

// 1.1.6 — Conditionals and Predicates
function abs(x) {
  return x >= 0 ? x : -x;
}

function abs_v2(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}

// 1.1.7 — Square Roots by Newton's Method
function sqrt_iter(guess, x) {
  return good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function good_enough(guess, x) {
  return Math.abs(square(guess) - x) < 0.001;
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

sqrt(9);    // ~3.00009...
sqrt(2);    // ~1.41421...
sqrt(1e-4); // pode ter problemas de precisão para números pequenos
