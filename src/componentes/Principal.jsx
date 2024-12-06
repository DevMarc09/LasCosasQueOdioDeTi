import { Item } from "./Item"

export const Principal = () => {
    const arreglo=[
        {number:1,argum:'Odio la cara de tonto que pongo cuando pienso en la travesura de turno.'},
        {number:2,argum:'Odio que huelas tan jodidamente bien.'},
        {number:3,argum:'Odio cuando solo puedo verte por unos segundos y  te alcanza para cambiar mi estado de ánimo.'},
        {number:4,argum:'Odio cuando se cae algún plan porque me doy cuenta que realmente no me interesaba el plan.'},
        {number:5,argum:'Odio que te cueste tanto tomar una decisión cuando no hay mucho tiempo.'},
        {number:6,argum:'Odio que las cosas furtivas puedan ser tan excitantes.'},
        {number:7,argum:'Odio sentirme vulnerable cuando estás tan cerca, si no eres Chloe ni yo Lucifer.'},
        {number:8,argum:'Odio cuando se hace tarde y debes irte.'},
        {number:9,argum:'Odio cuando me miras, lanzas una sonrisa tímida y luego te retuerces de pena.'},
        {number:10,argum:'Odio que me hipnotice y aniquile mirar tu cabello.'},
        {number:11,argum:'Odio que escribir esto sea como cambiar de opinión mientras estoy en caída libre.'},
        {number:12,argum:'Odio que me digas que no debo perder tiempo con fisicas indecisas .'},









    ]
  return (
    
   <div className="contenedor">
   <h1>Las cosas que odio de ti</h1>
    
    {arreglo.map(odio=> <Item key={odio.number} number={odio.number} argum={odio.argum} ></Item>)}
 
   </div>
  )
}
