
import base from '../api/baseURL';
import Token from '../api/token';

function GetToApi(key){

    console.log(Token)

    const url =  base.baseURL + key;

    return fetch(url, {
        method: "GET", 
        cache: "no-cache",  
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "agent" : "web"  
        },
        redirect: "follow", 
        referrer: "no-referrer"
    })
    .then(response => {
      const statusCode = response.status
      const data = response.json()
      return Promise.all([statusCode, data])
    })
    .then(([res, data]) => {
      return ({'status':res, 'data':data.data , 'error':data.error, 'isLoading':false})
    })
 
}
export default GetToApi;

