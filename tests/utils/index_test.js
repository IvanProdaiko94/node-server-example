'use strict';

const { expect } = require('chai');

const { subtractVecs } = require('../../src/utils');

describe('vector multiplication', () => {
    it('multiplies two vectors elementwise', () => {
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
            expect(e.message).to.be.equal('vec1 of length 5 is not equal to vec2 of length 6')
        }
    });
});