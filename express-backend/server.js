require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;
const key = process.env.COC_KEY;

app.use(cors());

app.get("/api/playersById/:id", (req, res) => {
  // console.log(req.params.id)
  let config = {
    method: "get",
    url: `https://api.clashofclans.com/v1/players/%23${req.params.id}`,
    headers: {
      Authorization: `Bearer ${process.env.COC_KEY}`,
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      // "Referrer-Policy": "origin-when-cross-origin",
      // "Access-Control-Expose-Headers": "Origin, Content-Type",
    },
  };
  if (key) {
    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        // res.header("Access-Control-Allow-Origin: *");
        // res.header("Access-Control-Expose-Headers: Origin, Content-Type");
        // res.header("Referrer-Policy: origin-when-cross-origin");
        // res.header(
        //   "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
        // );
        if (response.status === 200) res.send(response.data);
        // else res.send({"status": "Cant'find"});
      })
      .catch((error) => {
        res.send(error);
        console.log("Response.Status Error with ID:", req.params.id);
      });
  }
});

app.listen(port, () => {
  console.log(`Server listening at port:${port}`);
});
