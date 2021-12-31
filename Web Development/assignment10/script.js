/*=================
    Question 1
==================*/
function stringLenghts() {
  var dom= document;
    var a = (dom.getElementById("strlenght").value);
    var b= a.length;
    var result= dom.getElementById("lenhgtnum");
    console.log("String Lenght",b);
    result.innerHTML = b;
}

/*=================
    Question 2
==================*/
function stringconcate() {
  var dom= document;
    var a = (dom.getElementById("strconcat").value);
    var b = (dom.getElementById("strplus").value);
    var c= a.concat(b);
    var result= dom.getElementById("twostr");
    console.log("Concate String",c);
    result.innerHTML = c;
}

/*=================
    Question 3
==================*/
function stringcompare() {
  var dom= document;
    var a = (dom.getElementById("strcomp").value);
    var b = (dom.getElementById("strcopy").value);
    var c= a.length;
    var d= b.length;
    var result= dom.getElementById("strcheck");
    if (c==d) {
    console.log("String is Equal"); 
    result.innerHTML ="String is Equal" ; 
    } else {
      console.log("String is not Equal");
      result.innerHTML ="String is not Equal";
    }
}

/*=================
    Question 4
==================*/
function stringUpperCase() {
  var dom= document;
    var a = (dom.getElementById("strup").value);
    var b= a.toLowerCase();
    var result= dom.getElementById("strcase");
    console.log("String Lower Case",b);
    result.innerHTML = b;
}

/*=================
    Question 5
==================*/
function stringLowerCase() {
  var dom= document;
    var a = (dom.getElementById("strlo").value);
    var b= a.toUpperCase();
    var result= dom.getElementById("strcases");
    console.log("String Upper Case",b);
    result.innerHTML = b;
}

