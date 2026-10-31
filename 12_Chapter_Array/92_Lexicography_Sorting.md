# Lexicographic Sorting

## Definition

Lexicographic (or lexicographical) order is the same order a dictionary uses for words. Values are compared **character by character, left to right**. The first character position where two values differ decides the order.

---

## How It Works, Step by Step

Given two strings, the comparison is:

1. Compare the first character of each.
2. If they're different, the one with the smaller character comes first — done.
3. If they're the same, move to the next character and repeat.
4. If one string runs out of characters, the shorter string comes first (e.g. `"car"` before `"carpet"`).

Characters are compared by their **Unicode code point value**, which for ASCII means `"0"–"9"` < `"A"–"Z"` < `"a"–"z"`.

---

## Default `.sort()` Behavior

JavaScript's `.sort()` with **no comparator function** converts every element to a string, then compares them lexicographically.

### Example with Words

```javascript
["banana", "apple", "cherry"].sort();
// ["apple", "banana", "cherry"]
```

`"apple"` vs `"apricot"`: characters match at `a`, `p`, then `"p"` vs `"r"` decides it — `p < r`, so `"apple"` wins.

```javascript
["banana", "apple", "cherry", "apricot"].sort();
// ["apple", "apricot", "banana", "cherry"]
```

### Example with Numbers

Since numbers become strings, they sort alphabetically, not numerically:

```javascript
let nums = [10, 1, 3, 2, 3];
nums.sort();
console.log(nums);
// Output: [1, 10, 2, 3, 3]
```

| Element | String form |
|---------|-------------|
| `10`    | `"10"`      |
| `1`     | `"1"`       |
| `3`     | `"3"`       |
| `2`     | `"2"`       |
| `3`     | `"3"`       |

- Comparing `"1"` vs `"10"`: both start with `"1"`, but `"1"` has no second character, so `"1"` comes first (shorter wins).
- Comparing `"10"` vs `"2"`: first characters are `"1"` vs `"2"`, so `"10"` wins — the `0` is never looked at.

That's why `10` ends up **between** `1` and `2`, not after `3`.

---

## Case Sensitivity Matters

Uppercase letters come before all lowercase ones:

```javascript
["apple", "Banana", "cherry"].sort();
// ["Banana", "apple", "cherry"]
```

Because `"B"` (66) < `"a"` (97) in Unicode.

---

## Fixing It for Numbers

To sort numerically, pass a comparator:

```javascript
nums.sort((a, b) => a - b);
console.log(nums);
// [1, 2, 3, 3, 10]
```

The comparator returns:

| Return value | Meaning                |
|--------------|------------------------|
| negative     | `a` comes before `b`   |
| positive     | `b` comes before `a`   |
| zero         | keep original order    |

For the duplicate `3` and `3`, the comparator returns `0`, so their relative order stays unchanged.
