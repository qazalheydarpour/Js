let rIndex,
    table = document.getElementById("table");
function checkEmptyInput()
{
    let isEmpty = false,
        id = document.getElementById("id").value,
        fname = document.getElementById("fName").value,
        lname = document.getElementById("lName").value,
        age = document.getElementById("Age").value;

    if(id === ""){
        alert("id Connot Be Empty");
        isEmpty = true;
    }
    if(fname === ""){
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if(lname === ""){
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    else if(age === ""){
        alert("Age Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}
function addHTMLTableRow () {
     let newRow = table.insertRow(table.length),
     cell1 = newRow.insertCell(0),
     cell2 = newRow.insertCell(1),
     cell3 = newRow.insertCell(2),
     cell4 = newRow.insertCell(3);

    cell1.innerHTML = document.getElementById('id').value,
    cell2.innerHTML = document.getElementById('fName').value,
    cell3.innerHTML = document.getElementById('lName').value,
    cell4.innerHTML = document.getElementById('Age').value;


    selectedRowToInput () ;
}
function selectedRowToInput () {
    for (let i=1 ; i < table.rows.length ; i++){
        table.rows[i].onclick = function (){
            rIndex=this.rowIndex;
            document.getElementById('id').value = this.cells[0].innerHTML
            document.getElementById('fName').value = this.cells[1].innerHTML
            document.getElementById('lName').value = this.cells[2].innerHTML
            document.getElementById('Age').value = this.cells[3].innerHTML
        }
    }
}
selectedRowToInput ();

 function editHtml(){
     if(!checkEmptyInput()) {
         table.rows[rIndex].cells[0].innerHTML = document.getElementById('id').value
         table.rows[rIndex].cells[1].innerHTML = document.getElementById('fName').value
         table.rows[rIndex].cells[2].innerHTML = document.getElementById('lName').value
         table.rows[rIndex].cells[3].innerHTML = document.getElementById('Age').value
     }
 }
function removeSelectedRow()
{
    table.deleteRow(rIndex);
    document.getElementById("id").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("Age").value = "";
}