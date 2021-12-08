// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export 
module.exports ={
  // 파일을 일어들이기 위한 시작 진입점 설정
  entry: './js/main.js',
  
  // 결과물(번동)을 반환
  output: {
    //path: path.resolve(__dirname, 'dist'),  //기본 dist
    //filename: 'main.js',  // 기본적으로 entry과 동일한 주소
    clean: true
  },
  module:{
    rules:[
      {
        test:/\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test : /\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns:[
        {
          from:'static' // 복사할 내용
        }
      ]
    })
  ],
  devServer:{
    host:'localhost'
  }
}