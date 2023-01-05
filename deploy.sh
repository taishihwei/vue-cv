#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 建立輸出檔案
npm run build

# 移動至到打包後的 dist 目錄 
cd dist

# 因為 dist 資料夾預設是被 ignore 的，因此在進入 dist 資料夾後初始化 git
git init 
git add -A
git commit -m 'deploy'

# 將 dist 資料夾中的內容推送至遠端分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
git push -f https://github.com/taishihwei/vue-cv.git master:gh-pages
cd -

# 執行指令，在終端機輸入 deploy.sh