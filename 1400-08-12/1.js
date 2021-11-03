const obj = {
    d:{
        c:{
            b:{
                a:{
                    number : 20,
                    str : 'hi'
                }
            }
        }
    }
}
const recursiveSearch = (obj, searchKey, results = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if(key === searchKey && typeof value !== 'object'){
            r.push(value);
        }else if(typeof value === 'object'){
            recursiveSearch(value, searchKey, r);
        }
    });
    return r;
};
console.log(recursiveSearch(obj, 'number'));