export default function handleResponseFromAPI(promise){
  return (Promise.resolve(promise))?(
    console.log('Got a response from the API'),
    {status: 200,body: 'success'}
  ):(
    console.log('Got a response from the API'),
    Error
  )
}