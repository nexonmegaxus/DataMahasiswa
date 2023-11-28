$(document).ready(function () {
    // Mendapatkan element video dan tombol play, pause, dan fullscreen
    var video = document.getElementById("videoPlayer");
    var playBtn = document.getElementById("playBtn");
    var pauseBtn = document.getElementById("pauseBtn");
    var fullScreenBtn = document.getElementById("fullScreenBtn");

   // Menambahkan event listener pada tombol play
   playBtn.addEventListener("click", function () {
        video.play();
    });

    // Menambahkan event listener pada tombol pause
    pauseBtn.addEventListener("click", function () {
        video.pause();
    });

    // Menambahkan event listener pada tombol fullscreen
    fullScreenBtn.addEventListener("click", function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    });
});