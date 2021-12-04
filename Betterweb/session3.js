//25
// function lessThanAvg (arr){
//     const avg = arr.reduce((a,b) => a + b, 0) / arr.length;
//     let result = arr.filter(x => x<avg)
//     return result.length
// }
// const arr = [3,1,2]
// console.log(lessThanAvg(arr))
//26
// function counter(str,char){
//     return str.split('').filter(x=>x===char).length
// }
// let str='hellllo'
// console.log(counter(str,'l'))
//29
// function makeArr(start,length){
//     let arr=[]
//     while(length>0){
//         arr.push(start)
//         start++
//         length--
//     }
//     return arr
// }
// console.log(makeArr(1,4))
//30
// const subStr = str =>{
//     let result = []
//     for (let i=0;i<str.length;i++){
//         for (let j=1;j<=str.length;j++){
//             result.push(str.slice(i,j))
//         }
//     }
//     return result.filter(x=>x.length>0)
// }
// console.log(subStr('ali'))
//31
// const Range = (x,y)=>{
//     let arr=[]
//     while (x<y-1){
//         x++
//         arr.push(x)
//     }return arr
// }
// console.log(Range(2,9))
//32
// const reverseNum = n=>{
//     n =  n.toString().split('')
//     let reverseArr = []
//     for (let i=n.length-1 ; i>=0;i--) reverseArr.push(n[i])
//     return reverseArr.join('')
// }
// console.log(reverseNum(12345))
//33
// const sumArr = arr =>{
//     return arr.reduce((a,b)=> a+b)
// }
// console.log(sumArr([1,2,3]))
//34
// function Logarithm (n,base) {
//    if ( n <= base ) return 1
//    else {
//         return  Logarithm( n/base , base )+1
//    }
// }
// console.log(Logarithm(64,4))
//35
// const oddEven = () => {
//     for (let i=0;i<16;i++){
//         if (i%2 === 0) console.log( `${i} is even`)
//         else console.log(`${i} is odd`)
//     }
// }
// oddEven()
//36
// const Triangle = n => {
//     for ( let i=1 ; i <= n ; i++ )
//         console.log('*'.repeat(i))
// }
// Triangle(5)
//37
// const arrToString = arr => { return arr.join(' ') }
// const myArr = ["Red", "Green", "White", "Black"]
// console.log(arrToString(myArr))

// const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;
// for (let i=0; i<arr1.length; i++)
// {
//     for (let j=i; j<arr1.length; j++)
//     {
//         if (arr1[i] === arr1[j])
//             m++;
//         if (mf<m)
//         {
//             mf=m;
//             item = arr1[i];
//         }
//     }
//     m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;