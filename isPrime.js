function isPrime (n) {
    for (let i=2 ; i < n ; i++){
        if ( n % i === 0) return false;
    }
    return true;
}

function main (a , b) {
    for ( let i = a + 1 ; i < b ; i++){
        if (isPrime(i) !== false ) console.log(i);
    }
}

main(4,10)
main(11,20);