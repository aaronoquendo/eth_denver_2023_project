import { actionTypes } from './actions'

const initialState = {
  item: {},
  collections: [],
  collection: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        ...{ item: action.data },
      }
    case actionTypes.GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        ...{collections: action.data}
      }
      case actionTypes.GET_COLLECTION_SUCCESS:
        return {
          ...state,
          ...{collection: action.data}
        }
    default:
      return state
  }
}

export default reducer
