const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === "production" ? "/vue-cv/" : "/",
	// 啟用本選項，以避免構建後的程式碼中出現未轉譯的第三方依賴。
	transpileDependencies: true,
	// 是否在開發環境下通過 eslint-loader 在每次保存時 lint 代碼。這個值會在 @vue/cli-plugin-eslint 被安裝之後生效。
	lintOnSave: false,
});
