require("dotenv").config();

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const config = require("./config/config");
const envConfig = config[process.env.ENV];
const cors = require("cors");
const { get } = require("./util/util");
const nftCollectionAddresses  = require("./util/nftCollectionAddresses");

(async () => {
  // Global variables functions

  let corsOptions = {
    origin: ['http://localhost:5000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));
  app.use(bodyParser.json({ type: "*/*" }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  // Infura AUTH header

  const Auth =
    'Basic ' +
    Buffer.from(
      process.env.NEXT_PUBLIC_INFURA_API_KEY + ':' + process.env.NEXT_PUBLIC_INFURA_API_KEY_SECRET,
    ).toString('base64');

  app.get('/test', async (req, res) => {
    let response;
    console.log("Auth",Auth)
    try {
      response = await axios.get('https://nft.api.infura.io/networks/1/nfts/0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e', {
        headers: {
          Authorization: `Basic ${Auth}`,
        }
      })
    } catch (err) {
      console.log("err", err.data)
    }

    console.log("response", response)
    res.send("hello");
  });


  app.get('/v1/nfts/collections/:chainId', async (req, res) => {
    const { chainId } = req.params;
    console.log("chainId", chainId)
    console.log("envConfig", envConfig)
    let covalentNftCollections = [];
    let url;
    let nftMarketGlobalViewResponseData;
    let nftMarketGlobalViewResponse;

    let covalentBaseUrl = envConfig.url.covalentBaseUrl;
    let covalentAPIkey = envConfig.url.covalentAPIkey;
    let nftCollections;
    url = `${covalentBaseUrl}/${chainId}/nft_market/?&key=${covalentAPIkey}`;



    try {
      nftMarketGlobalViewResponse = await axios.get(url);
    } catch (err) {
      console.log("err", err)
    }

    nftMarketGlobalViewResponseData = get(nftMarketGlobalViewResponse, "data.data.items", null);
    nftCollections = nftMarketGlobalViewResponseData;


    res.send(nftCollections);
  });

  app.get('/v1/nfts/collection/contractAddress/:contractAddress/chainId/:chainId', async (req, res) => {
    const { contractAddress, chainId } = req.params;
    console.log("chainId", chainId)
    console.log("envConfig", envConfig)
    let nftCollection = {};
    let infuraResponse;
    let formattedCovalentData;
    let nftPortResponse;

    let url = `https://nft.api.infura.io/networks/1/nfts/${contractAddress}/tokens`;
    try {
      infuraResponse = await axios.get(url, {
        headers: {
          Authorization: Auth,
        }
      });
    } catch (error) {
      console.log(error)
    }
    console.log("infuraResponse", infuraResponse)


    res.send(infuraResponse.data);
  });

  app.get('/v1/nft-collection-metadata/chainId/:chainId/contractAddress/:contractAddress/', async (req, res) => {
    const { contractAddress, chainId } = req.params;
    console.log("chainId", chainId)
    console.log("envConfig", envConfig)
    let nftCollection = {};
    let infuraResponse;
    let formattedCovalentData;
    let nftPortResponse;

    let url = `https://nft.api.infura.io/networks/${chainId}/nfts/${contractAddress}`;
    let url2 = `https://nft.api.infura.io/networks/1/nfts/${contractAddress}/tokens`;
    try {
      infuraResponse = await axios.get(url, {
        headers: {
          Authorization: Auth,
        }
      });
    } catch (error) {
      console.log(error)
    }
    console.log("infuraResponse", infuraResponse)


    res.send(infuraResponse.data);
  });


  app.get('/v1/test', async (req, res) => {
    const { contractAddress, chainId } = req.params;

    let nftCollection = {};
    let infuraResponse;
    let formattedCovalentData;
    let nftPortResponse;
    let collectionMetaDatas = [];
   
    let url2 = `https://nft.api.infura.io/networks/1/nfts/${contractAddress}/tokens`;

    for(let item of nftCollectionAddresses){
      console.log("item", item)
      try {
        let url = `https://nft.api.infura.io/networks/1/nfts/${item}`;
        infuraResponse = await axios.get(url, {
          headers: {
            Authorization: Auth,
          }
        });
      } catch (error) {
        console.log(error)
      }
  
      collectionMetaDatas.push(get(infuraResponse, "data", null));
    }
    console.log("collectionMetaDatas", collectionMetaDatas)



    res.send(collectionMetaDatas);
  });

  




  const PORT = process.env.PORT || 5000;
  const server = http.createServer(app);
  server.listen(PORT);
  console.log("Server started on port 5000\n");
})();
