console.log('NotesApp')
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function (e) {
    var addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
}
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt = '';

    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes==null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button onclick="deleteItem(${index})" class="btn btn-primary">Delete Note</button0>
                </div>
                </div>;`
    });
    let notesElm = document.getElementById('notes');
    //console.log(notesElm.length)
    if (notesObj.length !=0){
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerText = 'Please Enter your notes and press the button to save the info';
    }
    text = document.getElementById('addTxt')
    text.value = ' ';
}
function deleteItem(index) {
    console.log('I m deleting it!');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('search');
/*search.addEventListener('input', function () {
   let inputVal = search.value.toLowerCase();
   let notecard = document.getElementById('notecard');
   Array.from(notecard).forEach(function (element) {
       
   });
});*/