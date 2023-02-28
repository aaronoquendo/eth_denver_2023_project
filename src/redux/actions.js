export const actionTypes = {
  GET_ITEM: 'GET_ITEM',
  GET_ITEM_SUCCESS: 'GET_ITEM_SUCCESS',
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',
  GET_COLLECTION: 'GET_COLLECTION',
  GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',
}

export function getItem(data) {
  return { type: actionTypes.GET_ITEM, data: data }
}

export function getItemSuccess(data) {
  return { type: actionTypes.GET_ITEM_SUCCESS, data: data }
}

export function getCollections(data) {
  return { type: actionTypes.GET_COLLECTIONS, data: data }
}

export function getCollectionsSuccess(data) {
  return { type: actionTypes.GET_COLLECTIONS_SUCCESS, data: data }
}

export function getCollection(data) {
  return { type: actionTypes.GET_COLLECTION, data: data }
}

export function getCollectionSuccess(data) {
  return { type: actionTypes.GET_COLLECTION_SUCCESS, data: data }
}
