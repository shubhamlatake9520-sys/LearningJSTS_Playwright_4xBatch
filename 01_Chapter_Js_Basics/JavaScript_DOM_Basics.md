# JavaScript DOM Basics
## A Beginner-Friendly Guide (Class 5 Level)

This guide explains the **DOM (Document Object Model)** using simple language, examples, and small activities. Learn one idea at a time.

---

## 1. What Is the DOM?

**DOM** stands for **Document Object Model**.

When a browser opens an HTML page, it creates a model of the page that JavaScript can read and change. This model is called the DOM.

Imagine a web page is like a family tree:
- The page is the main tree.
- Headings, paragraphs, buttons, and images are branches.
- Some elements are inside other elements.

The browser organises HTML elements in a tree-like structure. JavaScript can use the DOM to find elements and change them.

### Example HTML page

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, student!</h1>
    <p>Welcome to my page.</p>
    <button>Click me</button>
  </body>
</html>
```

The browser displays a heading, a paragraph, and a button. The DOM gives JavaScript a way to work with those page elements.

---

## 2. HTML, CSS, JavaScript, and DOM

Think of making a school poster:
- **HTML** is the content: title, text, pictures, and buttons.
- **CSS** is the design: colours, size, spacing, and layout.
- **JavaScript** is the action: what happens when someone clicks or types.
- **DOM** is the browser's model of the page that JavaScript can work with.

For example, JavaScript can use the DOM to change a heading when a button is clicked.

---

## 3. What Is an HTML Element?

An **HTML element** is a part of a web page, such as a heading, paragraph, image, or button.

```html
<h1>My First Page</h1>
<p>I like learning code.</p>
<button>Press here</button>
```

Here:
- `<h1>` creates a main heading.
- `<p>` creates a paragraph.
- `<button>` creates a button.

JavaScript can find these elements through the DOM.

---

## 4. Finding Elements in the DOM

Before changing something, JavaScript usually needs to find the element.

### A. `getElementById()`

Finds one element using its unique `id`.

```html
<h1 id="pageTitle">Welcome!</h1>

<script>
  const title = document.getElementById("pageTitle");
  console.log(title);
</script>
```

- `document` represents the current web page.
- `getElementById("pageTitle")` searches for the element with that ID.
- `title` is a variable that stores the element JavaScript found.

An ID should be unique on the page.

### B. `querySelector()`

Finds the **first** element that matches a CSS selector.

```html
<p class="message">Hello!</p>

<script>
  const message = document.querySelector(".message");
  console.log(message);
</script>
```

Useful selector examples:

| Selector | What it finds |
|---|---|
| `"h1"` | The first `<h1>` element |
| `"#pageTitle"` | The element with `id="pageTitle"` |
| `".message"` | The first element with `class="message"` |
| `"button"` | The first button element |

Remember:
- `#` selects an ID.
- `.` selects a class.
- A tag name, such as `p`, selects by element type.

### C. `querySelectorAll()`

Finds **all** elements matching a CSS selector and returns a collection called a `NodeList`.

```html
<p class="tip">Tip one</p>
<p class="tip">Tip two</p>

<script>
  const tips = document.querySelectorAll(".tip");
  console.log(tips.length); // 2
</script>
```

Use `querySelector()` when you need the first match. Use `querySelectorAll()` when you need all matches.

---

## 5. Changing Text on a Page

Use `textContent` to read or change the text inside an element.

```html
<h1 id="greeting">Hello!</h1>

<script>
  const heading = document.getElementById("greeting");
  heading.textContent = "Hello, JavaScript!";
</script>
```

After JavaScript runs, the heading says **Hello, JavaScript!**

`textContent` treats the new content as text, not as HTML tags.

### Try it

```html
<p id="message">Good morning!</p>

<script>
  const message = document.getElementById("message");
  message.textContent = "Have a great day!";
</script>
```

---

## 6. Changing Styles

JavaScript can change an element's style through the DOM.

