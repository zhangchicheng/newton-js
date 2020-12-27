var Vector = {};

(function() {
    Vector.dot = function(v1, v2) {
        return (v1.x * v2.x) + (v1.y * v2.y);
    }

    Vector.cross = function(v1, v2) {
        return (v1.x * v2.y) - (v1.y * v2.x);
    };

    Vector.cross3 = function(v1, v2, v3) {
        return (v2.x - v1.x) * (v3.y - v1.y) - (v2.y - v1.y) * (v3.x - v1.x);
    }

    Vector.magnitude = function(v) {
        return Math.sqrt((v.x * v.x) + (v.y * v.y));
    }

    Vector.normalize = function(v) {
        let magnitude = Vector.magnitude(v);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: v.x / magnitude, y: v.y / magnitude };
    }
})();