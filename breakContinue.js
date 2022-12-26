let products=[
    {name:"iPhone",price:70000},
    {name:"SamsungPhone",price:60000},
    {name:"Dell Laptop",price:55000},
    {name:"Tablet",price:35000},
    {name:"Lenovo Laptop",price:90000},
    {name:"Smart Watch",price:11000},
    {name:"Apple Watch",price:15000},
    
   
];
// for(let product of products){
//     if(product.price<12000){
//         break;
//     }
//     console.log(product);
// }

for(let product of products){
    if(product.price<50000){
        continue;
    }
    console.log(product);
}

// something Tricky console.log("123" + 123); what will be output ?
/* let a="hi"
 let b="there"
 console.log(a+b) */
 
 /* tricky question
 const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
} */

/* what is the purpose of a return statement in a function
The return statement ends function execution and specifies a value to be returned to the function caller.
*/

/* tricky 
function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
  const result = compare(15, "15");
  console.log(result);
  */
