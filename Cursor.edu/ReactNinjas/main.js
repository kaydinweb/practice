var list = document.getElementById('List');
var li = list.getElementsByTagName('li');
var closeButtons = document.getElementsByClassName('close');


    for (var i = 0; i < li.length; i++) {
        var button = renderCloseButton();
        li[i].appendChild(button);
    }

    for (var j = 0; j < closeButtons.length; j++) {
        closeButtons[j].onclick = onCloseButtonClick;
    }

    list.addEventListener('click', function (event) {
        if(event.target.tagName === 'LI'){
            event.target.classList.toggle('checked');
        }
    }, false);


function onCloseButtonClick() {
    var button = this;
    var parent = button.parentElement;
    parent.style.display = 'none';

};

function renderCloseButton(){
    var button = document.createElement('button');
    var cross = document.createTextNode('\u00D7');
    button.className = 'close';
    button.appendChild(cross);
    return button;
};



function addNewTask() {
    var li = document.createElement('li');
    var input = document.getElementById('Input');
    var inputValue = input.value;
    var text = document.createTextNode(inputValue);

    li.appendChild(text);
    var button = renderCloseButton();
    button.onclick = onCloseButtonClick;
    li.appendChild(button);
    // var list = document.getElementById("List");
    list.appendChild(li);
}