# Learning JavaScript, TypeScript and Playwright

A chapter-based learning repository for JavaScript fundamentals, QA prompt engineering, and Playwright automation practice.

## Repository contents

### `00_Chapter_Prompt_engg`

QA and test-planning resources, including:

- RICE-POT master QA templates.
- An enterprise functional, integration, non-functional, and automation test plan for VWO.
- Selenium framework examples using Java, Maven, and TestNG.
- Supporting requirement, problem-statement, and anti-hallucination prompt documents.

The current template filenames are:

- `04_QA_RICE_POT_MASTER_TEMPLATE.md`
- `05_Test_plan_VWO.md`

### `01_Chapter_Js_Basics`

Introductory JavaScript examples and beginner documentation:

- `01_Helloworld.js` prints a Hello World message.
- `02_math.js` demonstrates multiplication, division, addition, and subtraction.
- `JavaScript_DOM_Basics.md`, a class-5-level guide to the Document Object Model with practical examples, a quiz, and a mini click-counter project.

Run the examples with Node.js:

```powershell
node 01_Chapter_Js_Basics\01_Helloworld.js
node 01_Chapter_Js_Basics\02_math.js
```

### `02_Chapter_JS_Keywords`

Examples and beginner documentation covering:

- JavaScript engine basics.
- `var`, `let`, and `const`.
- Keywords and identifiers.
- Identifier naming rules and naming conventions.
- Single-line and multi-line comments in `08_comments.js`.
- `09_IQ.js`, interview-style keyword and identifier practice.
- `Research_Keywords_Identifiers.md`, a class-5-level explanation of keywords and identifiers.

Run a keyword example with Node.js:

```powershell
node 02_Chapter_JS_Keywords\05_key_identifier.js
```

### `03_Chapter_JS_Literal`

JavaScript literal and data-type examples:

- `10_Literal.js` and `14_Literals.js` introduce literals.
- `11_Number.js`, `15_Number.js`, `16_Number2.js`, and `17_Special_Num.js` cover numbers, including special numeric values.
- `12.Null_undefined.js`, `13.Null.js`, and `18_undefined.js` explain `null` and `undefined`.

Run a literal example with Node.js:

```powershell
node 03_Chapter_JS_Literal\18_undefined.js
```

### `04_Chapter_Operator`

JavaScript operator examples:

- `19_Arithmetic_Op.js` and `21_Arithmatic_Ops` cover arithmetic operators.
- `20_Assignment_Op.js` covers assignment operators.
- `22_Comparison_Op.js` covers comparison operators.
- `23_logical_Op.js` covers logical operators (`&&`, `||`, `!`).
- `24_Confusion_Op.js` demonstrates equality coercion confusions (`"" === 0`, `"0" === 0`).
- `26_Questions_0p.js` contrasts loose (`!=`) and strict (`!==`) inequality.
- `27_String.js` shows string concatenation with `+=` and `+`.
- `28_Ternary_Op.js` introduces the ternary operator (`condition ? a : b`).
- `29_T_API_Op.js` uses a ternary to derive a PASS/FAIL API test result.
- `30_IQ.js`, `31_IQ.js`, `32_IQ.js`, and `33_IQ.js` apply ternaries to real scenarios: environment-based base URLs, CI headless/headed browser mode, SLA response-time checks, and template-literal output.
- `34_Nested_Ternary.js` demonstrates a nested ternary with multiple conditions.
- `35_IQ.js` and `36_IQ.js` map HTTP status codes and temperatures to labels using chained ternaries.
- `37_Typeof.js` shows the `typeof` operator for strings and numbers.

Run an operator example with Node.js:

```powershell
node 04_Chapter_Operator\19_Arithmetic_Op.js
```

### `05_Chapter_Js_Incre_Decre.js`

Increment and decrement operator examples:

- `38_ID_Op.js` demonstrates the prefix increment (`++a`).
- `39_ID_Op.js` demonstrates the postfix increment (`a++`).
- `40_IQ.js`, `41_IQ.js`, and `42_IQ.js` are interview-style exercises evaluating expressions that mix prefix and postfix increments.
- `43_Decrement.js` demonstrates the prefix decrement (`--a`).

Run an increment/decrement example with Node.js:

```powershell
node 05_Chapter_Js_Incre_Decre.js\38_ID_Op.js
```

### `06_Chapter_if_else_Statement_Condition.js`

Conditional statement examples:

- `46_If.js` introduces a basic `if`/`else` on an age check.
- `47_IF_Else_Nested.js` demonstrates a nested `if`/`else`.
- `48_To_ifelse.js` compares a ternary with an equivalent `if`/`else`.
- `49_Multiple.js` is a multi-branch grading program that converts a score into a letter grade using an `else if` ladder.

Run a conditional example with Node.js:

```powershell
node 06_Chapter_if_else_Statement_Condition.js\46_If.js
```

### `07_Chapter_Switch`

`switch` statement examples:

