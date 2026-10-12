# JavaScript Keywords and Identifiers
## A Beginner-Friendly Guide (Class 5 Level)

Imagine JavaScript is a language you use to give instructions to a computer. Just like English has words and names, JavaScript has **keywords** and **identifiers**.

This guide starts with simple examples and slowly builds your understanding.

---

## 1. What Is JavaScript?

**JavaScript** is a programming language. We use it to make websites interactive.

For example, JavaScript can help a website:
- Show a message when you click a button.
- Check whether you filled in a form.
- Update the score in a game.
- Display today's date.

Think of a website as a school project:
- **HTML** creates the basic structure.
- **CSS** makes it look nice.
- **JavaScript** makes it do things.

---

## 2. What Is a Keyword?

A **keyword** is a special word that JavaScript has already reserved for a particular purpose. You can think of it as a word with a special job.

Some JavaScript keywords are:

| Keyword | Simple meaning |
|---|---|
| `let` | Creates a variable whose value can change. |
| `const` | Creates a variable whose value should not be reassigned. |
| `if` | Checks whether something is true. |
| `else` | Says what to do when the `if` condition is false. |
| `function` | Defines a reusable set of instructions. |
| `return` | Sends a result back from a function. |
| `for` | Repeats instructions in a loop. |
| `while` | Repeats instructions while a condition is true. |
| `class` | Defines a class, which is a pattern for creating objects. |
| `new` | Creates an instance of a class or constructor. |

You do not need to memorise every keyword today. Start by understanding what a few common ones do.

### Example: `let`

```javascript
let favouriteFruit = "Mango";
console.log(favouriteFruit);
```

What happens?
1. `let` tells JavaScript that we are creating a variable.
2. `favouriteFruit` is the name we chose for it.
3. `"Mango"` is the value stored in it.
4. `console.log()` displays the value in the console.

Output:

```text
Mango
```

### Example: `if` and `else`

```javascript
let score = 8;

if (score >= 5) {
  console.log("You passed!");
} else {
  console.log("Try again!");
}
```

Because the score is 8, the output is:

```text
You passed!
```

Here, `if` and `else` are keywords. The words inside quotation marks are ordinary text messages.

---

## 3. What Is an Identifier?

An **identifier** is a name that a programmer chooses for something in the code, such as a variable or function.

Imagine your school bag has your name written on it. Your name helps everyone identify which bag is yours. In a similar way, identifiers help us name things in a program.

Examples of identifiers:

```javascript
let studentName = "Aarav";
let age = 10;
let totalMarks = 95;
```

In these examples:
- `studentName` is an identifier.
- `age` is an identifier.
- `totalMarks` is an identifier.

The values are `"Aarav"`, `10`, and `95`.

### Keywords vs. Identifiers

| Keywords | Identifiers |
|---|---|
| Special words reserved by JavaScript. | Names chosen by the programmer. |
| Have a built-in meaning in the language. | Name variables, functions, and other things. |
| Examples: `let`, `const`, `if`, `else`. | Examples: `studentName`, `age`, `totalMarks`. |
| You cannot use a reserved keyword as a normal variable name. | You can choose a suitable name that follows JavaScript's naming rules. |

**Easy memory trick:**
- **Keyword = a special word with a fixed job.**
- **Identifier = a name you choose.**

---

## 4. Rules for Naming Identifiers

JavaScript has rules for choosing identifier names.

### Rule 1: Use letters, digits, `_` (underscore), or `$` (dollar sign)

Valid examples:

```javascript
let studentName = "Aarav";
let score2 = 20;
let _count = 3;
let $price = 50;
```

### Rule 2: A name cannot start with a digit

```javascript
// Incorrect
let 2score = 20;

// Correct
let score2 = 20;
```

### Rule 3: Do not use spaces in a name

```javascript
// Incorrect
let student name = "Aarav";

// Correct
let studentName = "Aarav";
```

A common style is **camelCase**: begin with a small letter, then use a capital letter for each new word.

Examples: `studentName`, `homeAddress`, `totalMarks`.

### Rule 4: Do not use reserved keywords as names

```javascript
// Incorrect
let if = 10;

// Correct
let ifScore = 10;
```

### Rule 5: Capital letters matter

JavaScript is **case-sensitive**. This means `score`, `Score`, and `SCORE` are treated as three different names.

```javascript
let score = 10;
let Score = 20;

console.log(score); // 10
console.log(Score); // 20
```

---

## 5. More Examples: Find the Keyword and Identifier

### Example A

```javascript
let petName = "Coco";
```

- Keyword: `let`
- Identifier: `petName`
- Value: `"Coco"`

### Example B

```javascript
const schoolName = "Green School";
```

- Keyword: `const`
- Identifier: `schoolName`
- Value: `"Green School"`

### Example C

```javascript
if (age >= 10) {
  console.log("Hello!");
}
```

- Keyword: `if`
- Identifier: `age`
- `console` is the name of a built-in object, and `log` is its method.
- `"Hello!"` is a text value.

---

## 6. Try It Yourself

Read each question and answer before checking the answer key.

### Question 1
In this code, which word is the keyword?

```javascript
let favouriteColour = "Blue";
```

### Question 2
In the same code, what is the identifier?

### Question 3
Which identifier is written correctly?

A. `2name`  
B. `my name`  
C. `myName`  
D. `if`

### Question 4
Are `marks` and `Marks` the same identifier in JavaScript?

### Question 5
What does `const` do?

A. Repeats code  
B. Declares a variable that cannot be reassigned  
C. Prints a message  
D. Checks a condition

### Question 6
Find the keyword, identifier, and value:

```javascript
let gameScore = 100;
```

### Question 7
Is `if` a keyword or an identifier in this code?

```javascript
if (temperature > 30) {
  console.log("It is hot!");
}
```

### Question 8
Which name would be best for storing a student's age?

A. `a`  
B. `studentAge`  
C. `if`  
D. `5age`

---

## 7. Answer Key

1. `let`
2. `favouriteColour`
3. C — `myName`
4. No. JavaScript is case-sensitive, so they are different names.
5. B — it declares a variable that cannot be reassigned.
6. Keyword: `let`; identifier: `gameScore`; value: `100`.
7. `if` is a keyword.
8. B — `studentAge` is clear and follows the naming rules.

---

## 8. Mini Practice Project

Create a small profile for a student:

```javascript
const studentName = "Aarav";
let studentAge = 10;
let favouriteSubject = "Science";

console.log(studentName);
console.log(studentAge);
console.log(favouriteSubject);
```

### Your task
1. Identify all the keywords.
2. Identify all the identifiers.
3. Change the student's name and favourite subject.
4. Run the code and see the output.

Expected output:

```text
Aarav
10
Science
```

Remember: `const` is suitable for a value you do not plan to reassign. Use `let` when you need to assign a new value later.

---

## 9. Quick Revision

- JavaScript is a programming language used to make websites interactive.
- A **keyword** is a reserved word with a special meaning.
- An **identifier** is a name chosen for a variable, function, or other item.
- Identifiers cannot start with a digit or contain spaces.
- Identifiers cannot be reserved keywords.
- JavaScript is case-sensitive: `age` and `Age` are different.
- Choose clear names such as `studentName` and `totalMarks`.

**One-line summary:** Keywords are special words JavaScript understands; identifiers are names programmers choose.

---

## 10. A Note for Learners

This guide introduces the topic using simple examples. Some details, such as `class`, `new`, and functions, may be easier to understand as you learn more JavaScript. It is perfectly fine to learn a few concepts at a time.
