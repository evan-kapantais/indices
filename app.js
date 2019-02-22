var tabContent = document.getElementsByClassName('tabcontent');

for (var i = 0; i < tabContent.length; ++i) {
    tabContent[i].style.display = 'none';
}

document.getElementById('button').addEventListener('click', switchTab);


function resetTabs() {
    var tabsList = document.getElementsByClassName('nav-link');

    tabsList.forEach(function(item){
        item.classList.remove('active');
    });
}

function switchTab() {
    var input = 0;
    
    input = document.getElementById('input').value;

    if (input < 0 || input > 3) {
        alert('Please enter a number from 1 to 3.');
    }

    if (input == 1) {
        
    }
}