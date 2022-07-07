export default function orderByProps(obj, propsArr) {
  const arr = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < propsArr.length; i++) {
    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
      if (propsArr[i] === key) {
        arr.push({ key: propsArr[i], value: obj[propsArr[i]] });
      }
    }
  }

  return arr;
}
