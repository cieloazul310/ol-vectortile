import type {
  GsiVTFeatureProperties,
  GsiOptVTFeatureProperties,
  RdCLCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

/** rdCtg 道路種別
 * - `0`: 国道、主要道路
 * - `1`: 都道府県道
 * - `2`: 市区町村道
 * - `3`: 高速自動車国道等
 * - `5`: その他
 * - `6`: 不明
 */
export type VtRdCtg = 0 | 1 | 2 | 3 | 5 | 6;

/** rnkWidth 幅員
 * - `0`: 3m未満
 * - `1`: 3m-5.5m未満
 * - `2`: 5.5m-13m未満
 * - `3`: 13m-19.5m未満
 * - `4`: 19.5m以上
 * - `5`: その他
 */
export type VtRnkWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type VtTollSect = 0 | 1 | 2 | 9;

export type GsiVtRdCLFeatureProperties = GsiVTFeatureProperties<
  RdCLCode,
  {
    motorway?: 0 | 1 | 9;
    rdCtg?: VtRdCtg;
    tollSect?: 0 | 1 | 2 | 9;
    rnkWidth?: VtRnkWidth;
    Width?: number;
    medSect?: number;
  }
>;

export type OptVtRdCtg =
  | "主要道路"
  | "高速自動車国道等"
  | "国道"
  | "都道府県道"
  | "市区町村道"
  | "その他"
  | "不明";
export type OptVtRnkWidth =
  | "3m未満"
  | "3m-5.5m未満"
  | "5.5m-13m未満"
  | "13m-19.5m未満"
  | "19.5m以上"
  | "その他"
  | "不明";
export type OptVtTollSect = "無料" | "有料" | "暫定無料" | "不明";

export type GsiOptVtRdCLFeatureProperties = GsiOptVTFeatureProperties<
  Exclude<RdCLCode, 52701 | 52703 | 52704>,
  {
    vt_rdctg?: OptVtRdCtg;
    vt_drworder: number;
    vt_rnkwidth?: OptVtRnkWidth;
    vt_width?: number;
    vt_tollSect?: OptVtTollSect;
    vt_motorway?: 1 | 9;
  }
>;

export function parseOptVtRdCtg(vt_rdctg?: OptVtRdCtg): VtRdCtg | undefined {
  if (vt_rdctg === undefined) return undefined;
  if (vt_rdctg === "国道" || vt_rdctg === "主要道路") return 0;
  if (vt_rdctg === "都道府県道") return 1;
  if (vt_rdctg === "市区町村道") return 2;
  if (vt_rdctg === "高速自動車国道等") return 3;
  if (vt_rdctg === "その他") return 5;
  return 6;
}
export function parseOptVtRnkWidth(
  vt_rnkwidth?: OptVtRnkWidth,
): VtRnkWidth | undefined {
  if (vt_rnkwidth === undefined) return undefined;
  if (vt_rnkwidth === "3m未満") return 0;
  if (vt_rnkwidth === "3m-5.5m未満") return 1;
  if (vt_rnkwidth === "5.5m-13m未満") return 2;
  if (vt_rnkwidth === "13m-19.5m未満") return 3;
  if (vt_rnkwidth === "19.5m以上") return 4;
  if (vt_rnkwidth === "その他") return 5;
  return 6;
}
