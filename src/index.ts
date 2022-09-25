import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Attribution, ScaleLine, defaults as defaultControl } from 'ol/control';
import vt from './layers/vt';
import { parseHash, setPermalink, setPopstate } from './utils/handleHash';
import './style.css';

const { zoom, center, rotation } = parseHash(window);

const map = new Map({
  target: 'map',
  view: new View({
    center: center || fromLonLat([140.46, 36.37]),
    zoom: zoom || 12,
    rotation: rotation || 0,
  }),
  layers: [vt],
  controls: defaultControl({
    attribution: false,
  }).extend([
    new Attribution({
      collapsible: false,
    }),
    new ScaleLine(),
  ]),
});

setPermalink(map);
setPopstate(map, window);
