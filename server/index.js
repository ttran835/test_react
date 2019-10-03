// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const WebPackDev = require('webpack-dev-server');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index');
const errorHandler = require('../_Helper/userLoginErrorHandler');
const jwt = require('../_Helper/jwt');
const expressJwt = require('express-jwt');
const checkToken = require('../_Helper/verifyToken');
//  models
const Router = require('./routes/Routes');

// for React hot loader
// const compiler = webpack(webpackConfig);
const app = express();
// new WebPackDev(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//   hot: true,
// }).listen(3003, 'localhost', (err, result) => {
//   if (err) return console.log(err);
// });

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/api', expressJwt({ secret: process.env.JSON_TOKEN }), (req, res) => {
//   console.log(req);
//   if (!req.user.admin) return res.sendStatus(401);
//   res.sendStatus(200);
// });
app.use('/api', Router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
