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
  getItemSuccess
} from './actions'
import axios from "axios";

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
    yield put(getItemSuccess({ item: response}));
  } catch (err) {
    yield put(failure(err))
  }
}





function* rootSaga() {
  yield takeLatest(actionTypes.GET_ITEM, getItem);
}

export default rootSaga
