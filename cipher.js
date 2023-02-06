let encryptBtn = document.getElementById('Encrypt-btn');// this will be our button that we click on to encrypt 
let einput = document.getElementById('encryptedinput1') // this is ACTUALLy our encrypted Input where the encryr
let plainInput = document.getElementById('plainInput1') // plain text input
let decryptBtn = document.getElementById('decryptBtn') // this will be our button that we click on to decrypt
let inputs = [einput, plainInput]
inputs.forEach(input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase() // this will make sure that the input is always in uppercase
    }
})

function encrypt() {
    let plainInput = document.getElementById('plainInput1').value;
    let solved = "";
    let shift = parseInt(document.getElementById('shiftInput1').value);
    for (let i = 0; i < plainInput.length; i++) {
        let char = plainInput[i];
        if (char === ' ') {
            solved += ' ';
        } else {
            let charCode = plainInput.charCodeAt(i);
            let sum = (charCode + shift) % 91;
            sum >= 65 ? solved += String.fromCharCode(sum) : solved += String.fromCharCode(65 + (sum + 26) % 26);
        }
    }
    einput.value = solved;
}

function decrypt() {
    let encryptedInput = document.getElementById('encryptedinput1').value;
    let solved = "";
    let shift = parseInt(document.getElementById('shiftInput1').value);
    for (let i = 0; i < encryptedInput.length; i++) {
        let char = encryptedInput[i];
        if (char === ' ') {
            solved += ' ';
        } else {
            let charCode = encryptedInput.charCodeAt(i);
            let sum = charCode - shift;
            sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum < 65 ? solved += String.fromCharCode(90 - (65 - sum) + 1) : solved += encryptedInput[i];
        }
    }
    decryptedinput1.value = solved;
}

encryptBtn.addEventListener('click', encrypt) // this will add an event listener to the encrypt button
encryptBtn = addEventListener('click', encrypt) // this will add an event listener to the encrypt button
document.getElementById("decryptBtn").addEventListener("click", function () {
    decrypt();
});