function add(x, y) {
    return x + y

}
 console.log(add(3, 5));
 
function getMultiply(x, y){
   let total = 0
   for(let index = 0; index < y; index += 1  ){
        total = add(x, total)
   }

   return total
}
console.log(getMultiply(3, 6));

function power(x, n){
    let total = 1
    for (let index = 0; index < n; index += 1) {
        total = getMultiply(x, total)
        
    }
    
    return total
}
console.log(power(8, 3));

function factorial(x){
    let total = 1
    for (let index = 0; index <= x ; index += 1) {
        total = power(x, total)
        
        
    }
    return total
}
console.log(factorial(4));


