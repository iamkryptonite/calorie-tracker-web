const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                '@primary-color': '#6B7AA1',
                '@layout-header-background':'#11324D',
                '@layout-sider-background':'#11324D',
                '@progress-default-color':'#FF7878',
                // '@body-background':'#FBF8F1',
                '@layout-body-background': '#EFEFEF'

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};