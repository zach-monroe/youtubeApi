import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

//basic config
const port = 3000;
const app = express();
const params = {
  key: "", //your api key
  channelId: "", //your channel id
  maxResults: 12, //max rendered videos
  order: "date",
  part: "snippet",
};
//middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?",
      { params },
    );
    res.render("index.ejs", {
      items: result.data.items,
    });
    console.log(JSON.stringify(result.data));
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

// TODO: figure out a better way to manage api keys.
// TODO: format data in ejs template (should render as a clickable image that redirects to the video link.)
// TODO: style like website
