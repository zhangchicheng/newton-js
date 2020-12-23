var Vector = {};

(function() {
    Vector.dot = function(v1, v2) {
        return (v1.x * v2.x) + (v1.y * v2.y);
    }

    Vector.cross = function(v1, v2) {
        return (v1.x * v2.y) - (v1.y * v2.x);
    };
})();