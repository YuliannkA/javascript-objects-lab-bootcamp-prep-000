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
  return delete object.key;
}
const obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  return object
}