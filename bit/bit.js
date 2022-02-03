/// $BIT CREATOR v.1
/// https://github.com/lihted/bit

(function(window) {
    window.$bit = function(data) {
        if (data === undefined) throw new Error('Bit is null');
        let bit;
        if (data.tag){
            if(['svg',
                'path'].includes(data.tag)) bit = document.createElementNS("http://www.w3.org/2000/svg", data.tag);
            else bit = document.createElement(data.tag);
        }
        else if (data.select) bit = data.select;
        if (bit === undefined) throw new Error('Bit is broken');

///PREPARED ATTRIBUTE
        for (const key of [
                'title',
                'class',
                'id',
                'style',
                'translate',
                'src',
                'name',
                'href',
                'hidden',
                'datetime',
                'contenteditable',
                'contentEditable',
                'accept',
                'lang',
                'checked',
                'd',
                'dir',
                'viewBox',
                'maxlength',
                'selected',
                'minlength',
                'placeholder',
                'size',
                'type',
                'spellcheck',
                'value',
                'alt',
                'rel',
                'align',
                'readonly',
                'required',
                'autocomplete',
                'target',
                'for',
                'cite',
                'onkeypress',
                'srcset',
                'role'
        ]) {
            const field = data[key];
            if (field === undefined) continue;
            bit.setAttribute(key, field);
        }
        for (const key of [
                'height',
                'width',
                'color'
            ]) {
            const field = data[key];
            if (field === undefined) continue;
            bit.style.cssText += key + ":" + field
        }

    ///CUSTOM ATTRS
        if (data.attr)
            for (const attr in data.attr) bit.setAttribute(attr, data.attr[attr]);

        if (data.append) {
            if (data.append instanceof Array) {
                for (const content of data.append) {
                    bit.append(content);
                }
            } else {
                bit.append(data.append);
            }
        }

        if (data.prepend) {
            if (data.prepend instanceof Array) {
                for (const content of data.prepend) {
                    bit.prepend(content);
                }
            } else {
                bit.prepend(data.prepend);
            }
        }

        if (data.child) {
            if (data.child instanceof Array) {
                for (const children of data.child) {
                    bit.append($bit(children));
                }
            } else {
                bit.append($bit(data.child));
            }
        }

        if (data.wrap) {
            let wpBit;
            if (data.wrap instanceof Array) {
                for (const wrappers of data.wrap) {
                    wpBit = $bit(wrappers);
                    wpBit.append(bit);
                    bit = wpBit;
                }
            } else {
                wpBit = $bit(data.wrap);
                wpBit.append(bit);
                bit = wpBit;
            }
        }

        if (data.html) bit.innerHTML = data.html;
        if (data.text) bit.append(document.createTextNode(data.text));
        if (data.parent) {
            if (data.parent instanceof Array) {
                for (const parents of data.parent) {
                    parents.append(bit.cloneNode(true));
                }
            } else {
                data.parent.append(bit);
            }
        }
        if (data.parentTop) {
            if (data.prepend instanceof Array) {
                for (const parents of data.parentTop) {
                    parents.prepend(bit.cloneNode(true));
                }
            } else {
                data.parentTop.prepend(bit);
            }
        }

        return bit;
    }
})(window);