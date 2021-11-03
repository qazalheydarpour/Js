function power(p,n){
    n = n * 2
    p--
    p>1 ? power (p,n) : console.log(n)
}

power(3,2)