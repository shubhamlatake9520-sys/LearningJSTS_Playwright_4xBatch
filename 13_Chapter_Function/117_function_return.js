function getStatus(code) {


    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "Client Error";
    } else if (code >= 500 && code < 600) {
        return "Server Error";
    } else {
        return "Unknown Status";
    }
}

console.log(getStatus(200)); // Success
console.log(getStatus(404)); // Client Error
console.log(getStatus(500)); // Server Error