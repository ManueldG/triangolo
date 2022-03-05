
console.log(document);
canvas=(document.getElementById("canvas"));
canvas.addEventListener('click',(e)=>{
    console.log(e);
})



document.getElementById('invia').addEventListener("click",() => {
    console.log("via");
    let forma = new Rettangolo();
    forma.draw();
    forma.calc();
    console.log(forma);
    
    

});

class Rettangolo{

    x0 = 100;
    y0 = 100;
    b = document.forms["myForm"]["base"].value;
    h = document.forms["myForm"]["height"].value;

    calc(){
        document.getElementById("area").innerHTML =  this.b * this.h;
        document.getElementById("perimetro").innerHTML = (this.b * 2) + (this.h * 2) ;
    }
    
    
    constructor(){
        
    }

    draw(){
        
        let b = parseInt(this.b); 
        let h = parseInt(this.h);

        let canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.fillStyle = "violet";

        ctx.lineWidth = 5;
       // set line stroke and line width
        ctx.beginPath();  
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        ctx.moveTo(this.x0, this.y0);
        console.log(this.x0, this.y0);
        ctx.lineTo(b+this.x0, this.y0);
        ctx.lineTo(b+this.x0, h+this.y0);
        ctx.lineTo(this.x0, h+this.y0);
        ctx.lineTo(this.x0, this.y0-3);
        ctx.stroke();
        ctx.fill();
        /*
        var c=document.getElementById("canvas"); 
        var d=c.toDataURL("image/png"); 
        var w=window.open(d,'image from canvas'); 
        */
         
    }

    

}





//<line x1="80" y1="80" x2="100" y2="20" stroke="black" />
//document.getElementsByTagName("line")[0].attributes['x1'].value=100;

