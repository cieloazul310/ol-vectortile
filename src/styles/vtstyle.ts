import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import RenderFeature from 'ol/render/Feature';

import roadStyle from './roadStyle';
import railroadStyle from './railroadStyle';

export default function vtStyle(feature: RenderFeature, resolution: number) {
  const properties = feature.getProperties();
  if (properties.layer === 'road') {
    return roadStyle(feature, resolution);
  } else if (properties.layer === 'railway') {
    return railroadStyle(feature, resolution);
  } else if (properties.layer === 'coastline') {
    return new Style({
      stroke: new Stroke({
        color: '#bbbbd7',
      }),
    });
  } else if (properties.layer === 'label') {
    return new Style({
      text: new Text({
        text: properties.knj,
        fill: new Fill({ color: '#777' }),
        stroke: new Stroke({ color: '#fff', width: 2 })
      })
    });
  } else if (properties.layer === 'contour') {
    return new Style({
      stroke: new Stroke({
        color: resolution > 19.11 ? '#e7dddd' : '#f7eeee',
        width: 1
      })
    });
  } else if (properties.layer === 'building') {
    return new Style({
      fill: new Fill({ color: '#eee' })
    })
  } else if (properties.layer === 'boundary') {
    return new Style({
      stroke: new Stroke({ color: '#bbd7bb', lineDash: [2, 2] })
    })
  } else if (properties.layer === 'searoute') {
    return new Style({
      stroke: new Stroke({ color: '#bbbbd7' , lineDash: [4, 4]})
    })
  }

  return new Style({
    fill: new Fill({
      color: '#dddde7',
    }),
  });
}
