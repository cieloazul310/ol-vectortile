import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import vt from './layers/vt';
//import population from './layers/population';

import { parseHash, setPermalink, setPopstate } from './utils/handleHash';

import 'ol/ol.css';

const { zoom, center, rotation } = parseHash(window);

const map = new Map({
  target: 'map',
  view: new View({
    center: center || fromLonLat([140.46, 36.37]),
    zoom: zoom || 12,
    rotation: rotation || 0,
  }),
  layers: [vt],
});

setPermalink(map);
setPopstate(map, window);
