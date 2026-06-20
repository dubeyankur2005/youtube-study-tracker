const express = require("express");

const cors = require("cors");

const fs = require("fs");

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

  res.send("Backend Running");

});


// Save video

app.post("/save-video", (req, res) => {

  const newVideo = req.body;

  const videos = JSON.parse(

    fs.readFileSync("videos.json", "utf-8")

  );

  videos.push(newVideo);

  fs.writeFileSync(

    "videos.json",

    JSON.stringify(videos, null, 2)

  );

  res.json({

    message: "Saved Successfully"

  });

});


// Get all videos

app.get("/videos", (req, res) => {

  const videos = JSON.parse(

    fs.readFileSync("videos.json", "utf-8")

  );

  res.json(videos);

});


// Summary

app.get("/summary", (req, res) => {

  const videos = JSON.parse(

    fs.readFileSync("videos.json", "utf-8")

  );

  let studyTime = 0;

  let entertainmentTime = 0;


  videos.forEach(video => {

    if (video.category === "Study") {

      studyTime += video.watchTime;

    }

    else {

      entertainmentTime += video.watchTime;

    }

  });


  res.json({

    totalVideos: videos.length,

    studyTime,

    entertainmentTime

  });

});


app.listen(PORT, () => {

  console.log(

    `Server running on ${PORT}`

  );

});