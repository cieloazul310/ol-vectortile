import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import type { FeatureLike } from "ol/Feature";
import {
  dspPosToPosition,
  annoCodeIsElevation,
  annoCodeIsVegetation,
  type GsiOptVTFeatureProperties,
} from "@cieloazul310/ol-gsi-vt-style-utils";

type AnnoFeatureProperties<vt_code extends number = number> =
  GsiOptVTFeatureProperties<
    vt_code,
    {
      vt_text?: string;
      vt_dsppos?: string;
      vt_arrng?: 1 | 2;
      vt_arrngagl?: number;
    }
  >;

export default function annoStyle(feature: FeatureLike, resolution: number) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties;
  const position = dspPosToPosition(vt_dsppos, vt_arrng);

  if (annoCodeIsElevation(vt_code)) return new Style();
  if (annoCodeIsVegetation(vt_code)) return new Style();
  if ([2901, 2903, 2904].includes(vt_code)) return new Style();

  return new Style({
      text: new Text({
        text: vt_text,
        font: "bold small sans-serif",
        fill: new Fill({ color: "#777" }),
        stroke: new Stroke({ color: "#fff", width: 2 }),
        ...position,
      }),
      zIndex: 10,
    });
}
