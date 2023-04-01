'use strict'

const list = () => {
    let element;
    const LIST = () => ({
        push(data) {
            element = {
                prev: element, data
            }
            return element;
        },

        last: () => element,

        [Symbol.iterator]: () => ({
            current: element,
            next() {
                const element = this.current;
                if (!element) return {
                    done: true,
                    value: null,
                }
                this.current = element.prev;
                return {
                    done: false,
                    value: element.data,
                }
            }
        })
    });
    const map = () => list;
    let inList = LIST();
    map.push = (data) => {
        inList.push(data);
        return map;
    }

    map.iter = () => inList;

    map.forward = () => {
        const forwardList = list();
        for (const element of inList) {
            forwardList.push(element);
        }
        return forwardList.iter();
    }

    return map;
}

const o1 = {1: 1};
const o2 = {2: 2};
const o3 = {3: 3};


const test = list();
test.push(o1).push(o2).push(o3);


for (const element of test.forward()) {
    console.log(element)
}

