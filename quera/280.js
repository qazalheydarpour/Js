function fisaghores (x,y,z) {
    let a = x*x , b = y*y , c = z*z
    if ( a === b + c) return 'YES'
    else if ( b === a + c) return 'YES'
    else if ( c === a + b) return 'YES'
    else return 'NO'
}

console.log(fisaghores(3,4,5)) //yes
console.log(fisaghores(8,7,10)) //no