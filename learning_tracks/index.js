import init, {search,get_name,get_parts} from "./pkg/learning_track_rust.js";
init().then(() => {
    //alert(search(""))

function searchTracks() {
    const query = document.getElementById("searchbar").value

    const h1elements = document.body.querySelectorAll("h1")
    h1elements.forEach(el => el.remove())
    const selectelements = document.body.querySelectorAll("select")
    selectelements.forEach(el => el.remove())
    const audioelements = document.body.querySelectorAll("audio")
    audioelements.forEach(el => el.remove())
    const brelements = document.body.querySelectorAll("br")
    brelements.forEach(el => el.remove())

    const track_ids = search(query)
    console.log(track_ids)
    console.log(query)
    for (const id in track_ids) {
        makeTrack(track_ids[id])
    }
}

function makeTrack(songid) {
    const parts = get_parts(songid)
    const newH1 = document.createElement("h1")
    newH1.textContent = get_name(songid)
    const newSelect = document.createElement("select")
    newSelect.onchange = function() {
        setAudio(songid)
    }
    newSelect.id = `select-${songid}`
    for (const i of parts) {
        const newOption = document.createElement("option")
        newOption.textContent = i
        newSelect.appendChild(newOption)
    }
    const newBr = document.createElement("br")
    const newAudio = document.createElement("audio")
    newAudio.controls = true
    newAudio.id = `audio-${songid}`
    const newSource = document.createElement("source")
    newSource.src = `tracks/${songid}/0.mp3`
    newSource.id = `source-${songid}`
    newAudio.appendChild(newSource)
    document.body.appendChild(newH1)
    document.body.appendChild(newSelect)
    document.body.appendChild(newBr)
    document.body.appendChild(newAudio)
}
function setAudio(player) {
    var audioElement = document.getElementById("audio-"+player)
    var sourceElement = document.getElementById("source-"+player)
    var selectElement = document.getElementById("select-"+player)
    console.log("tracks/"+player+"/"+selectElement.selectedIndex+".mp3")
    sourceElement.src = "tracks/"+player+"/"+selectElement.selectedIndex+".mp3"
    audioElement.load()
}
searchTracks()
document.getElementById("searchbar").oninput = function() {searchTracks()}
})