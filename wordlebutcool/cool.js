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

words = loadFile("wordlebutcool/words.txt").split("\n");
correctword = words[Math.round(Math.random() * words.length)];
guessesleft = 10;
console.log(correctword);
words.forEach(element => {
  var coolbutton = document.createElement("button");
  coolbutton.classList.add("wordbutton");
  var t = document.createTextNode(element);
  coolbutton.appendChild(t);
    document.getElementById("buttonlist").appendChild(coolbutton);
});

document.getElementById("buttonlist").addEventListener("click", function(e){
  if (guessesleft > 0) {
    var isbutton = e.target.nodeName === "BUTTON";
    if (!isbutton && !e.target.classList.includes("done")) {
      return;
    }
    if (e.target.innerHTML != correctword) {
      e.target.classList.add("wrong");
    }
    else if (e.target.innerHTML == correctword) {
      e.target.classList.add("right");
      console.log("win");
    }
  }
  
  
  //console.log(e.target.innerHTML);
});