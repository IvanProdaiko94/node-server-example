module.exports = {
    subtractVecs: (vec1, vec2) => {
        if (vec1.length !== vec2.length) {
            throw new Error(`vec1 of length ${vec1.length} is not equal to vec2 of length ${vec2.length}`)
        }
        const result = [];
        for (let i = 0; i < vec1.length; i++) {
            result.push(vec2[i] - vec1[i])
        }
        return result
    },
};