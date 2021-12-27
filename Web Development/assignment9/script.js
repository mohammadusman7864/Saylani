/*=================
    Question 1
==================}*/
function arrayG() {
    var dom= document;
    var a = parseInt(dom.getElementById("arrayread").value);
    var b=[(a)] 
    
     for (let index = 0; index > a.length; index++) {
         const element = a[index];
     }
    var result=dom.getElementById("array");
    console.log("array read",b);
    result.innerHTML = b;
}

/*=================
    Question 2
==================*/
function arrNeg() {
    var dom= document;
    var a = parseInt(dom.getElementById("negative").value);
    var b=([a]);
    var result=dom.getElementById("negativenum");
   if (a<0) {
      console.log("Array Number is Negative",b) 
      result.innerHTML = "Array Number is Negative",b 
   } else {
       console.log("Invalid_Number");
       result.innerHTML = "Invalid_Number",b
   }
}

