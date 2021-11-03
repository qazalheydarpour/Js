


function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function countNum (myList){
    myList.map( n => { if (Number.isInteger(n)) {
        console.log(n)
    } else if (typeof (n) !== 'string' && !isFloat(n)){
        countNum(n)
    }
    })
}

let myList = [[[5],3],0,2,['foo'],[],[4,[5.1,6]]]
countNum(myList)
