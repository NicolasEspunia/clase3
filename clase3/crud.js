class Abertura {
    constructor(id,nombre,ancho,alto){
        
    this.id = id   
    this.nombre = nombre
    this.ancho = ancho
    this.alto = alto
    }
    descuento = () => {
        console.log ('descuento 10%')
    }
 }

//  const ventana1 = new Abertura ('Pedro', 5 ,4)
//  ventana2.descuento()
//  const ventana2 = new Abertura ('Juan', 3 ,4)
//  const ventana3 = new Abertura ('Ana', 2 ,4)
//  const ventana4 = new Abertura ('Sofia', 1 ,2)


//  console.log(ventana2)
 let ventanas =  JSON.parse(localStorage.getItem('ventanas'))

 if(!ventanas){
     ventanas= []
 }


 const getAll = () => {
     return ventanas
 }

 const create = (ventana) => {
     ventanas.push(ventana)
 }

 const findOne= (id) => {

    const ventanaLista = ventanas.find( marco => marco.id === id )
    if (!ventanaLista){
        throw Error('no existe ventana con ese id')
    }
    return ventanaLista
 }

 const update = (id,nombre) =>{
     const marco = findOne(id)
     marco.nombre =nombre
 }

 const remove =(id) => {
     const marco =findOne(id)
     const index = ventanas.findIndex(marco => marco.id ===id)
     if(index >= 0){
         ventana.splice(index,1)
     }

 }
 let id =prompt('id')
 let nombre =prompt ('nombre')
 let ancho =prompt ('ancho')
 let alto =prompt ('alto')

 const ventananueva = new Abertura(id,nombre,ancho,alto)
 create(ventananueva)
 let VentanasDB =getAll()
 console.log(VentanasDB)

 localStorage.setItem('ventanas',JSON.stringify(ventanas))
 //console.log(ventanas)

 //const ventana2 = new Abertura ('nico', 8,8)
 //create (ventana2)
 //console.log(getAll())
