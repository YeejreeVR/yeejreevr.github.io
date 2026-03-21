function setAudio(player) {
    var audioElement = document.getElementById("audio-"+player)
    var sourceElement = document.getElementById("source-"+player)
    var selectElement = document.getElementById("select-"+player)
    console.log("tracks/"+player+"/"+selectElement.selectedIndex+".mp3")
    sourceElement.src = "tracks/"+player+"/"+selectElement.selectedIndex+".mp3"
    audioElement.load()
}