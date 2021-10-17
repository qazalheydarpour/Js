function complete (n){
    let temp = 0;
    for (let i=1; i<n ; i++){
        if (n % i === 0) temp += i ;
    }
    if (temp === n ) return 'YES'
    else return 'NO'
}

console.log(complete(6))
console.log(complete(27))