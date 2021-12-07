
/*================
   question 1
=================*/
function maxNumber() {
    var dom = document;
    var a = parseInt(dom.getElementById("A").value)
    var b = parseInt(dom.getElementById("B").value)
    var result = dom.getElementById("result")

    if (a > b && a !== b) {
        console.log("Maximum Number", a);
        result.innerHTML = a
    }
    else {
        if (b > a && a !== b) {
            console.log("Maximum Number", b);
            result.innerHTML = b
        }
        else {
            console.log("Maximum does not Number");
        }
    }
    console.log("dom", dom);
}



/*================
   question 2
=================*/
function maxNum() {
    var dom = document; 
    var a = parseInt(dom.getElementById("num1").value);
    var b = parseInt(dom.getElementById("num2").value);
    var c = parseInt(dom.getElementById("num3").value);
    var result = dom.getElementById("good");
    if (a > b && a > c) {
        console.log("A greater", a);
        result.innerHTML = a
    }
    else {
        if (b > a && b > c) {
            console.log("B greater", b);
            result.innerHTML = b
        }
        else {
            console.log("C greater",c);
            result.innerHTML = c
        }
    }
    console.log("dom", dom);
}



/*================
   question 3
=================*/
function evenNumber() {
var dom= document; 
    var a = parseInt(dom.getElementById("even").value);
    var newnumber = a % 2 == 0
 var result = dom.getElementById("oddnumber");
if (newnumber) {
console.log("Number is even");
}
else{
    console.log("Number is odd");
}
console.log("dom", dom);
}
 

/*================
   question 4
=================*/
function divideNumber() {
    var dom= document; 
    var a = parseInt(dom.getElementById("evennum").value);
    var result = dom.getElementById("hnumber");
  if (a%5==0) {
    console.log("Number is Divide 5"); 
    result.innerHTML = a
  } 
  else 
  if (a % 7 == 0) {
    console.log("Number is Divide 7")
    result.innerHTML = a
  }
  else 
      {
        console.log("Number is not Divide 7 and 5");
        result.innerHTML = a
     }
     console.log("dom", dom);
    }
  
 
/*================
   question 5
=================*/
function lengthNum() {
    var dom= document; 
    var a = parseInt(dom.getElementById("positive").value);
    var result = dom.getElementById("negative");
  if (a<0) {
    console.log("Negative Number"); 
    result.innerHTML = a
  } 
  else 
  if (a == 0) {
    console.log("Zero Number")
    result.innerHTML = a
  }
  else 
      {
        console.log("Positive Number");
        result.innerHTML = a
     }
     console.log("dom", dom);
    }
  
     
/*================
   question 6
=================*/
function days() {
    var dom= document; 
    var a = parseInt(dom.getElementById("week").value);
    var b= a*7 
    var result = dom.getElementById("week3");
    console.log("Week of Days",b);
    result.innerHTML = b
    
}



