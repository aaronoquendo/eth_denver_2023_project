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
const { saveNFTMetaData } = require("./scripts/nftIngestionScripts");
const nftCollectionAddresses = require("./util/nftCollectionAddresses");

// Database connections
const sequelize = require("./config/sequelizeConnection");
const models = sequelize.models;

(async () => {
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

  app.get('/v1/nfts/collections/:chainId', async (req, res) => {
    const { chainId } = req.params;
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
    let infuraResponse;
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

    res.send(infuraResponse.data);
  });

  app.get('/v1/nft-collection-metadata/chainId/:chainId/contractAddress/:contractAddress/', async (req, res) => {
    const { contractAddress, chainId } = req.params;
    let infuraResponse;
    let url = `https://nft.api.infura.io/networks/${chainId}/nfts/${contractAddress}`;
  
    try {
      infuraResponse = await axios.get(url, {
        headers: {
          Authorization: Auth,
        }
      });
    } catch (error) {
      console.log(error)
    }

    res.send(infuraResponse.data);
  });


  app.get('/v1/test', async (req, res) => {
    let infuraResponse;
    let collectionMetaDatas = [];

    for (let item of nftCollectionAddresses) {
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

    await models.nftCollection.bulkCreate(collectionMetaDatas, {});

    res.send(collectionMetaDatas);
  });

  app.get('/v1/collection/:contractAddress/:chainId', async (req, res) => {
    const { chainId, contractAddress } = req.params;
    let nftCollection = [];

    try {
      nftCollection = await models.nftCollection.findOne({
        where: {
          collection_address: contractAddress,
          chain_id: chainId
        }
      });

    } catch (error) {
      console.log("error", error);
      nftCollection = {};
    }

    res.send(nftCollection);
  });

  app.get('/v1/collections/:chainId', async (req, res) => {
    let nftCollections = [];

    try {
      nftCollections = await models.nftCollection.findAll()
    } catch (error) {
      console.log("error", error);
      nftCollections = [];
    }

    res.send(nftCollections);
  });

  await saveNFTMetaData(models);

  const PORT = process.env.PORT || 5000;
  const server = http.createServer(app);
  server.listen(PORT);
  console.log("Server started on port 5000\n");
})();
