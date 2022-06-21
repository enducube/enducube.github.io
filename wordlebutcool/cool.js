//wooderl cool

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
  function stringToHashConversion(string) {
    var hashVal = 0;
    if (string.length == 0) return hashVal;
    for (i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hashVal = ((hashVal << 5) - hashVal) + char;
    hashVal = hashVal & hashVal;
       }
    return hashVal;
     }

words = loadFile("wordlebutcool/words.txt").split("\n");
wordindex = Math.round(Math.random()*words.length)
correctword = stringToHashConversion(words[wordindex]);
guessesleft = 10;
words.forEach(element => {
  var coolbutton = document.createElement("button");
  coolbutton.classList.add("wordbutton");
  var t = document.createTextNode(element);
  coolbutton.appendChild(t);
    document.getElementById("buttonlist").appendChild(coolbutton);
});

document.getElementById("buttonlist").addEventListener("click", function(e){
  if (guessesleft > 0 && !e.target.classList.contains("wrong")) {
    guessesleft -= 1;
    var isbutton = e.target.nodeName === "BUTTON";
    if (!isbutton && !e.target.classList.contains("done")) {
      return;
    }
    if (stringToHashConversion(e.target.innerHTML) != correctword) {
      e.target.classList.add("wrong");
    }
    else if (stringToHashConversion(e.target.innerHTML) == correctword) {
      e.target.classList.add("right");
      console.log("win");
    }
    document.getElementById("guessesleft").innerHTML = "guesses left: " + guessesleft.toString();
  }
  
  
  //console.log(e.target.innerHTML);
});