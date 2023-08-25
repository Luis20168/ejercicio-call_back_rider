
let arrayEstudiantes=[];

function datos(id,nombre,nota1,nota2,nota3,definitiva){
    this.id= id
    this.nombre= nombre
    this.nota1= nota1
    this.nota2= nota2
    this.nota3=nota3
    this.definitiva =definitiva

}

const añadir= document.getElementById("añadir");
const tabla= document.getElementById("tabla");



añadir.addEventListener('click', ()=>{
    let estudiante= new datos('1','luis', '5','5','5','5');
    arrayEstudiantes.push(estudiante);
    mostrar(estudiante);
   

    
    
    



});
const delet=document.getElementById('delete');

delet.addEventListener('click', ()=>{
    for(let i=0 ; i<arrayEstudiantes.length; i++) {
        arrayEstudiantes.pop(i)
        
    };
    console.log(arrayEstudiantes)
    mostrar();

})
    






function mostrar(){


    tabla.innerHTML='';

    arrayEstudiantes.forEach(est=>{
        const tr= document.createElement('tr');
        tr.innerHTML= `
        

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
        
        console.log(arrayEstudiantes)
    
        

    })
    


   
}





