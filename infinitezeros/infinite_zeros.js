// Infinite Zeros, by enducube.

var money = 0;

function save() {
    var saveGame = {
        money: money,
    }
    document.cookie = "save="+JSON.stringify(saveGame)+";"
}

function load(){
    var loadGame = JSON.parse(document.cookie)

}



setInterval(save, 60000)