function validation(){
    var username = document.getElementById("uname").value ;
    var password = document.getElementById("pass").value ;
    if (username==""){
        alert("Username must be entered");
        return false;
    }else if(password==""){
        alert("Password must not be empty");
        return false;
    
    }else if(password.length<5){
        alert("Password should not be short than five words")
        return false;
    }
    
    else{
        alert("Logged in sucessfully");
        return true;
    }
}
