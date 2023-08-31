import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import type {
  SeaRouteCode,
  GsiOptVTFeatureProperties,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function wrltLineStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Exclude<SeaRouteCode, 55902>
  >;

  return new Style({
    stroke: new Stroke({ color: "#bbbbd7", lineDash: [4, 4] }),
  });
}
