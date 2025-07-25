import { Schema, model } from "mongoose";
// model = tabla

const EsquemaAlumnos = new Schema({
    name:String,
    edad:Number,
    calificacion:Number
}) // creando una estructura de una tabla 

export const TablaAlumnos = new model("Reprobados", EsquemaAlumnos) // primero va el nombre y despues el esquema

