function makeElement(tagName, props) {
    // allow to pass tagName as a property of props instead of the first argument
    if (typeof tagName === 'object') {
        props = tagName;
        tagName = props.tagName;
    }

    const el = document.createElement(tagName);

    if (props) {
        for (let i = 0, keys = Object.keys(props); i < keys.length; i++) {
            const key = keys[i];
            const value = props[key];

            // set attributes
            if (key === 'attributes' && typeof value === 'object') {
                for (let j = 0, attrsKeys = Object.keys(value); j < attrsKeys.length; j++) {
                    const attrName = attrsKeys[i];
                    const attrValue = value[attrName];
                    el.setAttribute(attrName, attrValue);
                }
            // create children
            } else if (key === 'children' && value) {
                for (let j = 0; j < value.length; j++) {
                    const child = makeElement(value[j]);
                    el.appendChild(child);
                }
            // extend object (eg dataset or style)
            } else if (el[key] && typeof el[key] === 'object' && typeof value === 'object') {
                for (let j = 0, objKeys = Object.keys(value); j < objKeys.length; j++) {
                    const objKey = objKeys[i];
                    const objValue = value[objKey];
                    el[key][objKey] = objValue;
                }
            // just set a property
            } else if (key !== 'tagName') {
                el[key] = value;
            }
        }
    }

    return el;
}

if (typeof module === 'object') {
    module.exports = makeElement;
}
