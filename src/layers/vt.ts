import VectorTileLayer from "ol/layer/VectorTile";
import { PMTilesVectorSource } from "ol-pmtiles";
import vtstyle from "../styles";

const vt = new VectorTileLayer({
  source: new PMTilesVectorSource({
    url: "https://cyberjapandata.gsi.go.jp/xyz/optimal_bvmap-v1/optimal_bvmap-v1.pmtiles",
    minZoom: 4,
    maxZoom: 16,
    attributions:
      '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
  }),
  declutter: true,
  style: vtstyle([
    "AdmBdry",
    "Anno",
    "BldA",
    "Cntr",
    "Cstline",
    "RailCL",
    "RdCL",
    "WA",
    "WRltLine",
  ]),
});

export default vt;
