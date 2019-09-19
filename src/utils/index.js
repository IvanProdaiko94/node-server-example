module.exports = {
    subtractVecs: (vec1, vec2) => {
        if (vec1.length !== vec2.length) {
            throw new Error(`vector of length ${vec1.length} is not equal to vector of length ${vec2.length}`)
        }
        return vec2.reduce((acc, el, i) => {
            acc.push(el - vec1[i]);
            return acc
        }, [])
    },
};