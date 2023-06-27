export default function getResponseFromAPI(){
  return new Promise((resolve, reject)=>{
    if(resolve){      
      resolve("success");
    }else{
      reject("Error");
    }
  });
}