import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import type { FeatureLike } from "ol/Feature";
import type {
  GsiOptVTFeatureProperties,
  BuildingCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function buildingStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code, vt_lvorder } =
    feature.getProperties() as GsiOptVTFeatureProperties<BuildingCode>;
  return new Style({
    fill: new Fill({ color: "#eee" }),
  });
}
