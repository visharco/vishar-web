
import base from '../api/baseURL';
import Token from '../api/token';

function postApi(data, key) {

  console.log(Token)

  const url = base.baseURL + key;

  return fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Accept": "application/json",
      "agent": "web",
      "Authorization": Token
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: data
  })
    .then(response => {
      const statusCode = response.status
      const data = response.json()
      return Promise.all([statusCode, data])
    })
    .then(([res, data]) => {
      return ({ 'status': res, 'data': data.data, 'error': data.error, 'isLoading': false })
    })

}

export default postApi;

