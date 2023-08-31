import type {
  GsiVTFeatureProperties,
  GsiOptVTFeatureProperties,
  RailCLCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

/** 複線
 * - `0`: 非表示
 * - `1`: 単線
 * - `2`: 複線以上
 * - `3`: 側線 (z11-16)
 * - `4`: 駅部分 (z14-16)
 */
export type VtSngDbl = 0 | 1 | 2 | 3 | 4;

/** 運行状況
 * - `0`: 運行中
 * - `1`: 建設・休止中
 */
export type VtOpeState = 0 | 1;

/** 軌道の状態
 * - `0`: 地上・通常部
 * - `1`: 橋・高架 (z14-16)
 * - `2`: トンネル (z14-16)
 * - `3`: 地下 (z14-16)
 * - `4`: 雪覆い (z14-16)
 * - `5`: 運休中 (z14-16)
 * - `6`: その他 (z14-16)
 * - `7`: 不明 (z14-16)
 * - `100`: トンネル (z8-13)
 * - `200`: 雪覆い (z8-13)
 * - `300`: 地下 (z8-13)
 * - `400`: 路面 (z8-13)
 * - `500`: 坑口無しトンネル (z8-13)
 */
export type VtRailState =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 100
  | 200
  | 300
  | 400
  | 500;

/** 新幹線・地下鉄
 * - `"0"`: 新幹線及び地下鉄以外 (z8-13)
 * - `"1"`: 新幹線 (z8-13)
 * - `"2"`: 地下鉄 (z11-13)
 */
export type VtRtCode10 = "0" | "1" | "2";

export type GsiVtRailwayFeatureProperties = GsiVTFeatureProperties<
  RailCLCode,
  {
    snglDbl?: VtSngDbl;
    opeState?: VtOpeState;
    railState?: VtRailState;
    rtCode1?: string;
    rtCode10?: VtRtCode10;
    rtCode?: string;
    staCode?: string;
  }
>;

export type OptVtSngDbl = "非表示" | "単線" | "複線以上" | "側線" | "駅部分";
export type OptVtRailState =
  | "通常部"
  | "トンネル"
  | "地上"
  | "雪覆い"
  | "地下"
  | "橋・高架"
  | "不明"
  | "その他";
export type OptVtRtCode =
  | "主要鉄道"
  | "JR"
  | "新幹線"
  | "JR以外"
  | "地下鉄"
  | "路面"
  | "索道"
  | "特殊鉄道"
  | "側線";

export type GsiOptVtRailwayFeatureProperties = GsiOptVTFeatureProperties<
  Extract<RailCLCode, 8201>,
  {
    vt_sngldbl?: OptVtSngDbl;
    vt_railstate?: OptVtRailState;
    vt_rtcode?: OptVtRtCode;
    vt_flag17?: 0 | 1 | 2;
  }
>;

export function parseSngDbl(vt_sngldbl?: OptVtSngDbl): VtSngDbl | undefined {
  if (!vt_sngldbl) return undefined;
  if (vt_sngldbl === "駅部分") return 4;
  if (vt_sngldbl === "単線") return 1;
  if (vt_sngldbl === "複線以上") return 2;
  if (vt_sngldbl === "側線") return 3;
  return 0;
}

export function parseRailState(
  vt_railstate?: OptVtRailState,
): VtRailState | undefined {
  if (!vt_railstate) return undefined;
  if (vt_railstate === "通常部" || vt_railstate === "地上") return 0;
  if (vt_railstate === "橋・高架") return 1;
  if (vt_railstate === "トンネル") return 2;
  if (vt_railstate === "地下") return 3;
  if (vt_railstate === "雪覆い") return 4;
  if (vt_railstate === "不明") return 7;
  return 6;
}

export type RailCLCommonProperties = {
  code: RailCLCode;
  snglDbl?: VtSngDbl;
  railState?: VtRailState;
  isJR: boolean;
  isChikatetsu: boolean;
  isStation: boolean;
  lvOrder?: GsiVTFeatureProperties["lvOrder"];
};
