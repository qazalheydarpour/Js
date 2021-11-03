function square (n){
    let s ;
    for (let i=0;i<n;i++) {
        s = ''
        if (i===0 || i===n-1){
            s += '*'.repeat(n)
            console.log(s)
        }else {
            s += '*' + ' '.repeat(n-2)+'*'
            console.log(s)
        }
    }
}


square(5);