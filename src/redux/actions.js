export const actionTypes = {
  GET_ITEM: 'GET_ITEM',
  GET_ITEM_SUCCESS: 'GET_ITEM_SUCCESS',
}

export function getItem(data) {
  return { type: actionTypes.GET_ITEM, data: data }
}

export function getItemSuccess(data) {
  return { type: actionTypes.GET_ITEM_SUCCESS, data : data}
}
