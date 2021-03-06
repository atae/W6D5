module.exports = {
 entry: "./frontend/widgets.jsx",
 output: {
   path: "./",
   filename: "bundle.js"
 },
 devtool: 'source-map',
 resolve: {
   extensions: ['', '.js', '.jsx']
 },
 module: {
   loaders: [
     {
       test: [/\.jsx?$/, /\.js?$/],
       exclude: /(node_modules)/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react']
       }
     }
   ]
 }
};
