const express = require('express');
const https = require('https');
const app = express();
const port = process.env.PORT || 3000;
const portHttps = 3443;
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
routes(app);

app.listen(port);
https.createServer(app).listen(portHttps);

console.log('Copyright (c) 2019 Stanley Ang.\nHello, Tamago! HTTP server started on port: ' + port + ' and HTTPS on port: ' + portHttps);
