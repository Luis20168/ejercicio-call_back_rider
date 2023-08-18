


function miNota(nota1,nota2,nota3){

    

    let arrayNotas=[nota1,nota2,nota3];


    let miDefinitiva= calcular(arrayNotas)
    console.log(miDefinitiva)





}

    function calcular(miDefinitiva){
        let suma=0
        for(let i=0;i<miDefinitiva.length; i++){ 
            suma +=   miDefinitiva[i];
            
            
            
        }
        suma= (suma/miDefinitiva.length)




        return suma

    }



