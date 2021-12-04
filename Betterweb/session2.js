// function sumArr (arr1,arr2){
//     let arr3= [ ];
//     if(arr1.length > arr2.length){
//         for (let i=0 ; i<arr1.length;i++)
//             if (arr2[i] !== undefined) arr3.push(arr1[i]+arr2[i])
//         else arr3.push(arr1[i])
//     }else {
//         for (let i=0 ; i<arr2.length;i++)
//             if (arr1[i] !== undefined) arr3.push(arr1[i]+arr2[i])
//     else arr3.push(arr2[i])
//     }
//     return arr3
// }
// let arr1=[1,2,3,4]
// let arr2=[1,2,3,4,4,6,8]
// console.log(sumArr(arr1,arr2))

function Digit (n){
    let number = n.toString()
    let  yekan = number[number.length-1]
    if (yekan === 1) return n+'st'
    if(yekan === 2) return n+'nd'
    else return n+'th'
}

console.log(Digit(1))
console.log(Digit(20))
console.log(Digit(302))