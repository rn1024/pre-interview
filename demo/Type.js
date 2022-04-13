/**
 * JS类型判断
 * 数据类型：string/boolean/number/null/undefined/object/function
 * https://www.cnblogs.com/onepixel/p/5126046.html
 */

/**
 * typeof操作符，返回表达式数据类型
 * null/array/date/regexp使用typeof结果都为object
 */
const checkTypeof = () => {
  console.log('#typeof 测试成功')
  console.log('typeof string', typeof '' === 'string');
  console.log('typeof boolean', typeof true === 'boolean');
  console.log('typeof number', typeof 1 === 'number');
  console.log('typeof undefined', typeof undefined === 'undefined');
  console.log('typeof object', typeof {} === 'object');
  console.log('typeof function', typeof new Function() === 'function');
  console.log('typeof symbol', typeof Symbol() === 'symbol');

  console.log('#typeof 测试失败')
  console.log(`typeof null is ${typeof null}`, typeof null === 'null');
  console.log(`typeof array is ${typeof []}`, typeof [] === 'array');
  console.log(`typeof date is ${typeof new Date()}`, typeof new Date() === 'date'); // obejct
  console.log(`typeof regexp is ${typeof new RegExp()}`, typeof new RegExp() === 'regexp'); // obejct
}

checkTypeof(); 

/**
 * instanceof用来判断A是否为B的实例
 * instanceof检测的是原型
 * 常用判断类型：array/date
 */
const checkInstanceof = () => {
  console.log(`Array instanceof array`, [] instanceof Array);
  console.log(`Date instanceof date`, new Date() instanceof Date);
}

checkInstanceof();



