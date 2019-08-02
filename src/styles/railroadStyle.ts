import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';

export default function railroadStyle(feature: RenderFeature) {
  console.log(feature.getProperties());
  const { railState, snglDbl, rtCode10 } = feature.getProperties();
  if (snglDbl === 0) return new Style();
  if (snglDbl === 4) {
    return new Style({
      stroke: new Stroke({
        width: 4,
        color: '#9900b9',
      }),
      zIndex: 10,
    });
  } else {
    if (rtCode10 === '2') console.log('ｼﾝｶﾝｾﾝ');
    const width =
      rtCode10 === '2' ? 4 : snglDbl === 1 ? 2 : snglDbl === 2 ? 3 : 1;
    const color = rtCode10 === '2' ? '#4200ff' : '#4200b9';
    return new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex: 8,
    });
  }
  /*
  return new Style({
      stroke: new Stroke({
        width,
        color
      }),
    });
    */
}
