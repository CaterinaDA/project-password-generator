const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnGeneratePassword = document.getElementById("btn-generate-password");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

btnGeneratePassword.addEventListener("click", ()=>{
    let n1 = "";
    let n2 = "";
for (let i = 0; i < 15; i++) {
   
    n1 += characters[Math.floor(Math.random()*characters.length)];
    n2 += characters[Math.floor(Math.random()*characters.length)];
    
}
password1.textContent = `${n1}`;
 password2.textContent = `${n2}`;

})

password1.addEventListener("click", ()=>{
    navigator.clipboard.writeText(password1.textContent);
    password1.textContent = "Copied!";
})

password2.addEventListener("click", ()=>{
    navigator.clipboard.writeText(password2.textContent);
    password2.textContent = "Copied!"
})


   
