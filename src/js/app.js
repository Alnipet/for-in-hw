/* eslint-disable linebreak-style */

export default function orderByProps(obj, propsArr) {
  const arrKeys = Object.keys(obj);
  const alphaberSort = arrKeys
    .filter((elem) => !propsArr.includes(elem))
    .sort((elem1, elem2) => elem1.localeCompare(elem2));

  return propsArr.concat(alphaberSort).map((elem) => ({ key: elem, value: obj[elem] }));
}
