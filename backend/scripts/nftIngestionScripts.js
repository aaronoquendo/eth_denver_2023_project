
const axios = require("axios");
const { get } = require("../util/util");
const { performance } = require('perf_hooks');
const collectionAddresses = require("../util/nftCollectionAddresses");

// util functions to move out below
function getFuncName() {
  return getFuncName.caller.name
}

const Auth =
  'Basic ' +
  Buffer.from(
    process.env.NEXT_PUBLIC_INFURA_API_KEY + ':' + process.env.NEXT_PUBLIC_INFURA_API_KEY_SECRET,
  ).toString('base64');

// Main functions
const saveNFTMetaData = async (models) => {
  let startTime;
  let endTime;
  let url;
  let infuraResponse;
  let collectionMetaDatas = [];

  try {
    startTime = performance.now();
    for (let item of collectionAddresses) {
      url = `https://nft.api.infura.io/networks/1/nfts/${item}`;

      infuraResponse = await axios.get(url, {
        headers: {
          Authorization: Auth,
        }
      });
      collectionMetaDatas.push(get(infuraResponse, "data", null));
      endTime = performance.now();

    }

  } catch (error) {

  }

  await models.nftCollection.bulkCreate(collectionMetaDatas, {});

};

module.exports = { saveNFTMetaData };
