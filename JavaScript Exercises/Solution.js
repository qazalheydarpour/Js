// //1
// const reverse = (n) => {
//     let myArr = String(n).split("").map((n) => {
//         return Number(n)
//     })
//     let s = ''
//     for (let i = myArr.length; i--; i > 0) {
//         s += myArr[i]
//     }
//     return s;
// }
//
// console.log(reverse(12345))

//2
function IsPalindrome (n) {
    if (typeof n !== 'string') {return 'ERROR'}
    if (n.length < 2) {return 'YES'}
    let temp = n.length - 1, index = 0;
    for (let i = 0; i < n.length / 2; i++) {
        index = i + temp
        if (n[i] !== n[index]) return 'NO'
        temp -= 2
    }
    return 'YES'
}

console.log(palindrome('mabam')) //yes
console.log(palindrome('maabcaam')) //no
console.log(palindrome(123)) //error
console.log(palindrome('a')) //yes

//3
// const gcd = (a, b) => {
//     if ( ! b) return a;
//     return gcd(b, a % b);
// }
//
// console.log(gcd(12, 20));
//
// //4
// const sum = arr =>{
//     let temp = 0
//     for (let i of arr) temp+=i
//     return temp
// }
// const myArr = [1, 2, 3, 4, 5, 6]
// console.log(sum(myArr))
//
// //5
// function Logarithm (n,base) {
//    if ( n <= base ) return 1
//    else {
//         return  Logarithm( n/base , base )+1
//    }
// }
//
// console.log(Logarithm(64,4))
//
// //6
// function fibonacci(n) {
//     if (n < 2)  return 1
//     else return fibonacci(n-2) + fibonacci(n-1)
// }
//
// console.log(fibonacci(7))
//
// //7
// const oddEven = () => {
//     for (let i=0;i<16;i++){
//         if (i%2 === 0) console.log( `${i} is even`)
//         else console.log(`${i} is odd`)
//     }
// }
// oddEven()
//
// //8
// const Triangle = n => {
//     for ( let i=1 ; i <= n ; i++ )
//         console.log('*'.repeat(i))
// }
// Triangle(5)
//
// //9
// const arrToString = arr => { return arr.join('+') }
// const myArr = ["Red", "Green", "White", "Black"]
// console.log(arrToString(myArr))
//
// //10
// function dash (n) {
//     const str = n.toString()
//     const result = [str[0]]
//     for(let x=1; x<str.length; x++) {
//         if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//             result.push('-', str[x]);
//         else
//             result.push(str[x]);
//     }
//     return result.join('');
// }
//
// console.log(dash(025468))

