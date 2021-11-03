
function swap (str){
    if (str.length > 1) {return  newString =  str[str.length-1] + str.slice(0, str.length-1);}
}

function code(str,k) {
    let newString = swap(str);
    let s =''
    for (let i = 0 ; i < newString.length ; i ++){
        if (newString[i] === 'z'){ s+= 'a' }
        else {
            let j = newString[i].charCodeAt(0)
            j++
            s += String.fromCharCode(j)
        }
    }
    k--;
    console.log(s)
    if (k > 0) code(s,k)
}


// code("abz",1);
code("abcd",5);

