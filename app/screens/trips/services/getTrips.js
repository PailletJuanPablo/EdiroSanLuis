const getMetadata = () => {
  return new Promise((resolve, reject) => {
    fetch('http://edirosanluis.gob.ar/data_manager/public/metadata')
      .then(response => response.json())
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        console.error(error);
        return reject(error);
      });
  });
};

const getTrips = (origin, destination) => {
  return new Promise((resolve, reject) => {
    fetch('http://edirosanluis.gob.ar/data_manager/public/trips', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin,
        destination
      })
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
};

export {getMetadata, getTrips};
