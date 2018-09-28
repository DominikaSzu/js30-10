const box = document.querySelector('.box');
const inputs = Array.from(box.querySelectorAll('input'));
let lastChecked;
//let secondChecked;

function checkControl(e) {
    if (e.shiftKey && this.checked) {
        console.log('jaaa')
    }
    
    lastChecked = this;
}


inputs.forEach(input => input.addEventListener('click', checkControl)); 