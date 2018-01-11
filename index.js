var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
const obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  newObj = Object.assign({}, object, { [key]: value })
  delete newObj.key;
  return newObj
}
const obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  return object
}