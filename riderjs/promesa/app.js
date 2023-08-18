const miButton=document.getElementById('miButton');
const miDiv=document.getElementById('miDiv');



const setText=data=>{
    miDiv.textContent= data;
}

const getData= c1=>{
    setText("puedo jugar");
    setTimeout(()=>{
        c1(true)
        

    },2000)
}

const showData=c2=>{
    setText("Esperando autorizacion");
    setTimeout(()=>{
        c2({jugador: "Luis",})
    }, 2000)
}




miButton.addEventListener("click", ()=>{
    getData(permitido=>{
        if(permitido){
            showData(user=>{
                setText(user.jugador)
                
            })

        }
    });
})