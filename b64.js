let mode = process.argv[2];
let src_file = process.argv[3];

const fs = require('fs');

if (mode == 'e') {
  if (src_file) {

    let str = fs.readFileSync(text_file);
    let buff = Buffer.from(str);
    let data = buff.toString('base64');
    fs.writeFile(b64_file, data, function (err) {
      if (err) throw err;
      console.log('Enod!');
    });
  } else {
    console.log('Please include filename following the mode.')
  }

} else if (mode == 'd') {
  let str = fs.readFileSync(b64_file).toString('utf8');

  let buff = Buffer.from(str, 'base64');
  let text = buff.toString('ascii');

  fs.writeFile(text_file, text, function (err) {
    if (err) throw err;
    console.log('Done!');
  });

} else {
  let str = 'Hello World';
  let buff = Buffer.from(str);
  let data = buff.toString('base64');
  fs.writeFile(b64_file, data, function (err) {
    if (err) throw err;
    console.log('Encoded!');
  });
}