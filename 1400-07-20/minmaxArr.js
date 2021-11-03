arr=[6,2,8,11,4,243,89,52]
arr.sort((a,b) => a-b )
console.log('min : %s , max : %s', arr[0],arr[arr.length-1])

 // .........................................................................
arr1 = [-1,66,23,8,9,110,3]
function max(a,b){
    if(a>b) return a;
    else return b;
}
function min(a,b){
    if(a<b) return a;
    else return b;
}
const minNum = arr1.reduce(min)
const maxNum = arr1.reduce(max)
console.log(minNum)
console.log(maxNum)



