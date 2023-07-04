export default function hasValuesFromArray(set, array) {
  /* eslint-disable */
  return array.every((value) => set.has(value))
}