'use strict';

const { expect } = require('chai');

const { subtractVecs } = require('../../src/utils');

describe('vector subtraction', () => {
    it('subtract two vectors elementwise', () => {
        const vec1 = [0, 3, 5, 6, 2, 9];
        const vec2 = [6, 3, 1, 3, 9, 4];
        expect(subtractVecs(vec1, vec2)).to.deep.equal([6, 0, -4, -3, 7, -5])
    });

    it('fails when vectors have different length', () => {
        const vec1 = [0, 3, 5, 6, 2];
        const vec2 = [6, 3, 1, 3, 9, 4];
        try {
            subtractVecs(vec1, vec2)
        } catch (e) {
            expect(e.message).to.be.equal('vector of length 5 is not equal to vector of length 6')
        }
    });
});