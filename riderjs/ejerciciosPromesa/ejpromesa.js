
const miButton=document.getElementById('miButton');
const miDiv=document.getElementById('miDiv');







const setText=(suma,  promedio) =>{
    miDiv.textContent= `la suma es de ${suma} y promedio de ${promedio}`;
}

const getData= (c1) =>{
    return new Promise((resuelve1,rechazar)=>{
        let p= confirm('Quieres sumar y promediar las notas')
        setText("Validando...");
        

        
    setTimeout(()=>{
        if(p){
            
            resuelve1(true)

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
        let promedio=0;

        for(let i=0; i< nota.length; i++){
            
            let notas= nota[i];
            suma= suma+notas;
            promedio= suma/nota.length;

        }
        console.log(suma);
        console.log(promedio);

        


        setTimeout(()=>{
            resuelve1({suma: suma, promedio: promedio});
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
        setText(user.suma, user.promedio)
    })

}


    
    
    





