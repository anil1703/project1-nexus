let myForm = document.getElementById("myForm");
let userName = document.getElementById("userName");
let password = document.getElementById("PassWord");
let usermsg = document.getElementById("userAlert");
let passmsg = document.getElementById("passAlert");
let loginbutn = document.getElementById("butnLogin");
let loginDone = document.getElementById("login-done");
let logincontent = document.getElementById("login-Content");
let ThankYou = document.getElementById("ThankYou");

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

loginbutn.addEventListener("click",function(){
    if(userName.value===""){
        usermsg.textContent = "Required*"
    }
    if(password.value===""){
        passmsg.textContent = "Required*";
    }
    else{
        usermsg.textContent = "";
        passmsg.textContent = "";
        logincontent.style.display="none";
        loginDone.style.display="block";
        let name = userName.value;
        let indeNo = name.indexOf("@");
        let NAME = name.slice(0,indeNo);
        ThankYou.textContent = "Thank You "+NAME;
    }

})



myForm.addEventListener("submit", function(event){
    event.preventDefault();
});