const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "654275a5-9e4b-4891-ab9c-60cbb2c1a673"}}
    )
    return res.status(response.status).json(response.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }


  return res.json({ username: username, secret: "sha256..." }); // secret: is a fake pasword
});

app.listen(3001);