function addNote() {
    var DIV = document.createElement('div');
    DIV.className = 'note';

    var H6 = document.createElement('h6');
    var note = document.createTextNode('Note ');
    H6.appendChild(note);
    DIV.appendChild(H6);

    var textP = document.createElement('p');
    textP.className = 'text';
    var textNote = document.getElementById('inputText').value;
    var t = document.createTextNode(textNote);
    textP.appendChild(t);
    DIV.appendChild(textP);

    var Button_view = document.createElement('button');
    Button_view.className = 'btn btn-info btn-sm view';
    // Button_view.onclick = "viewNote()";
    var viewNote = document.createTextNode('View Detail');
    Button_view.appendChild(viewNote);
    DIV.appendChild(Button_view);

    var Button_delete = document.createElement('button');
    Button_delete.className = 'btn btn-danger btn-sm delete';
    // Button_delete.onclick= "deleteNote()";
    var deleteNote = document.createTextNode('Delete');
    Button_delete.appendChild(deleteNote);
    DIV.appendChild(Button_delete);

    /* Modal Content */ 

    var divModal = document.createElement('div');
    divModal.className = 'modal-content';

    var SPAN = document.createElement('span');
    SPAN.className = 'close';
    SPAN.innerHTML = '&times;';
    divModal.appendChild(SPAN);

    var p = document.createElement('p');
    p.className = 'modalText';
    var modalP = document.getElementById('inputText').value;
    var mP = document.createTextNode(modalP);
    p.appendChild(mP);
    divModal.appendChild(p);
    DIV.appendChild(divModal);

    /* End of Modal-Content */

    if (textNote === "") {
        alert('You must write something');
    } else {
        document.getElementById('note-list').appendChild(DIV);
    }

    document.getElementById('inputText').value = '';

    
    var removeNote = document.getElementsByClassName('delete');
    for (i=0; i < removeNote.length; i++) {
        removeNote[i].onclick = function removeNote() {
            var deleteNote = this.closest('div');
            deleteNote.remove();
        }
    }

    var modal = document.getElementsByClassName('view');
    for (i=0; i < modal.length; i++) {
        modal[i].onclick = function viewModal() {
            var content = this.closest('div');
            content.children[4].style.display = 'block';

            span = content.children[4].children[0];
            span.onclick = function() {
                content.children[4].style.display = 'none';
            }
        } 

    }
    
    
}
