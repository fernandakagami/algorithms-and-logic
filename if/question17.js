/* Place the number of sides of polygon e measure of sides:
- if the number of sides is 3, print TRIANGLE and the value of its perimeter;
- if the number of sides is 4, print SQUARE and the value of its perimeter;
- if the number of sides is 5, print PENTAGON;
- if the number of sides is smaller than 3 print "It is not a polygon";
- if the number of sides is greater than 5 print "Polygon Not identified".*/

var readline = require("readline-sync");

var sides = parseInt(readline.question("Number of Sides: "));

if (sides == 3) {
    var measure1 = parseFloat(readline.question("Measure of side 1: "));
    var measure2 = parseFloat(readline.question("Measure of side 2: "));
    var measure3 = parseFloat(readline.question("Measure of side 3: "));   
    console.log(`Triangle and its perimeter is ${measure1 + measure2 + measure3}.`);    
} else if (sides == 4) {
    var measure1 = parseFloat(readline.question("Measure of side 1: "));
    var measure2 = parseFloat(readline.question("Measure of side 2: "));
    var measure3 = parseFloat(readline.question("Measure of side 3: "));
    var measure4 = parseFloat(readline.question("Measure of side 4: "));
    console.log(`Square and its perimeter is ${measure1 + measure2 + measure3 +measure4}.`);    
} else if (sides == 5 ) {
    console.log(`Pentagon.`);    
} else if (sides < 3 ) {
    console.log(`It is not a polygon.`);    
} else {
    console.log("Polygon Not identified.");    
}
