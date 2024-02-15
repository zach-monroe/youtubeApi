import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

//basic config
const port = 3000;
const app = express();
const key = "YOUR API KEY GOES HERE";
const channelId = "YOUR CHANNEL ID GOES HERE";
const max = 12; //dictates how many videos render on the page.

//middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=${max}`,
    );
  } catch (error) {}
});
//Youtube API
// finds youtube channel and
// get --> https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=12
// push each of the variables below to their own arrays using a for loop.  Access using a for loop on EJS side.
// const videoId = result.data.items[i].id.videoId
// const thumbnail = result.data.items[i].snippet.thumbnail.default.url
// const title = result.data.items[i].snippet.title
//
//
// const watchPart = "https://www.youtube.com/watch?v="
// const watchSlug = watchPart + videoId

//Activate the server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
