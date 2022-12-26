let products=[
    {name:"iPhone",price:70000},
    {name:"Samsung",price:60000},
    {name:"Dell Laptop",price:80000},
    {name:"Smart Watch",price:12000},
    {name:"Lenovo Laptop",price:90000},
    {name:"Apple Watch",price:20000},
    {name:"iPhone",price:70000},
];
function searchProducts(products,searchText){
    let result=[];
     for(let product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
        
     }
     return result;
}
let matched=searchProducts(products,"Watch");
console.log(matched);