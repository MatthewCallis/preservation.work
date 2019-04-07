const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const ejs = require('ejs');
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');

// Reference the Uttori App
const UttoriWiki = require('uttori-wiki');

// Pull in our custom config
const config = require('./config.js');

// Initilize Your Server
const server = express();

// Setup the server
server.set('port', process.env.PORT || 8000);
server.set('ip', process.env.IP || '127.0.0.1');
server.set('views', path.join(config.theme_dir, config.theme_name, 'templates'));
server.use(layouts);
server.set('layout extractScripts', true);
server.set('layout extractStyles', true);
server.set('view engine', 'html');
server.enable('view cache');
server.engine('html', ejs.renderFile);

// Setup Express
server.use(compression());
server.use(favicon(`${config.public_dir}/favicon.ico`));
server.use(express.static(config.public_dir));
server.use('/uploads', express.static(config.uploads_dir));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Setup your app
const _app = new UttoriWiki(config, server);

// Listen for connections
server.listen(server.get('port'), server.get('ip'), () => {
  console.log('✔ preservation.work Server listening at %s:%d', server.get('ip'), server.get('port'));
});
