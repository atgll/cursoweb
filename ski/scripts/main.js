let videoElem = document.getElementById("video");
let playButton = document.getElementById("play-button");
const quitText = document.getElementById("videoText");
const quitTop = document.getElementById("divTop");
const quitBottom = document.getElementById("divBottom");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

videoElem.addEventListener("ended", (event) => {
   console.log(
      "Video stopped either because it has finished playing or no further data is available.",
   );

   playButton.classList.remove("d-none");
   quitText.classList.remove("d-none");
   quitTop.classList.remove("d-none");
   quitBottom.classList.remove("d-none");
});

async function playVideo() {
   try {
      await videoElem.play();
      playButton.classList.add("d-none");
      quitText.classList.add("d-none");
      quitTop.classList.add("d-none");
      quitBottom.classList.add("d-none");
   } catch (err) {
      playButton.classList.remove("d-none");
      quitText.classList.remove("d-none");
      quitTop.classList.remove("d-none");
      quitBottom.classList.remove("d-none");
   }
}

function handlePlayButton() {
   if (videoElem.paused) {
      playVideo();
   } else {
      videoElem.pause();
      playButton.classList.remove("d-none");
      quitText.classList.remove("d-none");
      quitTop.classList.remove("d-none");
      quitBottom.classList.remove("d-none");
   }
}
