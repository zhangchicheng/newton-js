var Body = {};

(function() {
    Body.circle = function(x, y, radius) {
        return {
            position: {
                x: x,
                y: y
            },
            radius: radius
        };
    };
})();