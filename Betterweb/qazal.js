// 1
function palindrome(n) {
    if (typeof n !== 'string') return 'ERROR'
    if (n.length < 2) return 'YES'
    let temp = n.length - 1, index = 0;
    for (let i = 0; i < n.length / 2; i++) {
        index = i + temp
        if (n[i] !== n[index]) return 'NO'
        temp -= 2
    }
    return 'YES'
}

console.log(palindrome('mabam')) //yes
console.log(palindrome('maabcaam')) //no
console.log(palindrome(123)) //error
console.log(palindrome('a')) //yes

// 2
function Logarithm (n,base) {
    if ( n <= base ) return 1
    else {
        return  Logarithm( n/base , base )+1
    }
}

console.log(Logarithm(64,4))


