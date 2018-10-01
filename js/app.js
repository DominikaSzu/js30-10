const box = document.querySelector('.box');
const inputs = Array.from(box.querySelectorAll('input'));
let lastChecked;

function checkControl (e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        inputs.forEach(input => {
            if (input === lastChecked || input === this) {
                inBetween = !inBetween;
            }
            
            if (inBetween) {
                input.setAttribute('checked', 'true')
            }
        })
    }
    
    
    lastChecked = this;
}

inputs.forEach(input => input.addEventListener('click', checkControl)); 