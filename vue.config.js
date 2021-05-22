module.exports = {
    //  放置静态资源的目录
    assetsDir: "static",
    //文件名哈希
    filenameHashing: true,
    //  是否为生产环境构建生成 source map？
    productionSourceMap: true,
    //  构建时的输出目录
    outputDir: "dist",
    //  基本路径
    publicPath: "./",
    devServer: {
        disableHostCheck: true,
        // allowedHosts: ["fuckbackend.com", "localhost", "backendhost.com"],
        // proxy: "http://localhost:8080",
        // proxy: {
        //     "/adminapi": {
        //         target: "fuckbackend.com",
        //         ws: true,
        //         changeOrigin: true,
        //     },
        // },
    },
    // css: {
    //     loaderOptions: {
    //         // postcss: {
               
    //         //     rules: [
    //         //         {
    //         //             test: [/\.s[ac]ss$/i, /\.css$/i],
    //         //             use: [
    //         //                 // // Creates `style` nodes from JS strings
    //         //                 // "style-loader",
    //         //                 // // Translates CSS into CommonJS
    //         //                 // "css-loader",
    //         //                 // // Compiles Sass to CSS
    //         //                 // // "sass-loader",
    //         //                 {
    //         //                     loader: "postcss-loader",
    //         //                     options: {
    //         //                         postcssOptions: {
    //         //                             plugins: [[require("postcss-import"), require("postcss-nested"), require("tailwindcss")("./tailwind.config.js"), require("autoprefixer"), {}]],
    //         //                         },
    //         //                     },
    //         //                 },
    //         //             ],
    //         //         },
    //         //     ],
    //         // },
    //     },
    // },
};
