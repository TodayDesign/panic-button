var fs = require('fs');

// get current version
var data = require('./package.json');
var version = 'v' + data.version;

// determine CDN urls
var rawgit = 'https://cdn.rawgit.com/studiothick/panic-button/' + version + '/dist/';
var panic = rawgit + 'panic.min.js';
var style = rawgit + 'panic.css';

// place urls into snippet
var snippet = ('' + fs.readFileSync('sources/snippet.html'))
        .trim()
        .replace('%%PANIC_MIN_JS%%', panic)
        .replace('%%PANIC_CSS%%', style)
        ;

// place snippet into readme
var readme = '' + fs.readFileSync('readme.md');
var comment_re = /<!--[\w ]+ panic button -->/g;
var chunks = readme.split(comment_re);

if(chunks.length === 3) {
    chunks[1] = '' + snippet;
} else {
    throw Error("The update readme script currently can't support multiple HTML blocks in the readme.");
}

fs.writeFileSync('readme.md', chunks.join(''));
