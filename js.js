
let operadoresA;
let operadoresB;
let operacion;



function start() {

    let resultado = document.getElementById("resultado")
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let division = document.getElementById("division");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let mul = document.getElementById("mul");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let res = document.getElementById("res");
    let igual = document.getElementById("igual");
    let reset = document.getElementById("reset");
    let cero = document.getElementById("cero");
    let suma = document.getElementById("suma");

    // eventos

    uno.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "1";
        
    }


    dos.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "2";
        
    }


    tres.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "3";
        
    }



    cuatro.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "4";
        
    }



    cinco.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "5";
        
    }



    seis.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "6";
        
    }


    siete.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "7";
        
    }


    ocho.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "8";
        
    }


    nueve.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "9";
        
    }


    cero.onclick =  function (e) {

        resultado.textContent = resultado.textContent + "0";
        
    }


    // operadores 


    reset.onclick =  function (e) {

       resetear();
        
    }


    suma.onclick =  function (e) {

        operadoresA = resultado.textContent;
        operacion = "+";
        limpiar();

         
     }

     res.onclick =  function (e) {

        operadoresA = resultado.textContent;
        operacion = "-";
        limpiar();

         
     }


     mul.onclick =  function (e) {

        operadoresA = resultado.textContent;
        operacion = "*";
        limpiar();

         
     }


     division.onclick =  function (e) {

        operadoresA = resultado.textContent;
        operacion = "+";
        limpiar();

         
     }


    igual.onclick =  function (e) {

        operadoresB = resultado.textContent;
        operacion = "=";
        limpiar();


         
     }

     limpiar.function() {

        resultado.textContent + "";
         
     }

     resetear.function() {

        resultado.textContent + "";
        operadoresA = 0;
    
        operadoresBç = 0;
        operacion = "";
         
     }


    //  las operaciones de los resultados


    function resolver() {}
};


        
    





































    
