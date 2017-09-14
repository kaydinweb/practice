
document.addEventListener('DOMContentLoaded', function(){

// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });

// var titles = document.getElementsByClassName('title');

// // console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

//------------------------------------------------------------------------------
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
// console.log(books);

books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(book){
  book.textContent += '(book title)';
});

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML += "<h2>This is how add HTML</h2>";

var h2 = document.querySelectorAll('h2');
// console.log(h2);

Array.from(h2).forEach(function(h2){
  // console.log(h2.textContent);
})
//-------------------------------------------------------------------------------
const banner = document.querySelector("#page-banner");

// console.log("#page-banner node type is:", banner.nodeType);
// console.log("#page-banner node name is:", banner.nodeName);
// console.log("#page-banner has child nodes:", banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent parent element is:', bookList.parentElement.parentElement);

// console.log(bookList.childNodes);

// console.log(bookList.children);

// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next element sibling is:', bookList.nextElementSibling);
// console.log('book-list previous sibling element is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML += "<br/>Too cool";



const id = document.querySelector("#wrapper");
// id.nextElementSibling.querySelector("").innerHTML += "<h1>Wassup</h1>";

id.children[1].previousElementSibling.querySelector('h1').innerHTML += '<h1>Wassup</h1>';

//-----------------------------------------------------------------------------------



const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('navigation to', e.target.textContent, 'was prevented');
});


//-----------------------------------------------------------------------------
// DELETE BOOKS
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){

    const li = e.target.parentElement;
    li.parentNode.removeChild(li);

  })
});

//---------------------------ADD BOOK------------------------------------------
//add Event Listener to submit intput value
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  
  //create Element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add Content 
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  // add Class Name
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to Document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

});

//-----------------------------------------------------------------------------------


//=================================== HIDE BOOKS CHECKBOX ============================

const hideBox = document.querySelector('#hide');
if (hideBox){
  hideBox.addEventListener('change', function(r){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
 })
}

//====================================================================================

//====================================== FILTER BOOK =================================  

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  })
})

//=====================================================================================

//==================================== TABBED CONTENT =================================

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
  if(e.target.tagName == "LI"){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function(panel){
      if(panel == targetPanel){
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    })
  }
});


});