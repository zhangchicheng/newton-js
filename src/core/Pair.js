var Pair = {};

(function() {
    Pair.create = function(collision) {
        var bodyA = collision.bodyA;
        var bodyB = collision.bodyB;

        var pair = {
            id: Pair.id(bodyA.id, bodyB.id),
            bodyA: bodyA,
            bodyB: bodyB
        }
        return pair;
    }
})();