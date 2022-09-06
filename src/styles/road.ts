import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';

export default function roadStyle(feature: FeatureLike, resolution: number) {
  const { rnkWidth, rdCtg, ftCode } = feature.getProperties();
  if (resolution < 1.19 && ftCode > 2700) return null;

  const width =
    resolution > 50
      ? 1
      : rnkWidth === 0
      ? 0.5
      : rnkWidth === 1
      ? 1
      : rnkWidth === 2
      ? 2
      : rnkWidth === 3
      ? 3
      : rnkWidth === 4
      ? 3
      : 0;
  const color =
    resolution < 1.19
      ? '#ccc'
      : rdCtg === 0
      ? '#bbb'
      : rdCtg === 1
      ? '#ccc'
      : rdCtg === 2
      ? '#ddd'
      : rdCtg === 3
      ? '#aaa'
      : '#ddd';
  const zIndex =
    rdCtg === 0 ? 9 : rdCtg === 1 ? 8 : rdCtg === 2 ? 2 : rdCtg === 3 ? 10 : 1;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex,
    }),
  ];
}
