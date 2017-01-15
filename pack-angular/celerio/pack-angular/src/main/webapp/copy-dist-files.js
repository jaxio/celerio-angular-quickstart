var fs = require('fs');
var resources = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/json.date-extensions/json.date-extensions.min.js',
    'node_modules/primeng/resources/themes/omega/theme.css',
    'node_modules/primeng/resources/primeng.min.css'
];
resources.map(function(f) {
    var path = f.split('/');
    var t = 'aot/' + path[path.length-1];
    fs.createReadStream(f).pipe(fs.createWriteStream(t));
});