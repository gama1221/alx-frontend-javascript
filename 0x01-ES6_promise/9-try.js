export default function guardrail(mathFunction) {
  /* eslint-disable */
  const array = [];  
  try {
    array.push(mathFunction());
  } catch (err) {
    array.push(err.toString());
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}