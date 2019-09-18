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
      q: `adam sandler characters`,
      num: 10
    });
  }
};
