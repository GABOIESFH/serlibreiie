import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import BtnLogin from "@/components/BtnLogin";
import nextAuth from "next-auth";



export default function Main() {
  //Declaracion de constantes
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}]);
  const [event, setEvent] = useState();
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [matricula, setMatricula] = useState("");
  const [edad, setEdad] = useState("");
  const [alumno, setAlumno] = useState({});

  //Primera carga de back
  useEffect(() => {
    console.log("useEffect");

    getData();
  }, []);

  //Obtener datos
  const getData = async () => {
    const res = await axios.get("/api/testmongo");
    const data = await res.data;
    setData(data);
    console.log(data);
  };

  //Funcion para agregar datos
  const sendData = async () => {
    setLoading(true);
    console.log("sendData");
    console.log(nombre, apellidos, correo, matricula, edad);
    if (
      nombre === "" ||
      apellidos === "" ||
      correo === "" ||
      matricula === "" ||
      edad === ""
    ) {
      //toast.error('Llena todos los campos');
      console.log("falta un dato")
      setLoading(false);
      return;
    }

    try {
      const resultado = await axios.post("/api/testmongo", {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        matricula: matricula,
        edad: edad,
      });
      // toast.success('Datos enviados');
      console.log(resultado);
      getData();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const eliminarData = async (_id) => {


    if (!_id) {
      console.error("ID está indefinido");
      //toast.error("Error al eliminar los datos");
      return;
    }

    try {

      console.log(_id);
      const resultado = await axios.delete(`/api/testmongo?id=${_id}`);
      console.log(resultado.data); 
      //toast.success("Datos eliminados con éxito");
      getData();
    } catch (error) {
      console.error(error);
      //toast.error("Carnal pasó algo");
    }
  };

  

  return (
    //FrontEnd
    <>
    <NavBar></NavBar>
    <BtnLogin></BtnLogin>
      
      <div>
        <div>
          <h1 className="text-center font-extrabold text-8xl py-10">Bienvenido Administrador</h1>
          
        </div>
        
       
      </div>

      {/* Formulario Grid Dos columnas */}
      <div className="bg-black">
     
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            {/* Nombre */}
            <div>
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Su Nombre"
                onChange={(e) => setNombre(e.target.value)}
              ></input>
            </div>


            {/* Apellido */}
            <div>
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Apellido
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Su Apellido"
                onChange={(e) => setApellidos(e.target.value)}
              ></input>
            </div>


            {/*Telefono*/}
            <div>
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Telefono
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Telefono"
                onChange={(e) => setMatricula(e.target.value)}
              ></input>
            </div>


            {/* E-mail */}
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correo Electronico
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Su Correo"
                onChange={(e) => setCorreo(e.target.value)}
              ></input>
            </div>

            <div>
              <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Edad
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Edad"
                onChange={(e) => setEdad(e.target.value)}
              ></input>
            </div>
          </div>

          {/* Boton Enviar */}
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sendData}
          >
            Enviar
          </button>
        
      </div>

      {/* Mostrar datos */}
      <main className="h-screen bg-white p-4">
        {data.map((alumno, i) => (
          <div
            className="flex items-center  justify-center border-b-2 py-2"
            key={i}
          >
            <div className="text-black font-bold mr-4 ml-4">
              Nombre: {alumno.nombre}
            </div>
            <div className="text-sm text-black mr-4 ml-4">
              Apellidos: {alumno.apellido}
            </div>
            <div className="text-black font-bold mr-4 ml-4">
              Edad: {alumno.edad}
            </div>
            <div className="text-black font-bold mr-4 ml-4">
              Telefono: {alumno.matricula}
            </div>
            <div className="text-black font-bold mr-4 ml-4">
              Correo: {alumno.correo}
            </div>

            {/*Boton para eliminar */}
            <button
              className="bg-red-500 text-white font-bold px-2 py-1 hover:bg-red-800 transition duration-300"
              onClick={() => eliminarData(alumno._id)}
            >
              Eliminar
            </button>
            <button
              className="bg-blue-500 text-white font-bold px-2 py-1 hover:bg-blue-800 transition duration-300"
              onClick={() => (setAlumno(alumno), setOpen(true))}
            >
              Editar
            </button>
          </div>
        ))}
      </main>

      <footer className="italic text-lg font-extrabold text-center">
        Developed by Gabooo
      </footer>
    </>
  );
}

