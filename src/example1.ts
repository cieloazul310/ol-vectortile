import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { fromLonLat } from 'ol/proj';

import 'ol/ol.css';

const map = new Map({
  target: 'map',
  view: new View({
    center: fromLonLat([140.46, 36.37]),
    zoom: 12,
    rotation: 0,
  }),
  layers: [
    new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVTFormat(),
        url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf'
      })
    })
  ],
});
