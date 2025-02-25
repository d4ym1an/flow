const videoPlayer = document.getElementById('videoPlayer');
const firstVideo = 'imgs/FLOWINTRO1.mp4';
const secondVideo = 'imgs/FLOWINTRO2.mp4';

videoPlayer.src = firstVideo;
videoPlayer.play();

videoPlayer.addEventListener('ended', () => {
    if (videoPlayer.src.includes(firstVideo)) {
        // Switch to the second video and loop it
        videoPlayer.src = secondVideo;
        videoPlayer.loop = true;
        videoPlayer.play();
    }
});

const video = document.getElementById('videoPlayer');
    video.controls = false; // Ensure controls are disabled
