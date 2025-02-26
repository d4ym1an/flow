document.getElementById('pause-button').addEventListener('click', function() {
    // Logic to pause the song
    alert('Pause button clicked');
});

function updateSong(songName, songCover) {
    const songLink = document.getElementById('spotify-link').href;
    document.getElementById('spotify-player').src = `https://open.spotify.com/embed/track/${songLink.split('/track/')[1]}?autoplay=true`;
    document.getElementById('spotify-player').setAttribute('allow', 'autoplay; encrypted-media');
    document.getElementById('song-name').textContent = songName;
    document.getElementById('song-cover').src = songCover;
}

// Example usage
updateSong('Song Name', '/imgs/song-cover.jpg');
