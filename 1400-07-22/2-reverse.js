function reverse (a,arr){
    a += arr.pop() + ','
    arr.length > 0 ? reverse(a,arr) : console.log(a)
}

const arr = [1,2,3,4,5,6,7]
let a = '';
reverse(a,arr)
