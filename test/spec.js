const makeElement = require('../makeelement');

describe('makeElement', () => {
    it('creates element', () => {
        expect(
            makeElement('div').tagName
        ).toEqual('DIV');
    });

    it('adds a property', () => {
        expect(
            makeElement('div', {
                className: 'foobar'
            }).className
        ).toEqual('foobar');
    });

    it('creates childen', () => {
        expect(
            makeElement('div', {
                children: [{
                    tagName: 'span'
                }]
            }).children[0].tagName
        ).toEqual('SPAN');
    });

    it('adds attribute', () => {
        expect(
            makeElement('div', {
                attributes: {
                    foo: 'bar'
                }
            }).getAttribute('foo')
        ).toEqual('bar');
    });

    it('allows to pass object with tagName property', () => {
        expect(
            makeElement({
                tagName: 'div'
            }).tagName
        ).toEqual('DIV');
    });

    it('extends style object', () => {
        expect(
            makeElement('div', {
                style: {
                    position: 'absolute'
                }
            }).style.position
        ).toEqual('absolute');
    });

    // this test is skipped until dataset is not supported by jsdom
    xit('extends dataset object', () => {
        expect(
            makeElement('div', {
                dataset: {
                    foo: 'bar'
                }
            }).dataset.foo
        ).toEqual('bar');
    });
});
