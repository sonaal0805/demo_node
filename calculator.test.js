import {add} from './calculator.js'

test('string with a single number should result in the number itself', ()=>{

    expect(add('1')).toBe(1);

});

test('string with two single number should result in a number', ()=>{

    expect(add('1,5')).toBe(6);

});