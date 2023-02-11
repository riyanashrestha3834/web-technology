$(document).ready(function(){
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    })
    document.getElementById("myBtn").onclick =function(){
        let message= document.getElementById("mywords").value;
    
        document.getElementById("message").innerHTML = message;
    document.getElementById("message").append("message");
        alert("Your message is sent!")
    
    }
});