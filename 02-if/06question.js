// Place a passaword and confirmation, and check if both are egual.

let readline = require("readline-sync");

let password = readline.question('Input New Password: ', {hideEchoBack: true});
let confirmation= readline.question('Input Confirmation: ', {hideEchoBack: true});

if (password == confirmation) {
    console.log("Confirmed access");
} else {
    console.log("Denied access");
}