
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

    x0 = 200;
    y0 = 400;
    cA = document.forms["myForm"]["catetoA"].value;
    cB = document.forms["myForm"]["catetoB"].value;
    i = document.forms["myForm"]["ipotenusa"].value;
    cA = parseFloat(this.cA); 
    cB = parseFloat(this.cB);
    i = parseFloat(this.i);
    x = 0;
    y = 0;       

    calc(){
        document.getElementById("base").innerHTML =  this.i;
        document.getElementById("altezza").innerHTML = this.y;
        document.getElementById("area").innerHTML =  this.i * this.y
        document.getElementById("perimetro").innerHTML = this.cA + this.cB + this.i ;
    }
    
    
    constructor(){
        
        this.x = (Math.pow(this.cA, 2) - Math.pow(this.cB, 2) + Math.pow(this.i,2) / (2*this.i));

        this.y = Math.sqrt( Math.pow( this.cA, 2) - Math.pow( this.x, 2) );

        console.log(this.x,this.y);

    }

    draw(){

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

        ctx.lineTo(this.i + this.x0 , this.y0);
        ctx.lineTo(this.x+this.x0, - this.y + this.y0);
        ctx.lineTo(this.x0, this.y0);    

        ctx.stroke();
        ctx.fill();
        
         
    }

    

}





//<line x1="80" y1="80" x2="100" y2="20" stroke="black" />
//document.getElementsByTagName("line")[0].attributes['x1'].value=100;

