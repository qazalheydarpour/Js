function index (index,offset,arr){
    const temp = arr[index]
    if (offset>0){
        for (let i = 1 ; i <= offset ; i++ ) arr[index+(i-1)] = arr[index+i]
    }else {
        for (let i = -1 ; i >= offset ; i-- ) arr[index+(i+1)] = arr[index+i]
    }
    arr[index+offset] = temp
    return arr
}

const arr = [1,2,3,4,5]
//console.log(index(1,2,arr))
console.log(index(3,-2,arr))

