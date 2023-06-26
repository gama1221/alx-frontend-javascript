export default function concatArrays(array1, array2, string) {
  /* eslint-disable */
  return [].concat(...array1, ...array2, ...string);
}