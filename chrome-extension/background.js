chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.type === "SAVE_VIDEO") {

    fetch("http://localhost:5000/save-video", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify(request.data)

    })

    .then(response => response.json())

    .then(data => {

      sendResponse(data);

    })

    .catch(error => {

      sendResponse({

        error: error.message

      });

    });

    return true;

  }

});