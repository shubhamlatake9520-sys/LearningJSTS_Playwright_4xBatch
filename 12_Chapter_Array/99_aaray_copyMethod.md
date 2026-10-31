# Array Copy Methods

## Why Copy an Array?

If you assign one array to another with `=`, both variables point to the **same array in memory**. Changing one changes the other:

```javascript
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a); // [1, 2, 3, 4] — changed too!
```

To get an independent copy, use one of the methods below.

---

## 1. Spread Copy — `[...array]`

Spreads each element into a brand-new array literal:

```javascript
let original = [1, 2, 3];
let copy1 = [...original];

copy1.push(93);
console.log(original); // [1, 2, 3] — unchanged
console.log(copy1);    // [1, 2, 3, 93]
```

Top-level elements are copied by value, so pushing to `copy1` never touches `original`.

---

## 2. Slice Copy — `array.slice()`

`slice()` with no arguments returns a new array from index 0 to the end:

```javascript
let original = [1, 2, 3];
let copy2 = original.slice();

copy2.push(92);
console.log(original); // [1, 2, 3] — unchanged
console.log(copy2);    // [1, 2, 3, 92]
```

Same result as spread — a new, independent array.

---

## 3. Deep Copy — `structuredClone()`

Spread and slice are **shallow copies**: they only copy the top level. Nested arrays or objects are copied by **reference**, so both arrays share the same inner values:

```javascript
let original = [1, 2, [3, 4]];
let copy = [...original];

copy[2].push(99);
console.log(original); // [1, 2, [3, 4, 99]] — changed too!
```

A **deep copy** clones every level, so nothing is shared:

```javascript
let original = [1, 2, [3, 4]];
let deep = structuredClone(original);

deep[2].push(99);
console.log(original); // [1, 2, [3, 4]] — unchanged
console.log(deep);     // [1, 2, [3, 4, 99]]
```

### Old Fallback — `JSON.parse(JSON.stringify(array))`

Works, but loses `undefined`, functions, `Date` objects, and `NaN`. Prefer `structuredClone()`.

---

## Comparison Table

| Method                              | New array? | Copies nested levels? |
|-------------------------------------|------------|-----------------------|
| `let b = a` (assignment)            | No         | N/A (same array)      |
| `[...a]` (spread)                   | Yes        | No (shallow)          |
| `a.slice()`                         | Yes        | No (shallow)          |
| `structuredClone(a)`                | Yes        | Yes (deep)            |
