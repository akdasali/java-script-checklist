
function longName(arr){
    let frndsBigName=arr[0];
    for(let i=1; i<arr.length; i++){
        let name=arr[i].length;
        if(name>frndsBigName.length){
            frndsBigName=arr[i];
        }
    }
   return frndsBigName;
}

let allName=["Aman","Arman","Abraham","Omi"];
let result=longName(allName);
console.log(result);