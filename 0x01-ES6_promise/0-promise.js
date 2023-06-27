export default function getResponseFromAPI(){
  const status = true;
  return new Promise((resolve, reject)=>{
    status?resolve():reject();
  });
}