function countAr (a,b,l) {
    for ( let i = 1 ; i <= l ; i ++){
        if ( l === i+i-1 ) return a*i + b*(i-1)
        if ( l === i+i ) return a*i + b*i
    }
}

console.log(countAr(1,1,1)) //1
console.log(countAr(3,4,5)) //17
console.log(countAr(10,3,2)) //13