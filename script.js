const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const output = document.getElementById("result");

function cleanInputString(str) {
    const regex = /[_\s\W]/g;
    const clean = str.replace(regex, '');
    return str.replace(regex, '').toLowerCase();
}

function checkPalindrome(){
    let textClean = cleanInputString(textInput.value);
    let textArray = textClean.split('');
    let textArrayRev = textArray.reverse();
    let textArrayRevStr = textArrayRev.join('');
    

    if(textClean!==""){
        if(textClean===textArrayRevStr){
            output.innerHTML = `<p>${textInput.value} is a palindrome</p>`;
        }else{
            output.innerHTML = `<p>${textInput.value} is not a palindrome</p>`;
        }
    }else{
        alert("Please input a value");
    }

    output.classList.remove('hide');
}


checkBtn.addEventListener("click",checkPalindrome);