function quiz (arr){
    let sub1 = 'MOLANA' , sub2 = 'HAFEZ' , output = []
    for ( let i = 0 ; i < arr.length ; i ++ ){
        if (arr[i].includes(sub1) || arr[i].includes(sub2)) output.push(i+1)
    }
    if (output.length > 0) return output
    else return 'NOT FOUND'
}
const myArr = ['N-MOLANA1','9A-UKOK','SAYE-NTERP','G-SANAEI','RF-MOLLASADRA']
console.log(quiz(myArr))
const myArr1 = ['N321-HAFEEZ','F3-B12I', 'F-BI-12','OVO-JE-FE','KASHANI' ]
console.log(quiz(myArr1))


