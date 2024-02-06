const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const output = document.getElementById("result");
const helpIcon = document.getElementById("help");

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

helpIcon.addEventListener("click",()=>{
alert("A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.")
return;
});

checkBtn.addEventListener("click",checkPalindrome);
