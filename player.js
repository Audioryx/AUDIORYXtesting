let audio = new Audio();
let playlist = [];
let index = 0;

function loadSong(file) {
    const url = URL.createObjectURL(file);
    playlist.push(url);
    if (playlist.length === 1) {
        playSong(0);
    }
}

function playSong(i) {
    index = i;
    audio.src = playlist[index];
    audio.play();
    document.getElementById("song-info").innerText = "Playing Track " + (index+1);
}

function togglePlay() {
    if (audio.paused) audio.play();
    else audio.pause();
}

function nextSong() {
    index = (index + 1) % playlist.length;
    playSong(index);
}

function prevSong() {
    index = (index - 1 + playlist.length) % playlist.length;
    playSong(index);
}
