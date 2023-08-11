function miNota(nota1,nota2,nota3){

    

    let arrayNotas=[nota1,nota2,nota3];


    let miDefinitiva= calcular(arrayNotas,fporcentaje )
    console.log(miDefinitiva)

    
    

    
}

function calcular(miDefinitiva, fporcentaje ){
    let suma=0
    miDefinitiva.forEach(element => {
        suma= suma+element
        
    });
    suma= (suma/miDefinitiva.length)

    fporcentaje(miDefinitiva);

    console.log(fporcentaje(miDefinitiva))

    return suma;

    

    

    

}

function fporcentaje(miDefinitiva){
    
    let nota1= (miDefinitiva[0]*0.03);
    let nota2= (miDefinitiva[1]*0.03);
    let nota3= (miDefinitiva[2]*0.03);

    let arrayPorcentaje=[];
    arrayPorcentaje.push(nota1);
    arrayPorcentaje.push(nota2);
    arrayPorcentaje.push(nota3);

    // console.log(miDefinitiva[0]*0.03)

    return arrayPorcentaje;
    
    

    
    

}

