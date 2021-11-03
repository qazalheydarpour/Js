function goal (a,b,string){
    let half1 = 45+a ;
    let half2 = 90+b;
    for (let i=0 ; i< string.length ; i++){
        if ( string[i] > half1){
            if( string[i] > string[i+1]) return 'NO'
            if ( string[i] > half2) return 'NO'
        }
    }
    return 'YES'
}

//let a = 3 , b = 2 , string = [4,47,45,80,91]  //YES
//let a = 2 , b = 4 , string = [4,45,48,93] //YES
//let a = 2 , b = 2 , string = [4,48,45,80] //NO
let a = 3 , b = 2 , string = [8,48,45,70,81,94]  //NO

console.log(goal(a,b,string))