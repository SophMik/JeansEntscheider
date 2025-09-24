function generateNumber(){
    let randomNumber = Math.floor(Math.random() * 1000)+1; 
    
    result.innerHTML = randomNumber

    if (randomNumber % 2 ===0) {
       geradeungerade.innerHTML = "(gerade Zahl)";
    } else {
       geradeungerade.innerHTML = "(ungerade Zahl)";
    }
}