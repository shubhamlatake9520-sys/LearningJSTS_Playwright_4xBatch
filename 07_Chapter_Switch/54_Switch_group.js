let browser = "Other";

switch (browser) {
    case "Chrome":
    case "brave":
    case "Edge":
    case "Opera":
        console.log("Chromium Packaged Browser");
        break;
    case "Firefox":
        console.log("Mozilla Project");
    case "safari":
        console.log("Apple Project");
        break;
    default:
        console.log("Manual defualt Project");

}