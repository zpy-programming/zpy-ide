const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 开发模式
  mode: 'development',
  // 打包入口
  entry: {
    index: './src/index.js',
    icon: {
      import: './public/favicon.png',
      filename: 'favicon.png'
    },
  },
  // 生成 source map, 用于 dist/ 目录下报错追踪
  devtool: 'inline-source-map',
  // 启动实时加载服务器
  devServer: {
    server: 'http', // 使用 http 协议
    port: 9000, // 运行在 9000 端口
    static: './dist', // 静态资源存放路径
    hot: true, // 热模块替换
    compress: true, // 利用 gzips 压缩 dist/ 目录当中的所有内容
    allowedHosts: ['auto'], // 允许访问域名, 'all'(*), 'auto' (localhost | host | client.webSocketURL.hostname)
    proxy: { // 为 CORS跨域提供代理
      '/api': {
        target: 'http://localhost:5000', // 对 /api的请求会将请求代理到 http://localhost:3000/
        pathRewrite: { '^/api': '' }, // 路径重写, 将 '/api' 替换为 ''
        ws: false,        //如果要代理 websockets，配置这个参数
        secure: true, // 不接受在 HTTPS 上运行且证书无效的后端服务器
        changeOrigin: false, // 保留主机头的来源
      },
    },
  },
  output: {
    filename: 'js/[name]-[contenthash].js', // js目录/文件名-文件hash值.js
    path: path.resolve(__dirname, 'dist'), // 输出到 dist/ 目录
    clean: true, // 每次清理目录
    publicPath: './', // 公共路径, 指定应用程序中所有资源的基础路径
    chunkFilename: 'asset/[name]-[hash].js', // 未列在 entry 中的打包文件
  },
  optimization: {
    moduleIds: 'deterministic', // 防止 vendor hash 发生变化
    runtimeChunk: 'single', // 所有生成 chunk 之间共享的运行时文件
    usedExports: true, // 移除未引用代码
    splitChunks: { // 将第三方库(library)提取到单独的 vendor chunk 文件中
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      { // js预处理器 (依赖 'babel-loader')
        test: /\.m?js$/,
        include: path.resolve(__dirname, 'src'), // 仅将 babel 应用在实际需要将其转换的模块, 原因在于 babel 极为耗时
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { // css预处理器 (依赖 'style-loader', 'css-loader')
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { // 图片预处理器
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // 发送一个单独的文件并导出 URL
        generator: {
          filename: 'img/[hash][ext][query]' // 存储于 img/ 目录
        }
      },
      { // 字体预处理器
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // 发送一个单独的文件并导出 URL
        generator: {
          filename: 'font/[hash][ext][query]' // 存储于 font/ 目录
        }
      },
      { // csv预处理器 (依赖 'csv-loader')
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
    ],
  },
  plugins: [
    // 生成index.html
    new HtmlWebpackPlugin({
      title: 'Zpy Online IDE', //页面注入title
      filename: 'index.html', // 生成的文件名
      template: './public/index.html', // 模版文件目录
      chunks: 'all', //默认引入所有的chunks链接
      inject: true, //注入页面位置
      hash: true, //启用hash
      favicon: './public/favicon.ico', // favicon.ico路径
      meta: { //插入meta标签
        'viewport': 'width=device-width, initial-scale=1.0'
      },
      minify: {
        removeAttributeQuotes: true, //清除script标签引号
        removeComments: true, //清除html中的注释
        collapseWhitespace: false, //清除html中的空格、换行符，将html压缩成一行
        minifyCSS: true, //压缩html的行内样式成一行
        removeEmptyElements: false, //清除内容为空的元素（慎用）
        removeStyleLinkTypeAttributes: false //清除style和link标签的type属性
      }
    }),
  ],
};
