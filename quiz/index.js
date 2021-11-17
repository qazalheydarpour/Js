// const nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo'
//                     }
//                 }
//             }
//         }
//     }
// }
// function recursiveSearch (obj, searchKey, results = []) {
//     const r = results;
//     Object.keys(obj).forEach(key => {
//         const value = obj[key];
//         if(key === searchKey && typeof value !== 'object'){
//             r.push(value);
//         }else if(typeof value === 'object'){
//             recursiveSearch(value, searchKey, r);
//         }
//     });
//     if (r) return [true,r]
// };
// console.log(recursiveSearch(nestedObject, 'sh'));

// function addToObj (obj,key,value){
//     obj['key'] = 'value';
//     return obj
// }
// const obj = {age : 13}
// console.log(addToObj(obj,'name','qazal'))

function shift (n,i){
    i === 0  ? console.log(n) : shift(n/2,i-1)
}

shift(80,3)

