
console.log(document);
canvas=(document.getElementById("canvas")); // identifico la "tela"

document.getElementById('invia').addEventListener("click",() => { // al click sul bottone istanzio la classe Triangolo()
    
    let forma = new Triangolo();
    forma.draw();
    forma.calc(); 

});

/**
 * @author Manuel della Gala 
 * 
 */
class Triangolo{ 

    // punto iniziale del path
    x0 = 100; 
    y0 = 200;

    //reperisco la misura dei lati del triangolo
    cA = document.forms["myForm"]["catetoA"].value;
    cB = document.forms["myForm"]["catetoB"].value;
    i = document.forms["myForm"]["ipotenusa"].value;

    // parsing dei dati da String a Float
    cA = parseFloat(this.cA); 
    cB = parseFloat(this.cB);
    i = parseFloat(this.i);

    //inizializzo variabili coordinate del vertice
    x = 0;
    y = 0;       

    // riporto dei dati elaborati 
    calc(){
        document.getElementById("base").innerHTML =  this.i;
        document.getElementById("altezza").innerHTML = this.y;
        document.getElementById("area").innerHTML =  (this.i * this.y) / 2
        document.getElementById("perimetro").innerHTML = this.cA + this.cB + this.i ;
    }
    
    // nel costruttore calcolo il vertice del triangolo 
    constructor(){

        /**
         * x^2 + y^2 = cA 
         * (x - i)^2 + y^2 = cB
         * 
         * metto a sistema le due equazioni di circonferenze  
         */
        
        this.x = (Math.pow(this.i,2)-Math.pow(this.cB,2)+Math.pow(this.cA,2))/(2*this.i);

        // il passaggio intermedio mi aiuta a debuggare meglio
        let tmp = - Math.pow(
            ( 
                (Math.pow(this.i,2) - Math.pow( this.cB, 2) + Math.pow( this.cA, 2) ) 
            
                / 
                
                (2*this.i)
            )
        ,2);


        this.y = Math.sqrt( tmp + Math.pow(this.cA,2) );
        this.y0 = this.y + 50;

    }

    //disegno il triangolo 
    draw(){

        let canvas = document.getElementById("canvas"); // identifico canvas
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'red'; // imposto il colore del bordo 
        ctx.fillStyle = "violet"; // imposto il colore del riempimento 

        ctx.lineWidth = 5; // imposto lo spessore della linea 
       // set line stroke and line width
        ctx.beginPath();  //inizio il path 
        ctx.clearRect(0, 0, canvas.width, canvas.height);   // pulisco l'area da disegni precedenti
        ctx.moveTo(this.x0 + (this.i/2), this.y0); // per non rovinare l'angolo parto dalla metà di i 
        

        ctx.lineTo(this.i + this.x0 , this.y0); // 
        ctx.lineTo(this.x+this.x0, this.y0 - this.y);
        ctx.lineTo(this.x0, this.y0);    
        ctx.lineTo(this.i/2 + this.x0 , this.y0); // e naturalmente termino il path alla metà di i

        ctx.stroke();
        ctx.fill();

        console.log(ctx);
         
         
    }    

}
