
/*get the number of characters*/
        

function charLength(e) {
    
    let charLength = document.querySelector(".valueInput").value;
    
    document.getElementById('result').innerText = charLength;   
}

document.getElementById('length').addEventListener('change', charLength)

function generateCharacter(e){
   
    let password="";
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const UppercaseLetter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let number_of_character = document.getElementById('length').value

        for (var i=0; i<number_of_character; i++) {  
            var gnum = Math.floor(Math.random() * alphabet.length);  
            password += alphabet[gnum];  
        } 


        
    

    document.querySelector(".result").innerText = password;

    console.log(password)
   
}




document.querySelector(".generate").addEventListener("click",generateCharacter)  




