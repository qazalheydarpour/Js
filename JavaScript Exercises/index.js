function IsPalindrome(n){
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

console.log(IsPalindrome('mabam')) //yes
console.log(IsPalindrome('maabcaam')) //no
console.log(IsPalindrome(123)) //error
console.log(IsPalindrome('a')) //yes
