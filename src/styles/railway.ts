import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export default function railroadStyle(
  feature: FeatureLike,
  resolution: number
) {
  const { snglDbl, rtCode10 } = feature.getProperties();
  if (snglDbl === 0) return null;
  if (snglDbl === 4) {
    return new Style({
      stroke: new Stroke({
        width: 4,
        color: '#666',
      }),
      zIndex: 10,
    });
  } else {
    const width =
      resolution > 50
        ? 1
        : rtCode10 === '2'
        ? 4
        : snglDbl === 1
        ? 2
        : snglDbl === 2
        ? 3
        : 1;
    const color = rtCode10 === '2' ? '#666' : '#666';
    return new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex: 8,
    });
  }
}
