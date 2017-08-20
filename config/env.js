const path = require('path');

const paths = {};

paths.root = path.join(__dirname, '..');
paths.src = path.join(paths.root, 'src');
paths.dist = path.join(paths.root, 'dist');

paths.vendorManifest = path.join(paths.dist, 'vendor.dll.json');

exports.paths = paths;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
exports.isDev = process.env.NODE_ENV === 'development';