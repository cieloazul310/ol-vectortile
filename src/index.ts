import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Link from "ol/interaction/Link";
import { Attribution, ScaleLine, defaults as defaultControl } from "ol/control";
import vtLayer from "./layers/vt";
import "./style.css";

const map = new Map({
  target: "map",
  view: new View({
    center: fromLonLat([140.46, 36.37]),
    zoom: 12,
    rotation: 0,
  }),
  layers: [vtLayer],
  controls: defaultControl({
    attribution: false,
  }).extend([
    new Attribution({
      collapsible: false,
    }),
    new ScaleLine(),
  ]),
});

map.addInteraction(
  new Link({
    params: ["x", "y", "z"],
    replace: true,
  }),
);
