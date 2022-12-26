// let factorial=1;
// for(let i=4; i>=1; i--){
//     factorial=factorial*i;
    
// }
// console.log(factorial);

// function er bhitor theke function call kora kei Recursion bole.
function factorial(i){
    if(i==1){
        return 1;
    }
    return i*factorial(--i);
}
let fac=factorial(4);
console.log("Total factorial is ",fac);

