const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          return resolve(responseJson);
        })
        .catch((error) => {
          console.error(error);
          return reject(error)
        });
    })
}

const postRequest = (url, params) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        console.error(error);
        return reject(error);
      });
  });
}


export {getRequest, postRequest};