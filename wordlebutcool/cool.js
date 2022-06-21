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
console.log(words);
words.forEach(element => {
    document.getElementsByName("body").appendChild("<p>"+element+"</p>");
});