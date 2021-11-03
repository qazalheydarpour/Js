function occurrences1(arr){
    let obj = {}
    for (let i of arr) {
        if (i in obj) obj[i]++ ;
        else obj[i] = 1 ;
        //console.log(obj)
    }
    console.log(typeof obj)
    return obj

}
// ....................................

const getOccurrences = (arr) => {
   return  arr.reduce((prev,current) => {
        if (!prev[current]) {
            prev[current] = 1 ;
        } else {
            prev[current] ++
        }
        return prev
    },{})
}
const getOccurrences1 = (arr) => {
    return arr.reduce((prev,current) => {
        prev[current] = !prev[current] ? 1 : prev[current]++
        //or prev[current] = ( prev[current] || 0 ) + 1
        return prev
    },{})
}
const arr1 = [1,2,4,1,1,1,1,8,2,3,3,2,4]


//console.log(occurrences1(arr1))
//console.log(getOccurrences(arr1))
//console.log(getOccurrences1(arr1))



// .........................................

// const arr2 = [1,2,4,1,1,1,1,5,2,3,3,2,4]
// const two = arr2.filter(x => x === 2 ).length
// // .reduce((total,x) => (x==2 ? total+1 : total), 0)
// console.log(two)
//
