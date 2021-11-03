function sub (arr1,arr2){
    for ( let i in arr1){
        if (arr2.includes(arr1[i])){
            arr1[i] = ''
        }
    }

    return arr1.filter(Number);
}

const arr1 = [1,2,3,4]
const arr2 = [2,3]
console.log(sub(arr1,arr2)) 