import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import {
  parseSngDbl,
  type GsiOptVtRailwayFeatureProperties,
  type OptVtRtCode,
} from "./utils";

function railRoadWidth(
  resolution: number,
  vt_rtCode: OptVtRtCode,
  snglDbl: number,
) {
  if (resolution > 50) return 1;
  if (vt_rtCode === "地下鉄") return 4;
  if (snglDbl === 1) return 2;
  if (snglDbl === 2) return 3;
  return 1;
}

export default function railwayStyle(feature: FeatureLike, resolution: number) {
  const { vt_code, vt_lvorder, vt_railstate, vt_sngldbl, vt_rtcode } =
    feature.getProperties() as GsiOptVtRailwayFeatureProperties;

  const snglDbl = parseSngDbl(vt_sngldbl);
  if (snglDbl === 0) return null;
  if (snglDbl === 4) {
    return new Style({
      stroke: new Stroke({
        width: 4,
        color: "#666",
      }),
      zIndex: 10,
    });
  }

  const width = railRoadWidth(resolution, vt_rtcode, snglDbl);
  const color = vt_rtcode === "地下鉄" ? "#999" : "#666";

  return new Style({
    stroke: new Stroke({
      width,
      color,
    }),
    zIndex: 8,
  });
}
