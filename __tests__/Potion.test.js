const { default: expectationResultFactory } = require('jest-jasmine2/build/expectationResultFactory');
const { test } = require('picomatch');
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expectationResultFactory(potion.name).toBe('health');
    expectationResultFactory(potion.value).toEqual(expect.any(Number));
});