const url = ''
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const checkUser = (login, password) => { 
  return fetch(url, {
   method: 'POST',
   headers: headers,
   body: JSON.stringify({
     login,
     password
   })
  })
    .then(res => res.json())
    .then(data => data)
    .catch((error) => {
      console.error(error);
    })
}