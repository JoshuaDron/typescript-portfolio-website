const path = require('path')
import './src/app.css';
import './src/index.css';
import './src/components/NavBar.css';

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.tsx$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
            

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.tsx', '.css']
    },
    mode: "development"
    
}