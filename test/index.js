const Jasmine = require('jasmine');
const { JSDOM } = require('jsdom');

const jasmine = new Jasmine();

global.document = (new JSDOM('<!doctype html><html><body></body></html>')).window.document;

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['spec.js']
});

jasmine.execute();
