function bigName(arr){
    let fName=arr[0];
    for(let i=1; i<arr.length; i++){
        let newName=arr[i];
        if(newName.length>fName.length){
            fName=arr[i];
        }
    }
    return fName;

}
let name1=["Kabir","Amir","Jamshedddd"];
let result=bigName(name1);
console.log(result);
