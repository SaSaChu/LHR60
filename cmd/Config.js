/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2024, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

module.exports = {
  Source: {
    path: 'src',

    dir: { // 開發目錄
      js: 'js',       // js
      css: 'css',     // css
      img: 'img',     // 圖片
      icon: 'icon',   // 圖示
      scss: 'scss',   // scss
      html: 'html',   // html
      model: 'model', // html
    },
   
    iconDirInScss: 'icon',
    modelTmpDir: '_model',
  },

  Serve: {
    autoOpenBrowser: false, // 啟動自動開網頁

    watch: { // Live reload
      exts: ['.html', '.css', '.js'],
      ignoreDirs: ['icon'], // 不監聽的目錄
    },

    server: {
      domain: '127.0.0.1',

      port: {
        min: 8000,
        max: 8999,
        default: 8000,
      },

      utf8Exts: [
        '.html',
        '.css',
        '.js',
        '.json',
        '.txt'
      ], // 採用 utf8 編碼的副檔名
    },
  },

  Build: {
    path: 'dist',

    // dist 輸出時將 HTML 內 ../ 、 ./ 資源路徑改為 CDN（可用 -U 覆寫）
    cdnBaseUrl: 'https://dlcdnwebimgs.asus.com/files/media/202605/a5bddeae-aa9c-4b56-86b0-b7b427a4117d/v1/',

    // 上傳 CDN 時檔名與開發目錄不同時，在此對應（key 為 HTML 內相對路徑）
    assetMap: {
      'images/high-speed-pc.png': 'images/high-speed-for-pc.png',
      'images/vrr-pc.png': 'images/vrr-for-pc.png',
      'images/quality-pc.png': 'images/quality-for-pc.png',
    },

    autoOpenFolder: false, // 自動開啟目錄

    jsMinify: { // JS minify 時外加的轉譯
      comments: false,
      presets: [
        '@babel/preset-env',
        [
          'minify',
          {
            builtIns: false
          }
        ]
      ]
    },

    copy: {
      // files: ['CNAME'], // 包含檔案
      // dirs: ['a'] // 包含目錄
    },

    exts: [ // 允許的副檔名
      '.html',
      '.txt',
      '.xml',
      '.json',

      '.css',
      '.js',

      '.eot',
      '.svg',
      '.ttf',
      '.woff',

      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.ico',
    ]

  },
  Deploy: {
    github: {
      account: '',
      repository: '',
      branch: 'gh-pages',
      message: '🚀 部署！',
    },

    s3: {
      region: 'ap-northeast-1',

      prefix: '',

      ignoreNames: [], // 忽略的檔案
      ignoreExts: [], // 忽略的副檔名
      ignoreDirs: [], // 忽略的目錄

      putOptions: {
        ACL: 'public-read',
        // CacheControl: 'max-age=5', // Cache 時間
      }
    }
  },

}
