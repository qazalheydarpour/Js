isHamnehehst = (a,b) => {
    const arr = [];
    for (let i = 1 ; i < b ; i++){
        if ( a%i === b%i) arr.push(i)
    }
    return arr ;
}

console.log(isHamnehehst(1,25))