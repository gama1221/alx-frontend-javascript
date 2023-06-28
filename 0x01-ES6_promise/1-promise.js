export default function getFullResponseFromAPI(success) {
  /* eslint-disable */
  return (typeof success === 'boolean' && success === true) ?
    Promise.resolve({
      status: 200,
      body: 'Success',
    }) 
    : 
    Promise.reject(Error('The fake API is not working currently'));
}