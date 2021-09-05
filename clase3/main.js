let ventanas =[
    {
        "id" : "nico",
        "ancho" : 1,
        "alto" : 2
    },
    {
        "id" : "laura",
        "ancho": 2,
        "alto" : 2
    }
    
]
//console.log(ventanas)

for (const ventana of ventanas ){
    console.log(ventana)

    localStorage.setItem(ventana.id,JSON.stringify(ventana))
}

let fromStorage =JSON.parse(localStorage.getItem("nico"))

//resultado del ancho = 1 en la consola
//console.log(fromStorage.ancho)