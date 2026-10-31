let testCases = [
  { name: "Login", status: "PASS" },
  { name: "Checkout", status: "FAIL" },
  { name: "Search", status: "PASS" },
];

let failedTests = testCases
  .filter(tc => tc.status === "FAIL")
  .map(tc => tc.name);

console.log(failedTests);
// ["Checkout"]