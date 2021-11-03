function subdivision (string,substring) {
    if (string.indexOf(substring) !== -1) return string.indexOf(substring)
    else return 'not subdivision'
}


let newString = "foo";
let substring = "oo";
console.log(subdivision(newString,substring));