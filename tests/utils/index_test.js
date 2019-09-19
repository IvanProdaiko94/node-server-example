'use strict';

const { expect } = require('chai');

const { multVecs } = require('../../src/utils');

describe('vector multiplication', () => {
    it('multiplies two vectors elementwise', () => {
        const vec1 = [0, 3, 5, 6, 2, 9];
        const vec2 = [6, 3, 1, 3, 9, 4];
        expect(multVecs(vec1, vec2)).to.deep.equal([0, 9, 5, 18, 18, 36])
    });

    it('fails when vectors have different length', () => {
        const vec1 = [0, 3, 5, 6, 2];
        const vec2 = [6, 3, 1, 3, 9, 4];
        try {
            multVecs(vec1, vec2)
        } catch (e) {
            expect(e.message).to.be.equal('vec1 of length 5 is not equal to vec2 of length 6')
        }
    });
});