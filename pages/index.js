
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import NavBar from '@/components/NavBar'
import Form from '@/components/Form'
import axios from 'axios';
import { useEffect, useState } from 'react'








const eliminarData =async(id)=>{
  console.log('eliminarData', id);
  try{
  const resultado = await axios.delete(`api/testmongo?id=${id}`);
  console.log(resultado);
  //toast.success('Datos eliminados');
  getData();
  }catch(error){
      console.log(error);
    //  toast.error("carnal paso algo")
  }
}



// export async function getServerSideProps(){
//   const res = await axios.get('http://localhost:3000/api/testmongo')
//   const data =await res.data
//   return{
//   props:{
//   data
//     }
//    }
//   }


export default function Main() {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}]);
  const [event,setEvent]=useState()
  const [alumno, setAlumno] = useState({})

  useEffect(() => {
    console.log('useEffect')

    getData();
}, [])

const getData = async () => {
    const res = await axios.get('/api/testmongo');
    const data = await res.data;
    setData(data);
    console.log(data)
} 

  
  return (
    <>
    <NavBar></NavBar>
    
    <div>
      <div>
      <h1>Instituto Ser Libre De Inteligencia Emocional</h1>
      <h3>Bienvenidos</h3>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
      </div>
    <div className="flex justify-center">
          <h1>Nuestra Ubicacion</h1>
          <br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1229.1654237940943!2d-106.06692977094428!3d28.635841577239855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea435455de5e15%3A0x2ff5ea5977ebce60!2sC.%20Mariano%20Jim%C3%A9nez%201304%2C%20Obrera%2C%2031350%20Chihuahua%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1693525556708!5m2!1ses-419!2smx" className='width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'></iframe>
    </div>
            <div>
                <Form></Form>
            </div>
    </div>

 
<main className="h-screen bg-white p-4">
        {data.map((alumno, i) => (
          <div className="flex items-center  justify-center border-b-2 py-2" key={i}>
            <div className="text-black font-bold mr-4 ml-4">Edad: {alumno.edad}</div>
            <div className="text-black  mr-4 ml-4">Nombre: {alumno.nombre}</div>
            <div className="text-sm text-black mr-4 ml-4">Apellidos: {alumno.apellido}</div>
            {/* boton para eliminar */}
            <button className="bg-red-500 text-white font-bold px-2 py-1 hover:bg-red-800 transition duration-300" onClick={() => eliminarData(alumno.PKid)}>
              Eliminar
            </button>
            <button className="bg-blue-500 text-white font-bold px-2 py-1 hover:bg-blue-800 transition duration-300" onClick={() => 
            (
              setAlumno(alumno),
              setOpen(true)
            )}>
              Editar
            </button>
          </div>
        ))}
       
      </main>
  
    </>
  )
}

 {/* <div className='flex'>
    {loading ? (
    <button className="bg-red-500" onClick={()=>setLoading(false)}> Detener </button>)
    :(<button className="bg-green-500" onClick={()=>setLoading(true)}>Iniciar</button>)}
      </div> */}
      
//const preventDefault = (event) => event.preventDefault();

// const sendData = async () => {
//   setLoading(true);
//   console.log('sendData');
//   console.log(nombre, apellidos, correo, matricula, edad);
//   if(nombre === '' || apellidos === '' || correo === '' || matricula === '' || edad === ''){
//       toast.error('Llena todos los campos');
//       setLoading(false);
//       return;
//   }

//   try{

//       const resultado = await axios.post('/api/testmongo', {
//           nombre: nombre,
//           apellidos: apellidos,
//           correo: correo,
//           matricula: matricula,
//           edad: edad
//       })
//       toast.success('Datos enviados');
//       console.log(resultado);
//       getData();
//   } catch (error) {
//       console.log(error);
//   }

//   setLoading(false);
// }

{/* Barra de llenado */}
    {/* <h1 className="flex flex-col text-blue-500 mt-2 p-3 font-bold">Porfavor inserta los datos que deseas guardar   </h1>
  <div className="flex justify-center items-center h-70 bg-yellow-100 flex-col border border-black">
    <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
    <input type="text" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)}/>
    <input type="text" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}/>
    <input type="text" placeholder="Matricula" onChange={(e) => setMatricula(e.target.value)}/>
    <input type="text" placeholder="Edad" onChange={(e) => setEdad(e.target.value)}/> */}

    {/* </div> */}
  {/* boton de carga */}
  {/* {loading ? (
    <button className="bg-red-500 text-black py-2 px-4 mt-4 mt-1 rounded-md border border-black" disabled> Detener </button>
  ) : (
    <button className="bg-green-500 text-black py-2 px-4 mt-4 mt-1 rounded-md border border-black hover:bg-green-700 transition duration-300" onClick={sendData}>Iniciar</button>
  )} */}