import {
  all,
  call,
  delay,
  put,
  take,
  takeLatest,
  takeMaybe,
  takeLeading,
  takeEvery
} from 'redux-saga/effects'
import {
  actionTypes,
  getItemSuccess,
  getCollectionSuccess
} from './actions'
import axios from "axios";
import config from "../util/config";


console.log("process.env.NEXT_PUBLIC_ENV", process.env.NEXT_PUBLIC_ENV);
const envConfig = config[process.env.NEXT_PUBLIC_ENV];
console.log("envConfig", envConfig);

function* getItems(data) {
  try {
    yield put(getItemSuccess({ item: "test" }));
  } catch (err) {
    yield put(failure(err))
  }
}


function* getItem(data) {
  let response;
  const Auth =
    'Basic ' +
    Buffer.from(
      process.env.NEXT_PUBLIC_INFURA_API_KEY + ':' + process.env.NEXT_PUBLIC_INFURA_API_KEY_SECRET,
    ).toString('base64');

  response = yield axios.get('https://nft.api.infura.io/networks/1/nfts/0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e', {
    headers: {
      Authorization: Auth,
    }
  })

  console.log("response", response.data);

  try {
    yield put(getItemSuccess({ item: response }));
  } catch (err) {
    yield put(failure(err))
  }
}

function* getNFTCollection(data) {
  let contractAddress = data.data.contractAddress;
  let chainId = data.data.chainId;
  let nftCollections;
  let response;
  let url = `${envConfig.url.backendUrl}/nfts/collection/contractAddress/${contractAddress}/chainId/${chainId}`;
  console.log("url", url)
  try {
    response = yield axios.get(url);
    console.log("response", response.data);
    yield put(getCollectionSuccess(response.data));
  } catch (err) {
    yield put(failure(err))
  }
}

function* getNFTCollections(data) {
  let contractAddress = data.data.contractAddress;
  let chainId = data.data.chainId;
  let nftCollections;
  let response;
  let url = `${envConfig.url.backendUrl}/nfts/collections/${chainId}`;
  console.log("chainId", chainId)
  try {
    response = yield axios.get(url);
    console.log("response", response.data);
    yield put(getItemSuccess({ item: response }));
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.GET_ITEM, getItem);
  yield takeLatest(actionTypes.GET_COLLECTION, getNFTCollection);
  yield takeLatest(actionTypes.GET_COLLECTIONS, getNFTCollections);
}

export default rootSaga
