function load() {

    var video = document.getElementById("video");

    var videos = ["1.mp4", "2.mp4"];

    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var muteButton = document.getElementById("mute");
    var leftButton = document.getElementById("left");
    var rightButton = document.getElementById("right");

    var selectedVideo = 0;

    playButton.addEventListener("click", function () {
        video.play();
        playButton.classList.add("hide");
        pauseButton.classList.remove("hide");
    });

    pauseButton.addEventListener("click", function () {
        video.pause();
        pauseButton.classList.add("hide");
        playButton.classList.remove("hide");
    });

    muteButton.addEventListener("click", function () {
        if(video.muted===false){
            video.muted = true;
            muteButton.innerText = "UNMUTE";
        }else{
            video.muted = false;
            muteButton.innerText = "MUTE";
        }
    });

    leftButton.addEventListener("click", function () {
        if(selectedVideo>0){
            selectedVideo--;
            video.src = videos[selectedVideo];
            pauseButton.classList.add("hide");
            playButton.classList.remove("hide");
        }
    });

    rightButton.addEventListener("click", function () {
        if(selectedVideo<videos.length-1){
            selectedVideo++;
            video.src = videos[selectedVideo];
            pauseButton.classList.add("hide");
            playButton.classList.remove("hide");
        }
    });

}

window.onload = load;