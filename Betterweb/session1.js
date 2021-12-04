//14
// const arr = ['sib','samano','senjed','sabze','sir','sekke','senjed']
// function msin (n,arr) {
//     for ( let i = 0 ; i < n ; i ++) console.log(arr[i])
// }
//
// msin(4,arr)

//15
// function fisaghores (x,y,z) {
//     let a = x*x , b = y*y , c = z*z
//     if ( a === b + c) return 'YES'
//     else if ( b === a + c) return 'YES'
//     else if ( c === a + b) return 'YES'
//     else return 'NO'
// }
//
// console.log(fisaghores(3,4,5)) //yes
// console.log(fisaghores(8,7,10)) //no

//16
// function countAr (a,b,l) {
//     for ( let i = 1 ; i <= l ; i ++){
//         if ( l === i+i-1 ) return a*i + b*(i-1)
//         if ( l === i+i ) return a*i + b*i
//     }
// }
//
// console.log(countAr(1,1,1)) //1
// console.log(countAr(3,4,5)) //17
// console.log(countAr(10,3,2)) //13

//17

// const eye = (n,str1,str2) => {
//     let fault= 0
//     for ( let i = 0 ; i < n ; i++ ) {
//         if (str1[i] !== str2[i]) fault++
//     }
//     return fault
// }
// console.log(eye(3,'ABC','aBD')) //2
// console.log(eye(21,'MASIOJESTDYSLEKTYKIEM','MAsIOJSSTDXSIEKTYKLEM')) //5


//18
// function quiz (arr){
//     let sub1 = 'MOLANA' , sub2 = 'HAFEZ' , output = []
//     for ( let i = 0 ; i < arr.length ; i ++ ){
//         if (arr[i].includes(sub1) || arr[i].includes(sub2)) output.push(i+1)
//     }
//     if (output.length > 0) return output
//     else return 'NOT FOUND'
// }
// const myArr = ['N-MOLANA1','9A-UKOK','SAYE-NTERP','G-SANAEI','RF-MOLLASADRA']
// console.log(quiz(myArr))
// const myArr1 = ['N321-HAFEEZ','F3-B12I', 'F-BI-12','OVO-JE-FE','KASHANI' ]
// console.log(quiz(myArr1))

