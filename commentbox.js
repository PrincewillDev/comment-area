let textArea = document.getElementById('comment-area');
let remainingChar = document.querySelector('.remaining-char');
let maxLength = textArea.maxLength;

function upadateCounts(event) {
    let inputValue = event.target.value;
    let inputLength = inputValue.length;
    let maxinputLength = maxLength - inputLength;

    if( maxinputLength === 0 ) {
       textArea.classList.add('error'); 
       remainingChar.classList.add('error');
    }
    else if (maxinputLength <= 10) {
        textArea.classList.add('warning'); 
        remainingChar.classList.add('warning');

        textArea.classList.remove('error'); 
        remainingChar.classList.remove('error');
    }else {
        textArea.classList.remove('warning'); 
        remainingChar.classList.remove('warning');
    }

    remainingChar.textContent = maxinputLength;

}

textArea.addEventListener('input', upadateCounts);