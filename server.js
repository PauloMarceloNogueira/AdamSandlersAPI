import prettyError from 'pretty-error';
import ApiController from './src/controllers/ApiController';

prettyError.start();
const apiController = new ApiController();
apiController.run(() => {
  console.log('Api is running');
});
// const google = require('googleapis').google;
// const customSearch = google.customsearch('v1');

// const gcpCredentials = require('./credentials/gcp.json');

// const response = customSearch.cse.list({
//   auth: gcpCredentials.apiKey,
//   cx: gcpCredentials.searchEngineId,
//   q: 'Joel Collact',
//   searchType: 'image',
//   num: 10
// });
// response
//   .then(data => {
//     const { items } = data.data;
//     const ArrImg = [];
//     items.map(data => {
//       ArrImg.push(data.link);
//     });
//     console.log(ArrImg);
//   })
//   .catch(e => console.log(e, 'ERROR'));
