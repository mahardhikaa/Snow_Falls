var canvas = document.getElementById('myCanvas');
var canvasCtx = canvas.getContext("2d");

canvas.width = window.innerWidth-5;
canvas.height = window.innerHeight-5;

function Circle(x,y){
    this.x = x;
    this.y = y;

    this.create = function(){
        canvasCtx.beginPath();
        canvasCtx.arc(x, y, 8, 0, 2*Math.PI);
        canvasCtx.strokeStyle = 'white';
        canvasCtx.stroke();
        canvasCtx.fillStyle = 'white';
        
        canvasCtx.fill();
    };

    this.clear = function(){
        canvasCtx.clearRect((x-11), (y-11), 20, 20);
    }
    
};


canvas.addEventListener('click', function(e){
    var x = e.x;
    var y = e.y;

    function animate(){
        requestAnimationFrame(animate);
        var circle = new Circle(x,y);
        circle.clear();
        circle.create();

        y+=2;
    }
    animate();
});