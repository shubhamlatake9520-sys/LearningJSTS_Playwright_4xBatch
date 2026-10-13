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

Run an operator example with Node.js:

```powershell
node 04_Chapter_Operator\19_Arithmetic_Op.js
```

## Recent changes

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
