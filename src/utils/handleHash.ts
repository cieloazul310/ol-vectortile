import Map from 'ol/Map';
import { fromLonLat, toLonLat } from 'ol/proj';

type parseHashResult = {
  zoom: number | null;
  center: number[] | null;
  rotation: number | null;
};

export function parseHash(window: Window): parseHashResult {
  if (window.location.hash !== '') {
    // try to restore center, zoom-level and rotation from the URL
    const hash = window.location.hash.replace('#map=', '');
    const parts = hash.split('/');

    if (parts.length === 4) {
      const zoom = parseFloat(parts[0]);
      const center = fromLonLat([parseFloat(parts[1]), parseFloat(parts[2])]);
      const rotation = parseFloat(parts[3]);

      return { zoom, center, rotation };
    } else {
      return { zoom: null, center: null, rotation: null };
    }
  }
  return { zoom: null, center: null, rotation: null };
}

export function setPermalink(map: Map) {
  map.on('moveend', () => {
    const view = map.getView();
    const zoom = view.getZoom();
    const center = toLonLat(view.getCenter());
    const rotation = view.getRotation();
    const hash =
      '#map=' +
      zoom.toFixed(2) +
      '/' +
      center[0].toFixed(4) +
      '/' +
      center[1].toFixed(4) +
      '/' +
      rotation.toFixed(4);
    const state = { zoom, center, rotation };
    window.history.pushState(state, 'map', hash);
  });
}

export function setPopstate(map: Map, window: Window) {
  window.addEventListener('popstate', event => {
    if (event.state === null) {
      return;
    }
    map.getView().setCenter(fromLonLat(event.state.center));
    map.getView().setZoom(event.state.zoom);
    map.getView().setRotation(event.state.rotation);
  });
}
