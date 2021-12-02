
/*
question 1
var a=prompt("first number");
var b=prompt("second number");
if(a>b && a!==b)  {
    console.log("Maximum Number",a );
}
else{
    if(b>a && a!==b)
    console.log("Maximum Number",b );
else{
    console.log("Maximum does not Number" );
}
      }
*/

/*
question2
var a=prompt("first number");
var b=prompt("second number");
var c=prompt("second number");
if(a>b && a>c){
    console.log("Maximum Number",a );
}
else{
    if(b>a && b>c)  
    console.log("Maximum Number",b );
    else{
        console.log("Maximum Number",c );
    }
}
*/

var a=prompt("first number");
var numberFlag = a % 5 == 0 
var Flag = a % 7== 0
 if (numberFlag) {
console.log("Number is five");
}
else{
if(Flag)
console.log("Number is seven");
 else{
    console.log("no divide 7 and 5");
 }
}

