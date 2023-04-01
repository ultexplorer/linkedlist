'use strict'

const node = data => {
    const element = data => {
        const  next = node(data);
        next.prev = element;
        return next;
    };
    element.data = data;
    return element;
}

const test = node(1)(2)(3)
console.log(test);