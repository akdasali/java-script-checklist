// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

// function bestFriend(arr){
//   let big=arr[0];
//   for(let i=1; i<arr.length; i++){
//     let name=arr[i].length;
//     if(name>big.length){
//         big=arr[i];
//     }
//   } 
//    return big;
// }
//  let friendsName=["Enamul","Showrav","Onik","Kabir","Rakkmma"];
//  let result=bestFriend(friendsName);
//  console.log("Big frnd name is ",result);




function bossomFriend(arr){
  let bigName=arr[0];
  for(let i=1; i<arr.length; i++){
      let name2=arr[i].length;
      if(name2>bigName.length){
         bigName=arr[i];
      }
  }
  return bigName;
}

let fname=["Kabir","Sah","Aman","Anamika"];
let bigFrName=bossomFriend(fname);
console.log("Big friend name is ",bigFrName);



