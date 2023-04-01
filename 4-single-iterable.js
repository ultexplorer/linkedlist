'use strict';

const list = () => {
    let element;
    return {
        push(data){
            element = {
                prev: element, data,
            };
            return element;
        },
        last: () => element,
        [Symbol.iterator]: () => ({
            current: element,
            next(){
                const element = this.current;
                if(!element) return {
                    done: true,
                    value: null,
                };
                this.current = element.prev;
            }
        })
    }
}

const obj1 = { id: 1};
const obj2 = { id: 2};
