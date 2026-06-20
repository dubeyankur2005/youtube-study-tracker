import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [videos, setVideos] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetchVideos();
    fetchSummary();
  }, []);

  async function fetchVideos() {

    try {

      const response = await axios.get(
        "http://localhost:5000/videos"
      );

      setVideos(response.data);

    } catch (error) {

      console.log(error);

    }

  }

  async function fetchSummary() {

    try {

      const response = await axios.get(
        "http://localhost:5000/summary"
      );

      setSummary(response.data);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <div className="container">

      <h1 className="title">

        YouTube Study Tracker

      </h1>

      <div className="stats-container">

        <div className="card total-card">

          <h2> Total Videos</h2>

          <h1>{summary.totalVideos || 0}</h1>

        </div>

        <div className="card study-card">

          <h2> Study Time</h2>

          <h1>{summary.studyTime || 0} sec</h1>

        </div>

        <div className="card entertainment-card">

          <h2> Entertainment</h2>

          <h1>{summary.entertainmentTime || 0} sec</h1>

        </div>

      </div>

      <h2 className="history-title">

         Video History

      </h2>

      <div className="history-container">

        {videos.map((video, index) => (

          <div
            key={index}
            className="video-card"
          >

            <h3>{video.title}</h3>

            <div className="details">

              <span
                className={
                  video.category === "Study"
                  ? "study-badge"
                  : "entertainment-badge"
                }
              >

                {video.category}

              </span>

              <span>

                ⏱ {video.watchTime} sec

              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default App;