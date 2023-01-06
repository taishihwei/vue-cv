const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === "production" ? "/vue-cv/" : "/",
	// �ҥΥ��ﶵ�A�H�קK�c�ث᪺�{���X���X�{����Ķ���ĤT��̿�C
	transpileDependencies: true,
	// �O�_�b�}�o���ҤU�q�L eslint-loader �b�C���O�s�� lint �N�X�C�o�ӭȷ|�b @vue/cli-plugin-eslint �Q�w�ˤ���ͮġC
	lintOnSave: false,
});
