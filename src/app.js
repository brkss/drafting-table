


(() => {

    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;

    console.log("dimensions : ", WIDTH, HEIGHT);

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
            
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
                    
        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        draw(); 
    }

    const draw = () => {

        console.log("draw circle !");
        
        const radius = 2;
        
        // init canvas indecator points ! 
        for(let y = .2; y < canvas.width; y ++){
            for(let x = .2; x < canvas.height; x ++){
                ctx.beginPath();
                ctx.arc(x * radius * 15, y * radius * 15, 1, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    resizeCanvas();


})();

