# DAO Taiwan 道台灣前端網頁

此專案為 2024高雄放視人才培育課程-沉浸式互動培訓成果作品。

## 如何使用
1.下載專案檔案至本地端，終端機輸入 `npm install`

2.`npm run dev` 進行開發模式

3.`npm run deploy` 可部署至您的 github repo

## .env 設置

1.複製 .env.example 檔案並將其檔名改為 .env

2.按照註解之指示設定相關變數

## gh-page 無客製化網域時之網頁路徑設定

若因故未部署客製化網域時，須將 vite.config.js 檔案中的 base 路徑重新設置如下，方可以 gh-page 產生之預設網址進行瀏覽，否則路徑將會編譯錯誤。

```
base:`/${process.env.REPOSITORY_NAME}/`
```


## 客製化網域設定

若有需要部署至客製化網域，需至 Settings/Pages 頁面中的 Custom domain 欄位進行設置，例:daotaiwan.ixdshowti.me 

## 部署客製化網域時之網頁路徑設定

若需部署客製化網域時，須確認將 vite.config.js 檔案中的 base 路徑設置如下(目前已是預設)，方可以 gh-page 產生之預設網址進行瀏覽，否則路徑將會編譯錯誤。

```
base:'/'
```

