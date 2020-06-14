let solution = (function() {
    return {
        add: (v1, v2) => {
            return [(v1[0] + v2[0]), (v2[1] + v1[1])];
        },

        multiply: (v1, scalar) => {
            return [(v1[0] * scalar), (v1[1] * scalar)];
        },

        length: (v1) => {
            return Math.sqrt((Math.pow(v1[0], 2) + Math.pow(v1[1], 2)));
        },

        dot(v1, v2) {
            return (v1[0]*v2[0]) + (v1[1]*v2[1]);
        },

        cross(v1, v2) {
            return (v1[0]*v2[1]) - (v2[0]*v1[1]);
        }
    };
})();

console.log(solution.add([5.43, -1], [1, 31]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));