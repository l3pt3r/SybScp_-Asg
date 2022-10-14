const express = require("express");
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api", (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    data: ''
  }

  axios.request(options).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })

});

app.get("/coins/:id", (req, res) => {

  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${req.params.id}?localization=en`,
    data: ''
  }

  axios.request(options).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});