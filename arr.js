
// function arr(arrNum){
//    let sum=0;
//    for(let ele of arrNum){
//     sum=sum+ele;
//    }
//    return sum;
// }
// let arr1=[10,20,30,40];
// let total=arr(arr1);
// console.log(total);

function arr(allMarks){
    let marks=0;
    for(let finalMarks of allMarks){
        marks=marks+finalMarks;
    }
   return marks; 
}
let marks=[100,100,100,100];
let totalMarks=arr(marks);
console.log(totalMarks);









