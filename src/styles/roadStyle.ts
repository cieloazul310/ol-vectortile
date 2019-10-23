import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';

export default function roadStyle(feature: RenderFeature, resolution: number) {
  const { rnkWidth, rdCtg } = feature.getProperties();
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
    rdCtg === 0
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
