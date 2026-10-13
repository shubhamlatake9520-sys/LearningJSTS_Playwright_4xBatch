let env = "staging";
let baseURL = env === "prod"
? "https://exampleapi.com/" : "https://staging.exampleapi.com/";

console.log(baseURL);

