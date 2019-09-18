const google = require('googleapis').google;
const customSearch = google.customsearch('v1');

// const gcpCredentials = require('../../credentials/gcp.json');

module.exports = () => {
  const googleCustomSearch = customSearch;
  return googleCustomSearch;
};
