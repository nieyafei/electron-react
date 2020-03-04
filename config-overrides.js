const { override, fixBabelImports, addLessLoader, addWebpackPlugin, overrideDevServer, useEslintRc } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const NE = process.env.NODE_ENV;
const PROXY = process.env.PROXY;
console.log(PROXY)
const addProxy = proxy => config => {
  config.proxy = proxy
  return config
}
/* module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#108ee9' },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  NE === "production" && addWebpackPlugin(new BundleAnalyzerPlugin())
); */
module.exports = {
  webpack: override(
    useEslintRc('.eslintrc'),
    /* fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }), */
    /* addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#108ee9' },
    }), */
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    NE === "production" && addWebpackPlugin(new BundleAnalyzerPlugin())
  ),
  devServer: overrideDevServer(
    addProxy({
      '/api': {
        target: PROXY,
        changeOrigin: true
      },
    })
  )
}
