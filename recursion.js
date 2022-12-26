// Matha pagol kore dilo ghurte ghurte 
// নিজের ভিতর থেকে নিজেকে কল করা হচ্ছে Recursion 
// function এর ভিতর থেকে ওই একই function  কল করাকে Recursion বলে
function recur(i){
    if(i>7){
        return;
    }
 console.log(i);
  recur(i+3);
}
recur(1);