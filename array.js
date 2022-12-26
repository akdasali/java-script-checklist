// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
let arr=[10,20,30,40,50,60];
let arrEle=arr.length;
console.log(arrEle);
arr[4]=777;
console.log(arr);
let twoArrAdd=arr[0]+arr[1];
console.log(twoArrAdd);
arr.pop();
console.log(arr);
arr.push("Luna");
console.log(arr);
arr.splice(2,2,"Rana",555);//splice for array
console.log(arr);
let fName="Jamil, Tulphi,Khulphi";
let cname=fName.slice(1,4);//for string
 
console.log(cname);

