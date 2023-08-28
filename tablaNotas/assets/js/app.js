//modal

const modal= document.getElementById('modal');
const btnModal= document.getElementById('btn-modal');

btnModal.addEventListener('click', ()=>{
    modal.classList.toggle('display')
})








//fin modal----------------------

let allEstudiantes=[]
const añadir= document.getElementById("añadir");
const tabla= document.getElementById("tabla");



const promedio= (notas)=>{
    return new Promise((resolve, reject)=>{
        let promedio= 0;
        notas.forEach((notas)=>{
            
            promedio= (promedio+notas)

        })
        promedio= promedio/notas.length;

        resolve(promedio);



    })
    

}


const objeto= (estudiante)=>{

    return new Promise((resolve, reject)=>{
        let est={
            id: estudiante[0],
            nombre: estudiante[1],
            nota1: estudiante[2],
            nota2: estudiante[3],
            nota3: estudiante[4],
            definitiva: estudiante[5]
    
        }
    
        const duplicado= allEstudiantes.some(estudiantes=> estudiantes.id=== est.id)
    
        
        if(duplicado){
            alert(`El Id: ${est.id} ya esta en uso`)
    
        }
        else{
            allEstudiantes =[...allEstudiantes, est ]
    
        }
        
        
        
        setTimeout(()=>{
            console.log(allEstudiantes);
            resolve (allEstudiantes);
            mostrar(allEstudiantes)

        },1)



    })
    
    

}






const mostrar= array =>{

    
        
        tabla.textContent="";


        tabla.innerHTML=`
        <tr> 
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Definitiva</th>
                    <th>Acciones</th>
                </tr>`;

        array.forEach(est=>{
            const tr= document.createElement('tr');
            tr.innerHTML=`
            
            <td> <input disabled="" type="number" class="input" value="${est.id}" id="id"></td>
            <td> <input disabled="" type="text" class="input" value="${est.nombre}" id="name"></td>
            <td> <input disabled="" type="number" class="input" value="${est.nota1}" id="n1"</td>
            <td> <input disabled="" type="number" class="input" value="${est.nota2}" id="n2"</td>
            <td> <input disabled="" type="number" class="input" value="${est.nota3}" id="n3"</td>
            <td> <input disabled="" type="number" class="input" value="${est.definitiva}" id="def" </td>

            <td id="acciones"> <button id="editar" class="editar">Editar</button> <button>Eliminar</button> <button class="guardar ">Guardar</button></td>
            
        
            `

            tabla.appendChild(tr);
        
        
          
    

    })

    

    
    
    


   
}


const editar= (array)=>{
    
    
    new Promise((resolve, reject)=>{
        const acciones= document.getElementById('acciones');
        
        
        
        tabla.addEventListener('click',(e)=>{
            const contenedorAcciones= e.target.parentElement //contendor de las acciones
            const fila= e.target.parentElement.parentElement;
            
            if(e.target.classList.contains('editar')){


                
                for (let i = 1; i < 5; i++) {
                    const unidad = fila.children[i];
                    unidad.querySelector('input').disabled = false;
                }
                


            }


            if(e.target.classList.contains('guardar')){

                const upId= fila.children[0].querySelector('#id').value;
                const upNombre= fila.children[1].querySelector('#name').value;
                const upNota1= fila.children[2].querySelector('#n1').value;
                const upNota2= fila.children[3].querySelector('#n2').value;
                const upNota3= fila.children[4].querySelector('#n3').value;

                const editado= array.some(estudiantes=> estudiantes.id==upId);
                

                if(editado){
                    let estudiante= array.forEach(estudiante=>{
                        if(estudiante.id== upId){
                            estudiante.id== parseInt(upId)
                            estudiante.nombre= upNombre
                            estudiante.nota1= parseInt(upNota1)
                            estudiante.nota2= parseInt(upNota2)
                            estudiante.nota3= parseInt(upNota3)
                            const nose=[estudiante.nota1, estudiante.nota2, estudiante.nota3]

                            promedio(nose).then((def)=>{

                                estudiante.definitiva= def;
                            })
                            
                            
                            

                            console.log(estudiante)
                            return estudiante

                            

                        }

                        
                        
                        
                    })
                    
                    
                    
                    
                    
                    

                    for (let i = 1; i <= 5; i++) {
                        const unidad = fila.children[i];
                        unidad.querySelector('input').disabled = true;
                    }

                    
                    
                    
                    

                    
                    

                }else{
                    array=[...array ];

                }
                mostrar(array)
                
                resolve (array) 
                
            };

            

            
            


            
        });


        



            


        
        
        
        
        
        
        

    })
}





//--------------------------------------
function input(id, nombre,nota1,nota2,nota3){
    modal.classList.add('display')
    let notas=[nota1,nota2,nota3];


    promedio(notas).then(definitiva=>{
        let estudiante=[id, nombre, nota1, nota2, nota3, definitiva];
        return objeto(estudiante);
    

        
    }).then((array)=>{
        return editar(array), mostrar(array) ;
        
    })

    

    

    

};































