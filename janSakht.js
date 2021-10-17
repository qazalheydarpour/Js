function isPrime (n) {
    for (let i=2 ; i < n ; i++){
        if ( n % i === 0) return false;
    }
    return true;
}


function isHard (i) {
    let temp = i;
    while (isPrime(temp)){
        temp=(temp-temp%10)/10
        if (temp<=10){
            if (isPrime(temp)) return true;
        }
    }
    return false

}

function main (n) {
    for (let i = 10**(n-1) ; i<10**(n) ;i++ ){
        if (isHard(i)) console.log(i);
    }
}

main(3);
