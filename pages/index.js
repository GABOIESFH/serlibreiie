import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import NavBar from '@/components/NavBar'
import Form from '@/components/Form'
import axios from 'axios';
import { useEffect, useState } from 'react'

const preventDefault = (event) => event.preventDefault();

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

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}]);
  // const [loading, setLoading] = useState(false);

  return (
    <>
    <NavBar></NavBar>
    <div>
      <div>
      <p>texto de prueba</p>
      <p>texto de prueba</p>
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

    {/* Barra de llenado */}
    <h1 className="flex flex-col text-blue-500 mt-2 p-3 font-bold">Porfavor inserta los datos que deseas guardar   </h1>
  <div className="flex justify-center items-center h-70 bg-yellow-100 flex-col border border-black">
    <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
    <input type="text" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)}/>
    <input type="text" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}/>
    <input type="text" placeholder="Matricula" onChange={(e) => setMatricula(e.target.value)}/>
    <input type="text" placeholder="Edad" onChange={(e) => setEdad(e.target.value)}/>
  </div>
  {/* boton de carga */}
  {/* {loading ? (
    <button className="bg-red-500 text-black py-2 px-4 mt-4 mt-1 rounded-md border border-black" disabled> Detener </button>
  ) : (
    <button className="bg-green-500 text-black py-2 px-4 mt-4 mt-1 rounded-md border border-black hover:bg-green-700 transition duration-300" onClick={sendData}>Iniciar</button>
  )} */}
    </>
  )
}