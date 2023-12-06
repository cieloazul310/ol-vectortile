declare module "ol-pmtiles" {
  /* eslint max-classes-per-file: warn */
  import DataTileSource from "ol/source/DataTile";
  import VectorTileSource from "ol/source/VectorTile";

  export class PMTilesRasterSource extends DataTileSource {}
  export class PMTilesVectorSource extends VectorTileSource {}
}
