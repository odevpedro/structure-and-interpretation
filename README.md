# 📚 SICP Study — Structure and Interpretation of Computer Programs

> Personal study repository combining the **MIT 1986 video lectures** (Abelson & Sussman)
> with the **JavaScript Edition** of SICP (Henz & Wrigstad, MIT Press 2022).

---

## 🎯 Goal

Build a consistent, documented learning journey through one of the most important
CS books ever written — using modern JavaScript as the implementation language.

---

## 📦 Resources

| Resource | Link |
|---|---|
| 📹 MIT Lectures (1986) | [YouTube Playlist](https://www.youtube.com/playlist?list=PLE18841CABEA24090) |
| 📖 SICP JavaScript Edition | [Online](https://sourceacademy.org/sicpjs) |
| 🛠️ Source Academy (JS REPL) | [sourceacademy.org](https://sourceacademy.org) |

---

## 🗺️ Roadmap — Aulas × Livro (SICP-JS)

| Aula | Vídeo | Seções do Livro (SICP-JS) | Status |
|------|-------|--------------------------|--------|
| 1A | Overview and Introduction to Lisp | 1.1 — The Elements of Programming | ⬜ |
| 1B | Procedures and Processes; Substitution Model | 1.2 — Functions and the Processes They Generate | ⬜ |
| 2A | Higher-order Procedures | 1.3 — Higher-Order Functions | ⬜ |
| 2B | Compound Data | 2.1 — Introduction to Data Abstraction | ⬜ |
| 3A | Henderson Escher Example | 2.2 — Hierarchical Data & Closure Property | ⬜ |
| 3B | Symbolic Differentiation; Quotation | 2.3 — Symbolic Data | ⬜ |
| 4A | Pattern Matching and Rule-based Substitution | 2.3–2.4 — Symbolic Data / Multiple Representations | ⬜ |
| 4B | Generic Operators | 2.4–2.5 — Multiple Repr. / Generic Operations | ⬜ |
| 5A | Assignment, State, and Side-effects | 3.1 — Assignment and Local State | ⬜ |
| 5B | Computational Objects | 3.2–3.3 — The Environment Model / Mutable Data | ⬜ |
| 6A | Streams, Part 1 | 3.5 — Streams | ⬜ |
| 6B | Streams, Part 2 | 3.5 — Streams (cont.) | ⬜ |
| 7A | Metacircular Evaluator, Part 1 | 4.1 — The Metacircular Evaluator | ⬜ |
| 7B | Metacircular Evaluator, Part 2 | 4.1–4.2 — Evaluator / Lazy Evaluation | ⬜ |
| 8A | Logic Programming, Part 1 | 4.4 — Logic Programming | ⬜ |
| 8B | Logic Programming, Part 2 | 4.4 — Logic Programming (cont.) | ⬜ |
| 9A | Register Machines | 5.1 — Designing Register Machines | ⬜ |
| 9B | Explicit-control Evaluator | 5.2–5.4 — A Register-Machine Simulator / Explicit-Control Evaluator | ⬜ |
| 10A | Compilation | 5.5 — Compilation | ⬜ |
| 10B | Storage Allocation and Garbage Collection | 5.3 — Storage Allocation and Garbage Collection | ⬜ |

---

## 📁 Estrutura do Repositório

```
sicp-study/
├── README.md
├── chapter-1/          # Building Abstractions with Functions
│   ├── README.md
│   ├── lecture-1a/
│   │   ├── notes.md
│   │   └── examples.js
│   ├── lecture-1b/
│   │   ├── notes.md
│   │   └── examples.js
│   └── exercises/
│       ├── 1.1-to-1.8.js
│       ├── 1.9-to-1.28.js
│       └── 1.29-to-1.46.js
├── chapter-2/          # Building Abstractions with Data
├── chapter-3/          # Modularity, Objects, and State
├── chapter-4/          # Metalinguistic Abstraction
└── chapter-5/          # Computing with Register Machines
```

---

## 📝 Convenção de Commits

```
<tipo>(<escopo>): <descrição>

tipos  → feat | fix | docs | refactor
escopos → ch1 | ch2 | ch3 | ch4 | ch5
```

**Exemplos:**
```bash
feat(ch1): watch lecture 1A - overview and substitution model
feat(ch1): read section 1.1 - elements of programming
feat(ch1): solve exercises 1.1 to 1.8 - basic expressions
docs(ch2): add notes on data abstraction barriers
fix(ch3): correct stream implementation in exercise 3.51
```

---

## 📅 Cadência Sugerida (~20 semanas)

Cada semana cobre **uma aula + as seções correspondentes do livro**:

- **Assistir aula** → `feat(chX): watch lecture XY - <tema>`
- **Ler seção** → `feat(chX): read section X.Y - <tema>`
- **Resolver exercícios** → `feat(chX): solve exercises X.N to X.M - <tema>`

Isso gera ~3–5 commits semanais orgânicos, sem forçar atividade artificial.

---

## ⚙️ Setup

Qualquer ambiente JS moderno funciona. Recomendado:

```bash
node --version   # >= 18
# ou use o REPL online em sourceacademy.org
```

Para rodar os exercícios localmente:
```bash
node chapter-1/exercises/1.1-to-1.8.js
```

---

## 📊 Progresso

- [ ] Capítulo 1 — Building Abstractions with Functions
- [ ] Capítulo 2 — Building Abstractions with Data
- [ ] Capítulo 3 — Modularity, Objects, and State
- [ ] Capítulo 4 — Metalinguistic Abstraction
- [ ] Capítulo 5 — Computing with Register Machines
