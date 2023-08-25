



const añadir= document.getElementById("añadir");
const tabla= document.getElementById("tabla");



const promedio= (arrayEstudiantes)=>{
    return new Promise((resolve, reject)=>{
        let promedio= 0;
        arrayEstudiantes.forEach((notas)=>{
            
            promedio= (promedio+notas)

        })
        promedio= promedio/arrayEstudiantes.length;

        resolve(promedio);



    })
    

}





//--------------------------------------
function input(id, nombre,nota1,nota2,nota3){
    let arrayEstudiantes=[nota1,nota2,nota3];
    

    promedio(arrayEstudiantes).then(definitiva=>{
        let estudiante={
            id: id,
            nombre: nombre,
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            definitiva: definitiva
    
        };
        arrayEstudiantes.push(estudiante);

    }).then(u=>{
        
    })


    
    

    

}






















function mostrar(arrayEstudiantes){


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

    arrayEstudiantes.forEach(est=>{
        const tr= document.createElement('tr');
        tr.innerHTML=`
        
        <td>${est.id}</td>
        <td>${est.nombre}</td>
        <td>${est.nota1}</td>
        <td>${est.nota2}</td>
        <td>${est.nota3}</td>
        <td>${est.definitiva}</td>
        <td><button id="editar">Editar</button>
            <button id="eliminar" >Eliminar</button>
            <button id="uardar" >Guardar</button>
        </td>
        `

        tabla.appendChild(tr);
        
        
    
        

    })
    console.log(arrayEstudiantes)
    


   
}





