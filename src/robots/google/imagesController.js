import googleCustomSearch from '../../helpers/GCSHelper';
import gcpCredentials from '../../../credentials/gcp.json';

module.exports = class ImagesController {
  constructor() {
    this.gcs = googleCustomSearch();
  }

  characters(query) {
    return this.gcs.cse.list({
      auth: gcpCredentials.apiKey,
      cx: gcpCredentials.searchEngineId,
      q: `adam sandler characters ${decodeURI(query)}`,
      searchType: 'image',
      num: 10
    });
  }

  quality(query) {
    console.log(query);
    return this.gcs.cse.list({
      auth: gcpCredentials.apiKey,
      cx: gcpCredentials.searchEngineId,
      q: `adam sandler ${decodeURI(query)}`,
      searchType: 'image',
      num: 10
    });
  }

  ages(query) {
    return this.gcs.cse.list({
      auth: gcpCredentials.apiKey,
      cx: gcpCredentials.searchEngineId,
      q: `adam sandler ${decodeURI(query)}`,
      searchType: 'image',
      num: 10
    });
  }
};
