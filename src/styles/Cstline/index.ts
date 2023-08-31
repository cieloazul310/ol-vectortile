import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import type {
  GsiOptVTFeatureProperties,
  WaterLineCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function coastlineStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Extract<WaterLineCode, 5101 | 5103>
  >;
  return new Style({
    stroke: new Stroke({
      color: "#bbbbd7",
    }),
  });
}