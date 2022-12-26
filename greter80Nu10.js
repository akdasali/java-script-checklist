// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
let numbers=[10,20,80,81,82,85,90];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i]>80){
        console.log("greter than 80 ",numbers[i]);
    }
}
