var Render = {};

(function() {
    var _requestAnimationFrame, _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
            || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
            || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }
    Render.create = function(options) {
        var render = {
            engine: null,
            canvas: null,
            options: {
                width: 800,
                height: 600
            }
        };
        if (render.canvas) {
            render.canvas.width = render.canvas.width || render.options.width;
            render.canvas.height = render.canvas.height || render.options.height;
        }
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);

        return render;
    };
/*
    let request

    const performAnimation = () => {
        request = requestAnimationFrame(performAnimation)
        //animate something
    }

    requestAnimationFrame(performAnimation)

//...

    cancelAnimationFrame(request) //stop the animation
*/
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            Render.execute(render);
        })();
    };

    Render.execute = function(render) {

    };

    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };

})();