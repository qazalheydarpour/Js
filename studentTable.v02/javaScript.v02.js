function creatStudent (id,fName,lName){
    this.id = id;
    this.fName = fName;
    this.lName = lName;
}
let student = [] ;
function getID (){
    return document.getElementById("id").value
}
function getFName (){
    return document.getElementById("fName").value
}
function getLName (){
    return document.getElementById("lName").value
}
function cleanTable (){
    document.getElementById('table').innerHTML=''
    document.getElementById('table').innerHTML=`
    <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>`
}
function render (){
    cleanTable()
    let table = document.getElementById('table')

    student.forEach((student) => {

        let newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);

        cell1.innerHTML = student.id
        cell2.innerHTML = student.fName
        cell3.innerHTML = student.lName
    });
    console.log(student)
}

function add ( ){
    let id = getID(),
        fName = getFName(),
        lName = getLName();

    student.push(new this.creatStudent(id,fName,lName))
    render()
}


function removeStudent (){
    let id = getID()
    student = student.filter((student) => student.id !== id);
    render()
}


function updateStudent (){
    let id = getID(),
        fName = getFName(),
        lName = getLName();

    student.map( x => {
        if (x.id === id) {
            x.fName = fName
            x.lName = lName
        }
    })
    render()
}

