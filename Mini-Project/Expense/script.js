function addExpense() {

    var addName = document.getElementById('name').value;
    var addDate = document.getElementById('date').value;
    var addAmount = document.getElementById('amount').value;


    // making sure no fields are empty
    if (addName === '' || addDate === '' || addAmount === '') {
        alert('You have to input all fields.');
    } else { 
        var table = document.getElementById('expenseTable');
        var row = table.insertRow(1);
    
        var expenseName = row.insertCell(0);
        var expenseDate = row.insertCell(1);
        var expenseAmount = row.insertCell(2);
        var removeButton = row.insertCell(3);

        expenseName.innerHTML = addName;
        expenseDate.innerHTML = addDate;
        expenseAmount.innerHTML = '$' + addAmount;
        // removeButton.innerHTML = '<button onclick="removeRow()" class="removeRow">x</button>'
        removeButton.innerHTML = '<button class="removeButton">x</button>'

    }
    var addName = document.getElementById('name').value = '';
    var addDate = document.getElementById('date').value = '';
    var addAmount = document.getElementById('amount').value = '';
    
    var removeRow = document.getElementsByClassName('removeButton');
    // var i;
    for (i=0; i < removeRow.length; i++) {
        removeRow[i].onclick = function removeItem() {
            var deleteRow = this.closest('tr');
            deleteRow.remove();
        }
    }


}


