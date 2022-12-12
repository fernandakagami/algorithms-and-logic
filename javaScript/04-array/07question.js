/* Do a array with 20 integers. Print the elements eliminating the repeated ones */
let a = [1, 3, 4, 2, 1, 5, 1, 2, 3, 4, 5, 6, 6, 8,7, 2, 1, 5, 7, 9];
let exists = false;

for (let i = 0; i < a.length; i++) {
  exists = false;
  for (let j = 0; j < i; j++) {
    if (a[i] == a[j]) {      
      exists = true;
      break;
    }
  }
  if (!exists) {  
    console.log(a[i]);
  }
}
