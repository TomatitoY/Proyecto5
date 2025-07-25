import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    name:"Shaiel",
    edad: 19,
    calificacion:4.4
})

export const test =()=>{
    console.log("Llamando al contorl desde app")
} // poder llamar al controlador en app
// log para mostrar en consola 


