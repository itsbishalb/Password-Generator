const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = document.getElementById("password-length");
let passwordSize = passwordLength.value;
let currentLength = document.getElementById("current-length");
currentLength.textContent = "Length: " + passwordSize;
passwordLength.oninput = function(){
    passwordSize = this.value;
    currentLength.textContent = "Length: " + passwordSize;
}
function getPassword() {
    let password = ""
    for(let i = 0; i <= passwordSize-1; i++){
        let index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password;
}

function generatePassword(){
    document.getElementById("password-1").textContent = getPassword();  
    document.getElementById("password-2").textContent = getPassword();
    document.getElementById("password-container").style.visibility = "visible";
}

function copyPassword(place){
    if(place > 2 || place < 1){
        return;
    }else{
        navigator.clipboard.writeText(document.getElementById("password-" + place).textContent);
        document.getElementById("copy-msg").style.visibility ="visible";
       setTimeout(function(){
        document.getElementById("copy-msg").style.visibility ="hidden";
       }, 3000);
    }
}