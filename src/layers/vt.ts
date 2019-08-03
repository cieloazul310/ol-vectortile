import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import vtstyle from '../styles/vtstyle';

const vt = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat({
      layers: ['river', 'coastline', 'lake', 'waterarea', 'road', 'railway', 'label', 'contour', 'building', 'boundary', 'searoute'],
    }),
    url:
      'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
    attributions: [
      '<a href="" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
    ],
  }),
  declutter: true,
  style: vtstyle,
});

export default vt;
