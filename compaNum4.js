// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
let num1=30;
let num2=30;
if(num1>num2){
    console.log("num1 is big ");
}
else if(num1<num2){
     console.log("num2 is big ");
}
else if(num1==num2){
    console.log("num1 equal to num2 ");
}
else if(num1!=num2){
    console.log("num1 is not equal to num2 ");
}
else if(num1>=num2){
    console.log("num1 is greater than or equal to num2 ");
}
else if(num1<=num2){
    console.log("num2 is greater than or equal to num1 ");
}
else{
    console.log("Nothing");
}