import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import type {
  GsiOptVTFeatureProperties,
  ContourCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function cntrStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code, vt_alti } =
    feature.getProperties() as GsiOptVTFeatureProperties<
      Extract<ContourCode, 7351 | 7352 | 7353>,
      {
        vt_alti?: number;
      }
    >;

  return new Style({
    stroke: new Stroke({
      color: resolution > 19.11 ? "#e7dddd" : "#f7eeee",
      width: 1,
    }),
  });
}
