var Body = {};

(function() {
    Body.create = function(options) {
        var defaults = {
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            vertices: [],
            bounds: null
        }
    }
    Body.circle = function(x, y, radius) {
        return {
            position: {
                x: x,
                y: y
            },
            radius: radius
        };
    };

    Body.polygon = function(x, y, side) {

    }
})();