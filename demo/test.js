/**
 * 测试对象属性key是数字
 * https://www.itranslater.com/qa/details/2106350071041229824
 */

const obj = {
  1: 1,
  3: 3,
  2: 2,
};

console.log(obj); // { '1': 1, '2': 2, '3': 3 }

let sortable = [];
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    sortable.push([key, obj[key]])
  }
};

console.log('sortable obj:', sortable.sort((a, b) => b[0] - a[0]));