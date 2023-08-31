import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import type { FeatureLike } from "ol/Feature";
import type {
  GsiOptVTFeatureProperties,
  WaterAreaCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function waterareaStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Exclude<WaterAreaCode, 5000 | 55000>
  >;
  return new Style({
    fill: new Fill({
      color: "#dddde7",
    }),
  });
}
