let promptMessage = prompt("who is there");

if( promptMessage === "admin"){
    
    let pass = prompt("Password?");
    
    if(pass === "pass"){
        alert("welcome!");
    }else if(pass === ' ' || pass === null){
        alert("Canceled");
    }else{
        alert("wrong password");
    }
    
    console.log(pass);

}else if(promptMessage === ' ' || promptMessage === null){
    alert("Canceled");
}else{
    alert("I dont know you");
}

console.log(promptMessage);