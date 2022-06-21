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
words.forEach(element => {
  var coolbutton = document.createElement("button");
  coolbutton.classList.add("wordbutton");
  var t = document.createTextNode(element);
  coolbutton.appendChild(t);
    document.getElementById("buttonlist").appendChild(b);
});

document.getElementById("buttonlist").addEventListener("click", function(e){
  var isbutton = e.target.nodeName === "BUTTON";
  if (!isbutton && !e.target.classList.includes("done")) {
    return;
  }
  e.target.classList.add("done");
  console.log(e.target.innerHTML);
});