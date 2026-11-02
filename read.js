const fs = require('fs');

const text = fs.readFileSync('file.txt', 'utf8');

console.log(text);
console.log(text.length);

try {
    fs.readFileSync('missing.txt', 'utf8');
} catch (err) {
    console.log(err.code);
}
