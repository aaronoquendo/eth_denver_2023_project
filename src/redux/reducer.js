import { actionTypes } from './actions'

const initialState = {
  item: {},
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        ...{ item: action.data },
      }
    default:
      return state
  }
}

export default reducer