- `50_switch.js` maps a day number to a day name using `break`.
- `51_IQ.js` shows fall-through behavior when `break` is omitted.
- `52_IQ.js` demonstrates the `default` case for unmatched values.
- `53_API_Switch.js` maps HTTP response codes to status messages.
- `54_Switch_group.js` groups multiple cases for browser families.
- `55_IQ.js` selects a fruit by name.
- `56_IQ.js` uses `switch (true)` to grade a test score.
- `57_IQ.js` shows block-scoped declarations inside cases.
- `58_IQ.js` explores `switch` matching and type coercion (`0` vs `false`).

Run a switch example with Node.js:

```powershell
node 07_Chapter_Switch\50_switch.js
```

### `08_Chapter_Userinput.js`

Reading user input from the terminal:

- `61_prompt.js` reads a number using the `prompt-sync` package.
- `62_FS_readin.js` reads input from standard input with `fs.readFileSync`.

The `prompt-sync` dependency comes from `package.json`, so install it first:

```powershell
npm install
node 08_Chapter_Userinput.js\61_prompt.js
```

### `09_Chapter_Loops`

`for` loop examples:

- `64_for_loop.js` and `65_for_loop.js` iterate from `0` to `9`.
- `66_IQ.js` starts the loop from `5`.
- `67_IQ.js` iterates while a variable is less than or equal to `10`.
- `68_IQ.js` shows a loop whose condition is never true, so the body never runs.
- `69_IQ.js` combines a `for` loop with an `if`/`else` inside the body.

Run a loop example with Node.js:

```powershell
node 09_Chapter_Loops\64_for_loop.js
```

### `10_Chapter_Loop_While`

`while` loop examples:

- `70_Loop_While.js` contrasts a `while` loop with a `for` loop.
- `71_IQ.js` models a retry loop limited to three attempts.
- `72_IQ.js` counts up to a limit with `while`.

Run a while loop example with Node.js:

```powershell
node 10_Chapter_Loop_While\70_Loop_While.js
```

### `11_Chapter_loops_Dowhile`

`do...while` and nested loop examples:

- `74_retry_dowhile.js` models a retry loop that runs its body first, then checks the condition.
- `75_IQ.js` contrasts a `do...while` loop with a `while` loop, showing the body always runs at least once.
- `76_Nested_loops.js` demonstrates a nested `for` loop.
- `77_IQ.js` shows a `do...while` body executing once even when the condition is false.

Run a `do...while` example with Node.js:

```powershell
node 11_Chapter_loops_Dowhile\74_retry_dowhile.js
```

## Recent changes

- Added the `do...while` chapter (`11_Chapter_loops_Dowhile`) with retry, while-vs-do-while, nested loop, and single-execution examples.
- Added the increment/decrement chapter (`05_Chapter_Js_Incre_Decre.js`) with prefix/postfix increment and decrement examples.
- Added the if/else chapter (`06_Chapter_if_else_Statement_Condition.js`) with a basic conditional, a nested conditional, a ternary comparison, and a multi-branch grading program.
- Added the switch chapter (`07_Chapter_Switch`) covering `break`, fall-through, `default`, grouped cases, `switch (true)`, and API status mapping.
- Added the user input chapter (`08_Chapter_Userinput.js`) using `prompt-sync` and `fs.readFileSync`.
- Added the `for` loop chapter (`09_Chapter_Loops`) and the `while` loop chapter (`10_Chapter_Loop_While`).
- Added `35_IQ.js`, `36_IQ.js`, and `37_Typeof.js` to `04_Chapter_Operator`.
- Added `package.json` and `package-lock.json` with the `prompt-sync` dependency.
- Added ternary operator examples to `04_Chapter_Operator` (`28_Ternary_Op.js` through `34_Nested_Ternary.js`), covering API pass/fail checks, environment-based URLs, CI browser mode, SLA checks, and nested ternaries.
- Added string concatenation (`27_String.js`) and inequality questions (`26_Questions_0p.js`) to `04_Chapter_Operator`.
- Added the JavaScript literals chapter (`03_Chapter_JS_Literal`) with number, null, and undefined examples.
- Added the JavaScript operators chapter (`04_Chapter_Operator`) with arithmetic, assignment, and comparison examples.
- Added `JavaScript_DOM_Basics.md`, a beginner-friendly DOM guide.
- Renamed `JavaScript_Keywords_and_Identifiers_Beginner_Guide.md` to `Research_Keywords_Identifiers.md` and added `09_IQ.js` practice.
- Earlier: added the JavaScript basics chapter with Hello World and arithmetic examples.
- Earlier: added the JavaScript keywords and identifiers chapter with executable examples and beginner-friendly documentation.
- Earlier: replaced the older QA template and VWO test-plan filenames with numbered chapter files:
  - `QA_RICE_POT_MASTER_TEMPLATE.md` → `04_QA_RICE_POT_MASTER_TEMPLATE.md`
  - `Test_plan_VWO.md` → `05_Test_plan_VWO.md`
- Earlier: added this README to document the repository structure and current learning material.

## Prerequisites

- [Node.js](https://nodejs.org/) for JavaScript examples.
- Java and Maven for the Selenium framework examples.
- A Git client for contributing changes.

## License

This repository is intended for learning and practice.
