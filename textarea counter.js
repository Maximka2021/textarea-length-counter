let textArea = document.getElementById('textarea');
let textAreaLength = document.getElementById('textarea-length');
let textAreaMaxLength = document.getElementById('textarea-max-length');
let errorMessage = document.getElementById('error');
let maxLengthNum = 1000;

setInterval(function(){
    textAreaLength.textContent = textArea.value.length;
    textAreaMaxLength.textContent = maxLengthNum - textArea.value.length;
    if(maxLengthNum - textArea.value.length <= 0){
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none';    
    }
}, 10)