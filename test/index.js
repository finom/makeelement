const Jasmine = require('jasmine');
const { jsdom } = require('jsdom');

const jasmine = new Jasmine();

global.document = jsdom('<!doctype html><html><body></body></html>');

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['spec.js']
});

jasmine.execute();
