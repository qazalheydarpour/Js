function print(num){
    const myArr = String(num).split("").map((num)=>{
        return Number(num)
    })
    for (let i=0 ; i<myArr.length;i++){
        let s = ''
        s = myArr[i] + ':'
        for(let j=0 ; j < myArr[i]; j++ ){
            s += myArr[i]
        }
        console.log(s)
    }

}


print(345)