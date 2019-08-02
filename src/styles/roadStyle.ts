import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';

export default function roadStyle(feature: RenderFeature) {
  const { rnkWidth, rdCtg } = feature.getProperties();
  const width =
    rnkWidth === 0
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
      ? '#00af00'
      : rdCtg === 1
      ? '#008a00'
      : rdCtg === 2
      ? '#006900'
      : rdCtg === 3
      ? '#00ff00'
      : '#006900';
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
