import ImagesController from '../robots/google/imagesController';
import InfoController from '../robots/google/infoController';

module.exports = class RoutesController {
  constructor(restify) {
    if (restify) {
      this.restify = restify;
      this.applyRoutes();
      this.imagesController = new ImagesController();
      this.infoController = new InfoController();
    }
  }

  applyRoutes() {
    this.restify.get('/images', (req, res) => {
      const param = buildQuery(req.getQuery());
      console.log(param);
      const [path, value] = param;
      const data = buildImageSearch(path, value, this);
      const images = [];
      data.then(data => {
        const { items } = data.data;
        items.map(d => images.push(d.link));
        res.send({ success: true, images });
      });
    });

    this.restify.get('/info', (req, res) => {
      this.infoController.characters().then(data => console.log(data.data));
    });
  }
};

const buildQuery = param => {
  return param.split('=');
};

const buildImageSearch = (path, value, that) => {
  switch (path) {
    case 'quality':
      return that.imagesController.quality(value);
      break;
    case 'characters':
      return that.imagesController.characters(value);
    case 'ages':
      return that.imagesController.ages(value);
    default:
      break;
  }
};
