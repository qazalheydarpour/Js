// ........................ COUNT T ..........................
arr = [true,true,true,true,false,true]
 const countTrue = arr => {
    let temp = 0 ;
    for ( let n of arr){ if(n) temp ++}
    return temp;
}
console.log(countTrue(arr))
// ...........................................................
