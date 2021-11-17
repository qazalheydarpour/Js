//........1
function polindrom(x) {
    const len = x.length;

    for (let i = 0; i < len / 2; i++) {

        if (x[i] !== x[len - 1 - i]) {
            return 'NO';
        }
    }
    return 'Yes';
}
console.log(polindrom('abba'));

//.......2

// var n = window. prompt("number??:");
// var base = window. prompt("base??:");
// let n = window. prompt("number??:");
// let base = window. prompt("base??:");


function Log(n,base) {
    // if (base<0 || base==1) {
    if (base<0 || base===1) {
        return "base is not valid !"
    }

    // let output=  Math.log(n)/Math.log(base);
    // return output;
    return  Math.log(n)/Math.log(base);
}
console.log(Log(16,4));