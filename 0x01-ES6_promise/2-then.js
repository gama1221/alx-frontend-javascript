export default function handleResponseFromAPI(promise){
  /* eslint-disable */
  return (Promise.resolve(promise))?(
    console.log('Got a response from the API'),
    {status: 200,body: 'success'}
  ):(
    console.log(Error('Got a response from the API'))
  )
}