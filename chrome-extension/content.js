console.log("YouTube Study Tracker Started");

const title = document.title;

const url = window.location.href;

console.log("Title:", title);

console.log("URL:", url);

const video = document.querySelector("video");

let startTime;

let totalWatchTime = 0;

if (video) {

  video.addEventListener("play", () => {

    console.log("Video is playing");

    startTime = Date.now();

  });

  video.addEventListener("pause", () => {

  console.log("Video is paused");

  if (!startTime) {
    return;
  }

  const watchTime = Date.now() - startTime;

  totalWatchTime += watchTime;

  console.log(
    "Watch Time:",
    Math.floor(totalWatchTime / 1000),
    "seconds"
  );

});

}