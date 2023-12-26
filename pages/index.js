import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import BtnLogin from "@/components/BtnLogin";
import nextAuth from "next-auth";
import { useSession} from "next-auth/react";
import Router, { useRouter } from "next/router";
import PregFrec from '@/components/PregFrec'



//Funcion para eliminar datos


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

const {usuario: session, status}=useSession();
const router=useRouter();





if(status === 'authenticated'){
router.push('/dashboard')
}

  return (
    //FrontEnd
    <>
      <NavBar></NavBar>
      <BtnLogin></BtnLogin>

      <div>
        <div className="text-center">
          <h1 className="italic font-extrabold text-3xl">
            Instituto Ser Libre De Inteligencia Emocional
          </h1>
          <h3 className="font-bold">Bienvenidos</h3>
        </div>
        <p>Ser Libre se basa en la experiencia de más 10 años de servicio a la sociedad, un espacio de trabajo interdisciplinario, conformado por entrenadores especiales de diferentes zonas de la Republica Mexicana, elegidos de manera rigurosa para brindar el mejor servicio a nuestros alumnos. </p>
          <p>Ser Libre esta comprometido con la sociedad, por lo que de manera constante realiza una serie metas sociales con el fin de reestructurar los tejidos sociales y las familias.</p>
        <div className="flex flex-col items-center align-middle">
          <div className="py-5 font-extrabold italic">
            <h1>Nuestra Ubicacion</h1>
          </div>

          <div>
            <iframe
              title="Mapa"
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7003.582626929154!2d-106.067382!3d28.636016000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea435455de5e15%3A0x2ff5ea5977ebce60!2sC.%20Mariano%20Jim%C3%A9nez%201304%2C%20Obrera%2C%2031350%20Chihuahua%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1703561469523!5m2!1ses-419!2smx'
              className="w-full aspect-[4/3]"
            ></iframe>
          </div>

          <div>
            <h2 className=" text-center font-extrabold pt-8">
              Horario de Atencion
            </h2>
            <ul class="mt-2 text-lg not-italic font-semibold text-center">
              <li>Lun: 8:00–20:00</li>
              <li>Mar: 8:00–20:00</li>
              <li>Mie: 8:00–20:00</li>
              <li>Jue: 8:00–20:00</li>
              <li>Vie: 8:00–20:00</li>
              <li>Sab: 10:00–14:00</li>
              <li>Dom: Previa Cita</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex row-auto py-8">
        <div>
          <h2 className=" text-center font-extrabold py-8">
            Preguntas frecuentes
          </h2>
          <p>
            <b>
              ¿Cuánto cuesta y cuál es la duración de la consulta informativa?
            </b>
          </p>
          <p>
            La consulta informativa es totalmente gratis y dura 25 minutos,
            pero, de ser necesario, extenderemos el tiempo para tener una idea
            más concreta de tu caso particular.
          </p>
          <p>
            <b>¿Cuántas sesiones de terapia necesito?</b>
          </p>
          <p>
            Cada situación es diferente porque cada persona es única. No hay un
            número universal de terapias, como tampoco hay un único camino para
            superar todos los problemas. No obstante, hablaremos desde un
            principio para crear un plan que se adapte a tus necesidades.
          </p>
          <p>
            <b>¿Atiende también en mi ciudad?</b>
          </p>
          <p>
            Desde antes de las restricciones por la pandemia, me he
            especializado en consultas online, atendiendo a decenas de pacientes
            de distintos países. No hay ningún tipo de restricción basada la
            ciudad en la que vivas.
          </p>
          <p>
            <b>¿Necesito equipo especial para la consulta online?</b>
          </p>
          <p>
            Basta con un celular, tablet o computadora con acceso a internet. No
            necesitas un programa especial. Las sesiones las podemos hacer por
            Zoom, WhatsApp, Google Meet o cualquier aplicación similar.
          </p>
        </div>
        <PregFrec></PregFrec>
      </div>

      {/* Formulario*/}
      <div className="bg-black">
        <h3 className="text-white text-center italic font-extrabold text-xl py-8">
          Contactenos
        </h3>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          {/* Nombre */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Edad
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Edad"
              onChange={(e) => setEdad(e.target.value)}
            ></input>
          </div>

          <div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 sm:w-auto px-5 py-2.5 my-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={sendData}
            >
              Enviar
            </button>
          </div>
        </div>

        {/* Boton Enviar
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={sendData}
        >
          Enviar
        </button> */}
      </div>

      <footer className="italic text-lg font-extrabold text-center">
        Developed by Gabooo
      </footer>
    </>
  );
}