window.onload= function(){
   document.getElementById("button").addEventListener("click", generateNumber);
};

function generateNumber(){

   const Endzahl = document.getElementById("Endzahl").value;

   let randomNumber = Math.floor(Math.random() * Endzahl )+1; 

   document.getElementById("result").innerHTML = randomNumber;
    
   //result.innerHTML = randomNumber

    if (randomNumber % 2 ===0) {
       geradeungerade.innerHTML = "(gerade Zahl)";
    } else {
       geradeungerade.innerHTML = "(ungerade Zahl)";
    }
}