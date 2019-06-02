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

export default getRequest;