import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import vtstyle from '../styles';

const vt = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat({
      layers: [
        "AdmBdry",
        "Anno",
        "BldA",
        "Cntr",
        "Cstline",
        "RailCL",
        "RdCL",
        "WA",
        "WRltLine",
      ],
    }),
    url: "https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap-v1/{z}/{x}/{y}.pbf",
    maxZoom: 16,
    minZoom: 4,
    attributions:
      '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
  }),
  declutter: true,
  style: vtstyle,
});

export default vt;
