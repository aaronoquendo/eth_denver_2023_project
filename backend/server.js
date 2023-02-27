require("dotenv").config();

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

(async () => {
  // Global variables functions


  app.use(bodyParser.json({ type: "*/*" }));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/test', async (req, res) => {
    let response;
    const Auth =
      'Basic ' +
      Buffer.from(
        process.env.NEXT_PUBLIC_INFURA_API_KEY + ':' + process.env.NEXT_PUBLIC_INFURA_API_KEY_SECRET,
      ).toString('base64');
      console.log("Auth::", Auth);

    try{
      response = await axios.get('https://nft.api.infura.io/networks/1/nfts/0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e', {
        headers: {
          Authorization: `Basic YWUzN2RjM2YxMDk2NDc2NTgyZTMzNTI3ODRhODc4NDU6MmMxYTU4OGRhM2MyNDFiOWJlOWI0MGRkYWNlYTlkNGI=`,
        }
      })
    }catch(err){
      console.log("err", err)
    }

    console.log("response", response)
    res.send("hello");
  });



  const PORT = process.env.PORT || 5000;
  const server = http.createServer(app);
  server.listen(PORT);
  console.log("Server started on port 5000\n");
})();
