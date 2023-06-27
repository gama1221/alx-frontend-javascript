function getFullResponseFromAPI(success) {
  if (typeof success === 'boolean' && success === true) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    })
  }
  else{
    return Promise.reject('The fake API is not working currently');
  }
}