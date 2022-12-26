// যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 
// যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 
// আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  
// এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 

// function picnicBudget(peopleCount){
//    let first100=5000;
//    let second100=4000;
//    let third100=3000;
//    let result;

//    if(peopleCount>=0 && peopleCount<=100){
//        result=first100*peopleCount;
       
//    }
//    else if(peopleCount>100 && peopleCount<=200){
      
//       result=(peopleCount-100)*second100+100*first100;

//    }
//    else{
//     result=(peopleCount-200)*third100+100*first100+100*second100;
//    }
//    return result;
// }
// let total=picnicBudget(300);
// console.log(total);

function picBudget(people){
   let first100=5000;
   let second100=4000;
   let third100=3000;
   let result;
   
   if(people>=0 && people<=100){
       result=first100*people;
   }
   else if(people>100 && people<=200){
      result=(people-100)*second100+first100*100;
   }
   else{
       result=(people-200)*third100+second100*100+first100*100;
   }
    
   return result;

}
let totalPeople=picBudget(1);
console.log(totalPeople);