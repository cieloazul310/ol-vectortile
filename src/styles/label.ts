import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import { FeatureLike } from 'ol/Feature';

function textAlign(align: string): CanvasTextAlign {
  if (align === 'L') return 'left';
  return align === 'R' ? 'right' : 'center';
}
function textBaseline(baseline: string): CanvasTextBaseline {
  if (baseline === 'T') return 'top';
  return baseline === 'B' ? 'bottom' : 'middle';
}

function textPos(
  properties: Record<string, string>
): [CanvasTextAlign, CanvasTextBaseline] {
  if (!properties || !('dspPos' in properties)) return ['center', 'middle'];
  const { dspPos } = properties;
  const align = dspPos.slice(0, 1);
  const baseline = dspPos.slice(1, 2);

  return [textAlign(align), textBaseline(baseline)];
}

export default function labelStyle(feature: FeatureLike): Style | Style[] {
  const properties = feature.getProperties();
  const pos = textPos(properties);
  return new Style({
    text: new Text({
      text: properties.knj,
      fill: new Fill({ color: '#777' }),
      stroke: new Stroke({ color: '#fff', width: 2 }),
      textAlign: pos[0],
      textBaseline: pos[1],
    }),
    zIndex: 10,
  });
}
