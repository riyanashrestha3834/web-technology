//console.log("Hello world, I am learning java script!!!");
/*var a=6;
console.log(typeof(a));
let b=7;
let multiply = a*b;
console.log(multiply);*/


/*const PI =3.14;
let radius= window.prompt("Enter radius");
let circumference= 2* PI *radius
console.log("The circumference of circle is: " +circumference);*/

/*function bark(){
    let d= window.prompt("Enter age: ");
    if (d>= 10){
        console.log()
    }else 
    {
        console.log("The dog is young")

    }
}
function sleep(){
    if(d>=10){
        console.log(age);
        console.log("The dog is old")
    }else{
        console.log("The dog is young")
    }
    }
bark();
sleep();*/

document.getElementById("myBtn").onclick =function(){
    let radius= document.getElementById("myNumber").value;
    console.log(radius);
    const PI= 3.14;
    let circumference= 2*PI *radius;
    document.getElementById("circumfernce").innerHTML = circumference;
    //document.getElementById("circumference").append("circumference");
    alert("Hello CG4 and CG10")

}



