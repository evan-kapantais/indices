document.getElementById('button').addEventListener('click', handleInput);
var tabsContent = document.getElementsByClassName('tab-pane');
var navLinks = document.getElementsByClassName('nav-link');

function resetActiveStatus() {
    tabsContent.forEach(function(item){
        item.classList.remove('active');
    });
    navLinks.forEach(function(item){
        item.classList.remove('active');
    });
}

function handleInput() {
    var value = document.getElementById('input').value;
    
    if (value > 3 || value < 1) {
        alert('Please enter a value from 1 to 3.');
    }

    resetActiveStatus();

    navLinks[value - 1].classList.add('active');
}