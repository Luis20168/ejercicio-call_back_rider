
const miButton=document.getElementById('miButton');
const miDiv =document.getElementById('miDiv');



const setText=data=>{
    miDiv.textContent= data;
}

const getData= c1=>{
    return new Promise((resuelve1,rechazar)=>{
        setText("puedo jugar");
    setTimeout(()=>{
        resuelve1(true)
        

    },2000)

    })
    
}

const showData=()=>{
    return new Promise((resuelve1,rechazar)=>{
        setText("Esperando autorizacion");

        setTimeout(()=>{
            resuelve1({jugador: "Luis",})
        }, 2000)

    })
    
    
}




miButton.addEventListener("click", async([])=>{
    let jugador= null;
    const permitido= await getData();


    if(permitido){
        jugador= await showData() 
    }


    setText(jugador.name)
})