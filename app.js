document.getElementById("app").innerHTML = `
    <div class='sidebar glass'>
        <button onclick="loadPage('home')">🏠 Home</button>
        <button onclick="loadPage('discover')">⭐ Discover</button>
        <button onclick="loadPage('library')">🎵 Library</button>
        <button onclick="loadPage('upload')">⬆️ Upload</button>
        <button onclick="loadPage('playlists')">📁 Playlists</button>
        <button onclick="loadPage('settings')">⚙️ Settings</button>
    </div>
    <div class='content glass' id='page'></div>
    <div class='player-bar glass'>
        <div id='song-info'>No song</div>
        <div>
            <button onclick="prevSong()">⏮</button>
            <button onclick="togglePlay()">⏯</button>
            <button onclick="nextSong()">⏭</button>
        </div>
        <input id="seekbar" type="range" min="0" max="100" value="0" />
    </div>
`;

function loadPage(p) {
    fetch("pages/" + p + ".html")
        .then(r => r.text())
        .then(html => document.getElementById("page").innerHTML = html);
}

loadPage("home");
