# 国土地理院ベクトルタイル + OpenLayers + TypeScript Example

[国土地理院が提供実験を開始したバイナリベクトルタイル](https://github.com/gsi-cyberjapan/optimal_bvmap "最適化ベクトルタイル試験公開")を OpenLayers で表示したプロジェクトの作成例です。

最適化ベクトルタイル試験公開  
<https://github.com/gsi-cyberjapan/optimal_bvmap>

## デモ

<https://cieloazul310.github.io/ol-vectortile/>

## 開発

```shell
$ git clone git@github.com:cieloazul310/ol-vectortile.git
$ cd ol-vectortile
$ npm install

# develop
$ npm run start

# build
$ npm run build

# format with prettier
$ npm run format

# deploy to gh-pages
$ npm run deploy
```

## Deploy configure

### GitHub Pages

1. Settings > Code and automation > Actions > General  
    Workflow permissions: **Read and write permissions**
2. Settings > Code and automation > Pages  
    Build and deployment Source: **GitHub Actions**

### Netlify

1. Site configuration > Build & Deploy > Continuous deployment  
    Build settings Build command:  
    `npm run build -- --site $URL`
