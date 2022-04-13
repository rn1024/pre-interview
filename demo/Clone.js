/**
 * 浅拷贝
 */
const obj = {
  id: '1',
  item: {
    name: 1
  }
}

const shollowClone = (object) => {
  let cloneObj = {}
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      cloneObj[key] = object[key];
    }
  }

  return cloneObj;
}

const cloneObj = shollowClone(obj);

console.log('shollowClone', cloneObj, obj.item === cloneObj.item);

/**
 * 深拷贝
 * 需要考虑处理RegExp，data...
 */

// const deepClone = (obj) => {
//   let cloneObj = {};
//   for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//       if()
//     }
//   }
// }


