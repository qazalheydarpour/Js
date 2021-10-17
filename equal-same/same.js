const obj1 = {
    key0 : false,
    key1 : 'vall',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name : 'ali' }
}
const obj2 = {
    key0 : false,
    key1 : 'vall',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name : 'ali' }
}
const obj3 = obj1

console.log(obj1 === obj2 ) //false
console.log(obj1 === obj3 ) //true
