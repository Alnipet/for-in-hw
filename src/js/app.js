/* eslint-disable linebreak-style */
/* eslint-disable guard-for-in */
export default function orderByProps(obj, propsArr) {
  const arr1 = [];
  const arr2 = [];

  for (const key in obj) {
    const propsObj = {
      key,
      value: obj[key],
    };

    if (propsArr.includes(key) && key === propsArr[0]) {
      arr1.push(propsObj);
      propsArr.splice(0, 1);
    } else {
      arr2.push(propsObj);
    }
  }

  arr2.sort((elem1, elem2) => elem1.key.localeCompare(elem2.key));

  return arr1.concat(arr2);
}
