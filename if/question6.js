// Place a passaword and confirmation, and check if both are egual.

var readline = require("readline-sync");

var password = readline.question('Input New Password: ', {hideEchoBack: true});
var confirmation= readline.question('Input Confirmation: ', {hideEchoBack: true});

if (password == confirmation) {
    console.log("Confirmed access");
} else {
    console.log("Denied access");
}