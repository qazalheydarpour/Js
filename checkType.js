function checkType(a){
    if (typeof  a == 'string') return 'True';
    else return 'False'
}

console.log(checkType('hello'));
console.log(checkType(23));