function repetitive (arr){
    let temp='';
    for (let i=0 ;i<arr.length;i++){
        if(arr[i] !== arr[i+1]) {
            temp += arr[i]
        }
    }
    return temp;
}

const arr= 'aaaaaaaaabbbbbbbcdde';
console.log(repetitive(arr))