let myForm = document.getElementById("myForm");
let userName = document.getElementById("userName");
let password = document.getElementById("PassWord");
let usermsg = document.getElementById("userAlert");
let passmsg = document.getElementById("passAlert");
let loginbutn = document.getElementById("butnLogin");
let loginDone = document.getElementById("login-done");
let logincontent = document.getElementById("login-Content");
let ThankYou = document.getElementById("ThankYou");
let firstName = document.getElementById("firstName");
let firstAlert = document.getElementById("firstAlert");
let ConfirmPassWord = document.getElementById("ConfirmPassWord");
let confirmAlert = document.getElementById("ConfirmpassAlert")

userName.addEventListener("blur",function(event){
    if(event.target.value===""){
        usermsg.textContent = "Required*"
    }
    else{
        usermsg.textContent = ""
    }
})


password.addEventListener("blur",function(event){
    if(event.target.value===""){
    passmsg.textContent = "Required*"
    }
    else{
        passmsg.textContent = ""
    }
})

firstName.addEventListener("blur",function(event){
    if(event.target.value===""){
        firstAlert.textContent = "Required*";
    }
    else {
        firstAlert.textContent = "";
    }

})

ConfirmPassWord.addEventListener("blur",function(event){
    if(event.target.value ===""){
        confirmAlert.textContent = "Required*";
    }
    else{
        confirmAlert.textContent = "";
    }
})

loginbutn.addEventListener("click",function(){
    console.log("Anil");
    if(userName.value===""){
        usermsg.textContent = "Required*"
    }
    if(password.value===""){
        passmsg.textContent = "Required*";
    }
    if(firstName.value===""){
        firstAlert.textContent = "Required*";
    }
    if(ConfirmPassWord.value ===""){
        confirmAlert.textContent = "Required*";
    }
    else{
        if(password.value !== ConfirmPassWord.value){
            confirmAlert.textContent = "Password must be same";
        }
        else {
            usermsg.textContent = "";
        passmsg.textContent = "";
        firstAlert.textContent = "";
        confirmAlert.textContent = "";
        logincontent.style.display="none";
        loginDone.style.display="block";
        let name = userName.value;
        let indeNo = name.indexOf("@");
        let NAME = name.slice(0,indeNo);
        ThankYou.textContent = "Thank You "+NAME;
        }
        
    }

    
    

})

myForm.addEventListener("submit", function(event){
    event.preventDefault();
});