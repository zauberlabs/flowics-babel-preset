#! /usr/bin/env node
const repl = require('repl');
const j = require('jscodeshift');
const fs = require('fs');

const filename = process.argv[2];

console.log(`reading filename ${filename}`);

const fileSource = fs.readFileSync(filename).toString();
const rootNode = j(fileSource);

const r = repl.start('playgroud> ');

r.context.j= j;
r.context.rootNode= rootNode;
r.context.fileSource= fileSource;


