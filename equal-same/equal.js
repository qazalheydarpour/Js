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
const obj3 = {
    key0 : false,
    key1 : 'vall',
    key2 : 20,
    key3 : [0,1,2],
}
const obj4 = {
    key0 : true,
    key1 : 32,
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name : 'ali' }
}

function isEqual(obj1, obj2) {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length != props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i++) {
        let val1 = obj1[props1[i]];
        let val2 = obj2[props1[i]];
        let isObjects = isObject(val1) && isObject(val2);

        if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

console.log(isEqual( obj1 , obj2 )); // true
console.log(isEqual( obj1 , obj3 )); // false
console.log(isEqual( obj1 , obj4 )); // false