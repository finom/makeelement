# makeElement [![npm version](https://badge.fury.io/js/makeelement.svg)](https://badge.fury.io/js/makeelement) [![Build Status](https://travis-ci.org/finom/makeelement.svg?branch=master)](https://travis-ci.org/finom/makeelement)

> Compact, fast dependency-free function to use instead of ``document.createElement``

```
npm install --save makeelement
```

```js
const makeElement = require('makeelement');
```


It also creates global variable ``makeElement`` in non-CJS environment.

```html
<script src="makeelement.js"></script>
<script>
const element = makeElement('div');
</script>
```

## Usage

``makeElement`` accepts tag name and properties object (will be described below) as arguments or only properties object which should include ``tagName`` property.

```js
makeElement('div', {
    className: 'foo'
});
```

```js
makeElement({
    tagName: 'div'
    className: 'foo'
});
```

### ``attributes``
If ``attributes`` property is given it is interpreted as a list of properties which will be added using ``setAttribute``.

```js
makeElement('div', {
    attributes: {
        foo: 'a',
        bar: 'b'
    }
});
```


### ``children``
If ``children`` property is given it is interpreted as a list of elements which need to be created with ``makeElement`` as well and inserted into element.

```js
makeElement('div', {
    children: [{
        tagName: 'div',
        className: 'child-1'
    }, {
        tagName: 'div',
        className: 'child-2'
    }]
});
```

### Object properties
When two conditions are met: a property contains an object and created element has a property which contains an object as well then the property of the element will be extended by passed object. This feature allows to change ``dataset`` or ``style`` of created element.

```js
makeElement('div', {
    dataset: {
        foo: 'a',
        bar: 'b'
    }
});
```

```js
makeElement('div', {
    style: {
        position: 'absolute',
        backgroundColor: 'red'
    }
});
```

### Simple properties
When conditions above are not met then a property will be just assigned to newly created element.

```js
makeElement('div', {
    className: 'div-classname',
    foo: 'bar'
});
```
