var pictureTube = require('picture-tube')
var tube = pictureTube();
tube.pipe(process.stdout);

var fs = require('fs');
var sarayukis = fs.readdirSync('packs/sarayuki');
var randnum = Math.floor(Math.random() * (sarayukis.length - 1));
var sarayuki = 'packs/sarayuki/' + sarayukis[randnum];
fs.createReadStream(sarayuki).pipe(tube);
