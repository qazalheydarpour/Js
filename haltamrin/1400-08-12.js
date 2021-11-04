//(1)
// function code1 (n){
//     string = ['a','e','i','o','u']
//     for (let i=0 ; i<string.length ; i++){
//         if ( n.charCodeAt(0) <= string[i].charCodeAt(0) ) return string[i]
//     }
// }
//
// console.log(code1('a'))

// (2) امتیازی
const objArr = [
    {id: 1,name: 'ali'},
    {id: 2,name: 'reza'},
    {id: 2,name: 'rose'},
    {id: 1,name: 'sara'},
]
const sort = objArr.map( n => {
    for(let i=0 ; i<objArr.length/2 ; i++){
        if(n.id === objArr[i].id && n.name !== objArr[i].name ){
            console.log('id ',n.id,':',[n,objArr[i]])
        }
    }
})
console.log(sort)


//(3)
// function zero (arr){
//     let temp = 0
//     arr.map ( n =>{ if (n===0) temp++})
//     const filterList = arr.filter(value => value>0)
//     for(let i = 0 ; i<temp ; i++)  filterList.push(0)
//     console.log(filterList)
// }
// const arr = [1,0,3,4,70,9,0,0,0,3,4]
// zero(arr)
// ....................................................
// function arraySort(myArr) {
//     for (let i = 0; i < myArr.length; i++) {
//         let index = myArr.indexOf(0);
//         myArr.splice(index, 1);
//         myArr.push(0);
//     }
//     return myArr;
// }

//(4)
