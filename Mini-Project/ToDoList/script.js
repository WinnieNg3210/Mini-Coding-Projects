// To-Do List:

function addItem() {
    var LI = document.createElement('li');
    var addList = document.getElementById("addInput").value;
    var t = document.createTextNode(addList);
    LI.appendChild(t);

    if (addList === '') {
        alert ("You must write something");
    } else {
        document.getElementById('to-do-list').appendChild(LI);
    }
    document.getElementById('addInput').value = ''; //this resets the input field

    var BUTTON = document.createElement('button');
    var deleteButton = document.createTextNode("x");
    BUTTON.className = "removeItem";
    // BUTTON.onclick = "removeItem()";
    BUTTON.appendChild(deleteButton);
    LI.appendChild(BUTTON);

    var checkList = document.createElement('button');
    var checkButton = document.createTextNode("check");
    checkList.className = "checkItem";
    checkList.appendChild(checkButton);
    LI.appendChild(checkList);

    // try to find another way by using a direct function as oppose to below:
    var removeItem = document.getElementsByClassName('removeItem');
    // var i;
    for (i=0; i < removeItem.length; i++) {
        removeItem[i].onclick = function removeItem() {
            var hideList = this.parentElement;
            hideList.style.display = "none";
        }
    }

    var checkItem = document.getElementsByClassName('checkItem');
    // var i;
    for(i=0; i < checkItem.length; i++) {
        checkItem[i].onclick = function checkItem() {
            var crossList = this.parentElement;
            crossList.style.textDecoration = "line-through";
        }
    }

}

function clearAll() {
    document.getElementById('to-do-list').remove();
    
}




