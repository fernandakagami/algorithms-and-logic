/* The department that controls the rate of pollution of the environment controls 3 groups of industries that are highly polluting the environment. The acceptable pollution index ranges from 0.05 to 0.25. If the index rises until to 0.3, the industries of the 1st group are ordered to suspend their activities, if the index rises until to 0.4, those of the 1st and 2nd groups are ordered to suspend their activities, and if the index reaches until to 0.5 all 3 groups must be notified to stop their activities. Write a program that reads the measured pollution index and send the appropriate notification to different groups of companies.*/

let readline = require("readline-sync");

let pollution = parseFloat(readline.question("Pollution index: "));

if (pollution >= 0.05 && pollution <= 0.25) {
    console.log("The pollution index is acceptable.");    
} else if (pollution > 0.25 && pollution <= 0.3) {
    console.log(`Group 1: The pollution index is ${pollution}. You must suspend your activities.`);    
    console.log(`Group 2: The pollution index is ${pollution}. You doesn't need to suspend your activities.`);
    console.log(`Group 3: The pollution index is ${pollution}. You doesn't need to suspend your activities.`);
} else if (pollution > 0.3 && pollution <= 0.4) {
    console.log(`Group 1: The pollution index is ${pollution}. You must suspend your activities.`);    
    console.log(`Group 2: The pollution index is ${pollution}. You must suspend your activities.`);
    console.log(`Group 3: The pollution index is ${pollution}. You doesn't need to suspend your activities.`);
} else if (pollution > 0.4 && pollution <= 0.5) {
    console.log(`Group 1: The pollution index is ${pollution}. You must suspend your activities.`);    
    console.log(`Group 2: The pollution index is ${pollution}. You must suspend your activities.`);
    console.log(`Group 3: The pollution index is ${pollution}. You must suspend your activities.`);
} else {
    console.log(`Wrong value.`);
}