```html
<p id="colourText">I am learning DOM!</p>

<script>
  const text = document.getElementById("colourText");
  text.style.color = "blue";
  text.style.fontSize = "24px";
</script>
```

The paragraph becomes blue and larger.

In JavaScript style properties, names such as `font-size` are written in camelCase as `fontSize`. For larger designs, developers often add or remove CSS classes instead of changing many styles one by one.

---

## 7. Handling Button Clicks with Events

An **event** is something that happens, such as a click, a key press, or typing in a box.

JavaScript can listen for events and respond.

```html
<button id="helloButton">Click me</button>
<p id="result">Waiting...</p>

<script>
  const button = document.getElementById("helloButton");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    result.textContent = "You clicked the button!";
  });
</script>
```

How it works:
1. JavaScript finds the button and paragraph.
2. `addEventListener("click", ...)` listens for a click.
3. When the button is clicked, the function runs.
4. The paragraph text changes.

`addEventListener()` is a common way to connect an event to an action.

---

## 8. Reading What a User Types

Input fields let users type information. JavaScript can read their value.

```html
<label for="studentName">Your name:</label>
<input id="studentName" type="text">
<button id="showName">Show name</button>
<p id="output"></p>

<script>
  const nameInput = document.getElementById("studentName");
  const showButton = document.getElementById("showName");
  const output = document.getElementById("output");

  showButton.addEventListener("click", function () {
    output.textContent = "Hello, " + nameInput.value + "!";
  });
</script>
```

If the user types `Aarav` and clicks the button, the page shows `Hello, Aarav!`.

- `.value` reads the current value in the input field.
- `+` joins text together in this example.

For real forms, developers should also validate input and handle empty or unexpected values.

---

## 9. Adding and Removing Elements

JavaScript can create new HTML elements and add them to the page.

```html
<ul id="shoppingList">
  <li>Apples</li>
</ul>
<button id="addItem">Add bananas</button>

<script>
  const list = document.getElementById("shoppingList");
  const button = document.getElementById("addItem");

  button.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Bananas";
    list.appendChild(newItem);
  });
</script>
```

When the button is clicked, a new list item is added.

Important methods:
- `document.createElement("li")` creates a new list-item element.
- `appendChild(newItem)` adds it inside the list.

To remove an element, you can use its `.remove()` method:

```javascript
const item = document.querySelector("li");
item.remove();
```

This removes the first list item found by that selector.

---

## 10. DOM Properties and Methods: Quick Reference

A **property** gives information about an element or lets you change it. A **method** is an action you can call.

| Name | Type | Simple use |
|---|---|---|
| `document` | Object | Represents the current HTML document. |
| `getElementById()` | Method | Finds an element by ID. |
| `querySelector()` | Method | Finds the first matching element. |
| `querySelectorAll()` | Method | Finds all matching elements. |
| `textContent` | Property | Reads or changes an element's text. |
| `innerHTML` | Property | Reads or sets HTML markup inside an element. |
| `style` | Property | Lets JavaScript change inline styles. |
| `value` | Property | Reads or changes a form field's value. |
| `addEventListener()` | Method | Listens for an event. |
| `createElement()` | Method | Creates a new element. |
| `appendChild()` | Method | Adds a node as a child. |
| `remove()` | Method | Removes an element. |

### A safety note about `innerHTML`

`innerHTML` can interpret a string as HTML. Avoid placing untrusted user input into `innerHTML`, because it can create security problems. Use `textContent` when you only need to display text.

---

## 11. Mini Project: Click Counter

Copy the full code into a file named `dom-counter.html`, then open it in a browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Click Counter</title>
</head>
<body>
  <h1>My Click Counter</h1>
  <p>Button clicks: <span id="count">0</span></p>
  <button id="countButton">Click me!</button>

  <script>
    let clicks = 0;

    const countText = document.getElementById("count");
    const countButton = document.getElementById("countButton");

    countButton.addEventListener("click", function () {
      clicks = clicks + 1;
      countText.textContent = clicks;
    });
  </script>
