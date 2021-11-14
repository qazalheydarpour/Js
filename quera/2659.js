const eye = (n,str1,str2) => {
    let fault= 0
    for ( let i = 0 ; i < n ; i++ ) {
        if (str1[i] !== str2[i]) fault++
    }
    return fault
}
console.log(eye(3,'ABC','aBD')) //2
console.log(eye(21,'MASIOJESTDYSLEKTYKIEM','MAsIOJSSTDXSIEKTYKLEM')) //5

