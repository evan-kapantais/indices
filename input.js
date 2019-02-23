document.getElementById('button').addEventListener('click', handleInput);

var tabsContent = document.getElementsByClassName('tab-pane');
var navLinks = document.getElementsByClassName('nav-link');


function validateInput() {
    var input = document.getElementById('input').value;

    if (input < 1 || input > 3) {
        alert("Please enter a value between 1 and 3.");
        document.getElementById('input').value = "";
    }
    return;
}


function handleInput() {

    validateInput();

    var input = document.getElementById('input').value;
    for (var i = 0; i < tabsContent.length; ++i) {
        tabsContent[i].classList.remove('active');
        tabsContent[i].classList.remove('show');
        navLinks[i].classList.remove('active');
    }

    navLinks[input-1].classList.add('active');
    tabsContent[input-1].classList.add('show');
    tabsContent[input-1].classList.add('active');
}