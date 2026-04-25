import { Router } from 'express';
import getGeoCode from '../controller/GeoCodeController.js';

const GeoCodeRouter = Router();

GeoCodeRouter.post('/geocode', getGeoCode);

export default GeoCodeRouter;