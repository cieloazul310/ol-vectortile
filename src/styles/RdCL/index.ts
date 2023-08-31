import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import {
  parseOptVtRdCtg,
  parseOptVtRnkWidth,
  type GsiOptVtRdCLFeatureProperties,
} from "./utils";

function roadWidth(resolution: number, rnkWidth: number) {
  if (resolution > 50) return 1;
  if (rnkWidth === 0) return 0.5;
  if (rnkWidth === 1) return 1;
  if (rnkWidth === 2) return 2;
  if (rnkWidth === 3) return 3;
  if (rnkWidth === 4) return 3;
  return 0;
}

function roadColor(resolution: number, rdCtg: number) {
  if (resolution < 1.19) return "#ccc";
  if (rdCtg === 0) return "#bbb";
  if (rdCtg === 1) return "#ccc";
  if (rdCtg === 2) return "#ddd";
  if (rdCtg === 3) return "#aaa";
  return "#ddd";
}

function roadZIndex(rdCtg: number) {
  if (rdCtg === 0) return 9;
  if (rdCtg === 1) return 8;
  if (rdCtg === 2) return 2;
  if (rdCtg === 3) return 10;
  return 1;
}

export default function roadStyle(
  feature: FeatureLike,
  resolution: number,
) {
  const { vt_code, vt_lvorder, vt_rdctg, vt_rnkwidth, vt_width, vt_motorway } =
    feature.getProperties() as GsiOptVtRdCLFeatureProperties;

  const width = roadWidth(resolution, parseOptVtRnkWidth(vt_rnkwidth));
  const color = roadColor(resolution, parseOptVtRdCtg(vt_rdctg));
  const zIndex = roadZIndex(parseOptVtRdCtg(vt_rdctg));

  return new Style({
    stroke: new Stroke({
      width,
      color,
    }),
    zIndex,
  });
}
