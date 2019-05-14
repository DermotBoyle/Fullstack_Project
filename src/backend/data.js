const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const albums = [
  {
    id: 1,
    artist: "David Keenan",
    album: "Postcards to Catalonia",
    year: 2019
  },
  { id: 2, artist: "Bjork", album: "Homogenic", year: 1997 },
  { id: 3, artist: "The Police", album: "Regatta de blanc", year: 1979 }
];

app.get("/api/album/", (req, res) => {
  res.send(albums);
});

app.get("/api/album/:id", (req, res) => {
  const album = albums.find(target => target.id === parseInt(req.params.id));
  res.send(album);
});

app.listen(port, () => console.log(`The server is ${port}`));
