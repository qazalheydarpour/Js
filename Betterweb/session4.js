//44
// function count(string) {
//     return string.split("").reduce((a, letter) => {
//         a[letter] = (a[letter] || 0) + 1;
//         return a;
//     }, {});
// }
// console.log(count("hello world"));
//45
function traveler (m,n){
    let temp = 0  ;
    for (let i=0;i<=m;i++){
        for (let j=0;j<=m;j++){
            if (i+j === m+n){
                temp++
                console.log(`${i}R+${j}L`)
            }
        }
    }
    return temp
}
//
console.log(traveler(20,10))