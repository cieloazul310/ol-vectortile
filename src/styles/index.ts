import Style from "ol/style/Style";
import type { FeatureLike } from "ol/Feature";
import type {
  GsiOptVTFeatureProperties,
  GsiOptVTLayerName,
} from "@cieloazul310/ol-gsi-vt-style-utils";

import boundaryStyle from "./AdmBdry";
import annoStyle from "./Anno";
import buildingStyle from "./BldA";
import cntrStyle from "./Cntr";
import coastlineStyle from "./Cstline";
import railwayStyle from "./RailCL";
import roadStyle from "./RdCL";
import waterareaStyle from "./WA";
import wrltLineStyle from "./WRltLine";

export default function vtStyle(layers: GsiOptVTLayerName[] = []) {
  return (feature: FeatureLike, resolution: number) => {
    const { layer } = feature.getProperties() as GsiOptVTFeatureProperties;
    if (layers.length && !layers.includes(layer)) return new Style();

    if (layer === "AdmBdry") return boundaryStyle(feature, resolution);
    if (layer === "Anno") return annoStyle(feature, resolution);
    if (layer === "BldA") return buildingStyle(feature, resolution);
    if (layer === "Cntr") return cntrStyle(feature, resolution);
    if (layer === "Cstline") return coastlineStyle(feature, resolution);
    if (layer === "RailCL") return railwayStyle(feature, resolution);
    if (layer === "RdCL") return roadStyle(feature, resolution);
    if (layer === "WA") return waterareaStyle(feature, resolution);
    if (layer === "WRltLine") return wrltLineStyle(feature, resolution);

    return new Style();
  };
}