</body>
</html>
```

### What you should see
- The page starts with `Button clicks: 0`.
- Each click increases the number by one.
- The displayed number changes without reloading the page.

You practised finding elements, storing a number, listening for clicks, and updating text through the DOM.

---

## 12. Common Beginner Mistakes

1. **Wrong ID:** JavaScript looks for `"pageTitle"`, but the HTML uses `id="title"`. The names must match.
2. **Using `#` in `getElementById()`:** Write `getElementById("pageTitle")`, not `getElementById("#pageTitle")`.
3. **Using the wrong selector:** `".note"` selects a class, while `"#note"` selects an ID.
4. **Running code before an element exists:** Put the script near the end of the body, or use a suitable loading event.
5. **Confusing `textContent` and `value`:** Use `textContent` for an element's text and `value` for an input field.
6. **Forgetting case sensitivity:** `userName` and `username` are different names.
7. **Expecting `querySelector()` to return every match:** It returns only the first match. Use `querySelectorAll()` for all matches.

---

## 13. DOM Basics Quiz

Try answering before checking the answer key.

### Q1. What does DOM stand for?

A. Data Object Mode  
B. Document Object Model  
C. Digital Online Method

### Q2. Which method finds an element by its ID?

A. `getElementById()`  
B. `createElement()`  
C. `appendChild()`

### Q3. Which property changes the text of a paragraph?

A. `style`  
B. `textContent`  
C. `addEventListener()`

### Q4. Which event name is used for a mouse click?

A. `"press"`  
B. `"mouse"`  
C. `"click"`

### Q5. Which selector finds an element with `id="title"`?

A. `".title"`  
B. `"#title"`  
C. `"title"`

### Q6. Which property reads text typed into an input field?

A. `value`  
B. `textContent`  
C. `appendChild`

### Q7. What does `document.createElement("p")` do?

A. Deletes a paragraph  
B. Creates a paragraph element  
C. Changes the page colour

### Q8. Which method finds all elements matching a selector?

A. `querySelector()`  
B. `getElementById()`  
C. `querySelectorAll()`

### Answer Key

1. B — Document Object Model.
2. A — `getElementById()`.
3. B — `textContent`.
4. C — `"click"`.
5. B — `"#title"`.
6. A — `value`.
7. B — it creates a paragraph element.
8. C — `querySelectorAll()`.

---

## 14. DOM Practice Challenges

Try these without looking at the examples above.

- **Challenge 1:** Make a heading say `"Welcome to my website!"`.
- **Challenge 2:** Create a button that changes a paragraph to `"Button clicked!"`.
- **Challenge 3:** Read a person's name from an input and display a greeting.
- **Challenge 4:** Add a new item to a list every time a button is clicked.
- **Challenge 5:** Build a click counter that has both **Increase** and **Reset** buttons.

Suggested order: finish Challenge 1, then 2, then 3, and continue step by step.

---

## 15. Quick Revision

- **DOM** means Document Object Model.
- The browser creates the DOM from the HTML page.
- JavaScript uses the DOM to find, read, and change elements.
- Use `getElementById()` or `querySelector()` to find an element.
- Use `textContent` to change text.
- Use `style` to change inline styles.
- Use `addEventListener()` to respond to events.
- Use `createElement()` and `appendChild()` to add elements.
- Use `value` to read an input field.

**One-line summary:** The DOM is the browser's model of a web page, and JavaScript can use it to make the page interactive.

---

## 16. What to Learn Next

After understanding DOM basics, learn these topics in order:

1. JavaScript variables and data types.
2. Conditions (`if` and `else`).
3. Functions and events.
4. Arrays and loops.
5. DOM selectors and form validation.
6. Basic debugging using the browser's Developer Tools.
7. DOM testing with Playwright.

You do not need to master everything today. Practise small examples, run them in a browser, and change one thing at a time.
