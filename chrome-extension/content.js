console.log("YouTube Study Tracker Started");

let startTime = null;

let totalWatchTime = 0;

let currentUrl = window.location.href;


// =======================
// Category
// =======================

function getCategory(title) {

  const keywords = [

    "java",

    "dsa",

    "react",

    "javascript",

    "node",

    "express",

    "python",

    "sql",

    "tutorial",

    "course",

    "lecture"

  ];

  const lowerTitle = title.toLowerCase();

  for (let word of keywords) {

    if (lowerTitle.includes(word)) {

      return "Study";

    }

  }

  return "Entertainment";

}


// =======================
// Send Data To Backend
// =======================

function saveVideoData(title, watchTime, category) {

  chrome.runtime.sendMessage(

    {

      type: "SAVE_VIDEO",

      data: {

        title,

        watchTime,

        category

      }

    },

    (response) => {

      if (chrome.runtime.lastError) {

        console.log(chrome.runtime.lastError);

        return;

      }

      console.log(response);

    }

  );

}


// =======================
// Play / Pause Listener
// =======================

function attachVideoListeners(video) {

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


    const seconds = Math.floor(

      totalWatchTime / 1000

    );


    console.log(

      "Watch Time:",

      seconds,

      "seconds"

    );


    const category = getCategory(

      document.title

    );


    saveVideoData(

      document.title,

      seconds,

      category

    );

  });

}


// =======================
// Initial Data
// =======================

console.log(

  "Title:",

  document.title

);

console.log(

  "URL:",

  currentUrl

);


// =======================
// Initial Video
// =======================

let video = document.querySelector(

  "video"

);

if (video) {

  attachVideoListeners(video);

}


// =======================
// Detect Video Change
// =======================

setInterval(() => {

  if (

    window.location.href

    !== currentUrl

  ) {

    currentUrl =

      window.location.href;


    totalWatchTime = 0;

    startTime = null;


    console.log(

      "New video detected"

    );


    console.log(

      "Title:",

      document.title

    );


    console.log(

      "URL:",

      currentUrl

    );


    const newVideo =

      document.querySelector(

        "video"

      );


    if (newVideo) {

      attachVideoListeners(

        newVideo

      );

    }

  }

}, 1000);