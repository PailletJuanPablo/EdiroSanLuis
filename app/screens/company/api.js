const getCompany = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.edirosanluis.gob.ar/index.php?option=com_jbackend&action=get&module=content&resource=articles&id=14')
      .then(response => response.json())
      .then(responseJson => {
        return resolve(responseJson.introtext);
      })
      .catch(error => {
        console.error(error);
        return reject(error);
      });
  });
};


export {getCompany};
