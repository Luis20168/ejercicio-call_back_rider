
const miButton=document.getElementById('miButton');
const miDiv=document.getElementById('miDiv');







const setText=(suma,  promedio, porcentaje1,porcentaje2, porcentaje3) =>{
    miDiv.textContent= `la suma es de ${suma} y promedio de ${promedio} y pocetaje de notas: 1.= ${porcentaje1}  2.=  ${porcentaje2}  3.= ${porcentaje3} `;
}

const getData= (c1) =>{
    return new Promise((resuelve1,rechazar)=>{
        let p= confirm('Quieres sumar y promediar las notas')
        setText("Validando...");
        

        
    setTimeout(()=>{
        if(p){
            
            resuelve1(true)

        }

        else{
            rechazar (false)
        }
        
        
        

    },2000)

    })
    
}

const showData= (arrayNotas)=>{
    console.log(arrayNotas)
    

    return new Promise((resuelve1,rechazar)=>{
        setText("Calculando...");

        const objNotas={};


        

        for (let i = 0; i < arrayNotas.length; i++) {
            const Name = 'nota' + (i + 1);
            objNotas[Name] = arrayNotas[i];
        }
        console.log(objNotas)
        
        let nota = Object.values(objNotas);
        let suma= 0; 
        let p= 0;
        let porcntaje1=0;
        let porcntaje2=0;
        let porcntaje3=0;
        let promedio=0;

        for(let i=0; i< nota.length; i++){
            
            let notas= nota[i];
            porcntaje1= parseFloat( nota[0]*0.03);
            porcntaje2= parseFloat( nota[1]*0.03);
            porcntaje3= parseFloat( nota[2]*0.03);


            suma= suma+notas;
            promedio= suma/nota.length;

        }




        console.log(suma);
        console.log(promedio);

        


        setTimeout(()=>{
            resuelve1({
                suma: suma,
                promedio: promedio,
                porcentaje1:porcntaje1,
                porcentaje2: porcntaje2,
                porcentaje3: porcntaje3});
        }, 2000)

    })
    
    
}


function miNota(nota1,nota2,nota3){

    const arrayNotas= [nota1,nota2,nota3]
    
    getData().then(permitido=>{
        console.log(permitido)
        if(permitido){
            return showData(arrayNotas)

        }

        
    }).then(user=>{
        setText(user.suma, user.promedio, user.porcentaje1,user.porcentaje2,user.porcentaje3)
    })

};


    
    
    





