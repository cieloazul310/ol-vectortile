import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import type {
  GsiOptVTFeatureProperties,
  BoundaryCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function boundaryStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Extract<BoundaryCode, 1211 | 1212 | 1221>
  >;
  return new Style({
    stroke: new Stroke({ color: "#bbd7bb", lineDash: [2, 2] }),
  });
}
