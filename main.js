
var typeSpeed = 80;
var finalTxt = '~ Dartmouth Computer Science';
var i = 0;


function type() {

   var currText = document.getElementById("typewriter_text");
   document.getElementById("fake-cursor").style.display = "in-line";
   // if we still have text to go
   if (i < finalTxt.length) {
      currText.innerHTML += finalTxt.charAt(i);
      //currText.innerHTML = currText.innerHTML.substring(0, currText.length - 2);
      // increment i
      i++;
      setTimeout(type, typeSpeed);
   }
   else {
      document.getElementById("fake-cursor").style.display = "none";
   }

}

setTimeout(type, 1000);
