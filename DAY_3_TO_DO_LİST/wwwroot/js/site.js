// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//const a = document.querySelector('.myInput').value;
////var a = document.getElementById('myInput').value;
//console.log(a);
//const b = document.querySelector('.YEL_R').value;
//console.log(b);
////// document.getElementsByClass(b).append(a);
////b = a;
////console.log(b);
////b.textContent = a;
//const items = JSON.parse(localStorage.getItem('items')) || [];

//function send(e) {


//    e.preventDefault(); //It serves to prevent the default operation of the relevant element by the browser at that moment.
//    const text = (this.querySelector(a)).value;
//    const item = {
//        text,
//        done: false,
//    };
//    items.push(item);
//    populateList(items, itemsList);
//    localStorage.setItem('items', JSON.stringify(items)); // (key and value) when it adds the new value , it adds it to localStorage.
//    this.reset();

//    }
const addItems = document.querySelector('.add-items').value;
console.log(addItems);
const itemsList = document.querySelector('.YEL_R');
console.log(itemsList);
const items = [];
var j;
var generateId;
generateId.counter = 0;
var id = generateId();

function addItem() {
    const text = document.querySelector('[name=myInput]').value;
    console.log(text);
    const item = { text };
    items.push(item);
    populateList(items, itemsList);
    }



function populateList(notes = [], notesList) {
    
    notesList.innerHTML = notes.map((note, i) => {
        return `
      <li class="YEL_R" id="has${i}" style="z-index:11; position:relative; left:20px;">
        <label for="item${i}">${note.text}</label>
        <input type="button" onclick="line(${i})" id="item${i}"/>
      </li>
      `;
    }).join('');
    
   
}

function generateId() {
    return 'GENERATED_ID_' + (++generateId.counter);
}

function line(e) {
    var i = e;
    console.log(i);
    document.getElementById("has"+i).style.display = "none";

}


//addItems.addEventListener('button', addItem);
populateList(items, itemsList);
