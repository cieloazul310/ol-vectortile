import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import RenderFeature from 'ol/render/Feature';

import roadStyle from './roadStyle';
import railroadStyle from './railroadStyle';

export default function vtStyle(feature: RenderFeature, resolution: number) {
  const properties = feature.getProperties();
  if (properties.layer === 'road') {
    return roadStyle(feature);
  } else if (properties.layer === 'railway') {
    return railroadStyle(feature);
  } else if (properties.layer === 'coastline') {
    return new Style({
      stroke: new Stroke({
        color: '#1e7180',
      }),
    });
  }

  return new Style({
    fill: new Fill({
      color: '#1e7180',
    }),
  });
}
