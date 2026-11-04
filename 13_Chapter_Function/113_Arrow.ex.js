function validateStatusCode(status) {

    if(status >= 200 && status <= 300){ 
        console.log("Request is fine");
    } else {
        console.log("Request is not fine");
    }
}

validateStatusCode(400);
validateStatusCode(200);