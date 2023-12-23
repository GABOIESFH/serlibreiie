import { MongoClient } from "mongodb";

export default async function handler (req, res){
    const {method,body, query} =req
    const client =  MongoClient.connect(process.env.MONGODB_URI)
    const db=(await client).db();
    const alumno=db.collection("alumno");

    switch (method){
    case "POST":
        const dataAlumno={
            nombre:body.nombre,
            apellido:body.apellidos,
            correo:body.correo,
            matricula:body.matricula,
            edad:body.edad
        }
        try{
            const answer=await alumno.insertOne(dataAlumno);
            return res.status (200).json({message:"Se anadio con exito"})
        }catch(error){
            return res.status(500).json({message:"Que paso Carnal? Fallo"})
        }
        break;
        
    case "GET":
        const result = await alumno.find().toArray()
        return res.status(200).json(result)
        
        break;

    }
}