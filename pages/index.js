import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import NavBar from '@/components/NavBar'
import Form from '@/components/Form'
import axios from 'axios';

const preventDefault = (event) => event.preventDefault();

export default function Main() {
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
      <Form></Form>
    </div>
    </div>
    </>
  )
}