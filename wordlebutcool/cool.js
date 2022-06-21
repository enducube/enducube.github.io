//wooderl cool

words = loadFile("wordlebutcool/words.txt").split("\n");
win = false;
guessesleft = 10;

var today = new Date();
var todaynumberseed = today.getFullYear()*today.getMonth()*today.getDate();
console.log(todaynumberseed);
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
var rand = mulberry32(todaynumberseed);
wordindex = Math.round(rand()*words.length);
correctword = stringToHashConversion(words[wordindex]);


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


words.forEach(element => {
  var coolbutton = document.createElement("button");
  coolbutton.classList.add("wordbutton");
  var t = document.createTextNode(element);
  coolbutton.appendChild(t);
  document.getElementById("buttonlist").appendChild(coolbutton);
});

document.getElementById("buttonlist").addEventListener("click", function(e){
  if (guessesleft > 0 && !e.target.classList.contains("wrong") && !win) {
    guessesleft -= 1;
    document.getElementById("guessesleft").innerHTML = "guesses left: " + guessesleft.toString();
    var isbutton = e.target.nodeName === "BUTTON";
    if (!isbutton && !e.target.classList.contains("done")) {
      return;
    }
    if (stringToHashConversion(e.target.innerHTML) != correctword) {
      e.target.classList.add("wrong");
      if (guessesleft < 1) {
        var flash = document.createElement("div");
        var flashspan = document.createElement("span");
        flash.classList.add("flashthing");
        flash.appendChild(flashspan);
        flashspan.appendChild(document.createTextNode(words[wordindex]));
        document.body.appendChild(flash);
        losses += 1;
        save();
      }
    }
    else if (stringToHashConversion(e.target.innerHTML) == correctword) {
      e.target.classList.add("right");
      console.log("win");
      win = true;
      wins += 1;
      save();
    }
    
  }
});



// saving stuff

var wins = 0
var losses = 0

function save() {
  document.cookie = "wins="+wins+";"+"losses="+losses+";";

}

function load() {
  if (document.cookie != null) {
    var loadedthing = document.cookie;
    var splitthing = loadedthing.split(";");
    wins = splitthing[0].split("=")[1];
    wins = splitthing[1].split("=")[1];
  }
 
}

load();