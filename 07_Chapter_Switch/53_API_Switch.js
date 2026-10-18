let responseCode = 508;
switch (responseCode) {
    case 200:
        console.log("Status OK");
        break;
    case 404:
        console.log("404 Not found")
        break;
    case 503:
        console.log("Server Error");
        break;
    default:
        console.log("No status Code");

}
