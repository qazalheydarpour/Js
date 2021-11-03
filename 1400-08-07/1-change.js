function change(n,x,y,z,a,b,c){
    let temp = 0 ;
    for (let x1 = 0 ; x1 <= x ; x1++){
        for (let y1 = 0 ; y1 <= y ; y1++){
            for (let z1 = 0 ; z1 <= z ; z1++){
                if (x1*a + y1*b + z1*c === n ) temp++
            }
        }
    }
    return temp
}

// let n = 100000
// let x = 2 , y = 1 , z = 1
// let a = 50000 , b = 70000 , c = 30000
// console.log(change(n,x,y,z,a,b,c))

let n = 60000
let x = 3 , y = 3 , z = 3
let a = 30000 , b = 20000 , c = 30000
console.log(change(n,x,y,z,a,b,c))