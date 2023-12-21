import NavBar from '@/components/NavBar'

export default function Acerca(){
    return(
        <>
        <NavBar></NavBar>
        <main className='h-scren w-screen bg-black'>
        

        <h2 className='mt-6 text-2xl italic font-bold text-white'>Historia</h2>
        <p className='text-base not-italic font-semibold text-white text-justify'>PsicoAsesor nace como un proyecto confromado por terapeutas y entrenadores de vida con mas de 10 años de experiencia impartiendo talleres y entrenamientos vivenciales con enfoque en Psicoterapia Gestalt mediante el manual Vivir Libre desarrollado por Bob Trask inspirando personas desde 1975 a encontrar su máximo potencial mediante la Aceptación, Respecto, Afecto y Soporte.</p>

        <h2 className='mt-6 text-2xl italic font-bold text-white'>Vision</h2>
        <p className='text-base not-italic font-semibold text-white text-justify'>Atender con eficacia, responsabilidad y sentido humanitario los problemas psicológicos que se presentan en las diferentes áreas del bienestar y desarrollo social en las que el comportamiento del individuo reviste esencial importancia para la vida en sociedad, tanto en los ámbitos local y regional como en el nacional.</p>

        <h2 className='mt-6 text-2xl italic font-bold text-white'>Mision</h2>
        <p className='text-base not-italic font-semibold text-white text-justify'>Brindar una atención psicológica oportuna y eficaz a los pacientes jóvenes y adultos con problemas de estrés, ansiedad y depresión en todas sus dimensiones, por medio de procesos de asistencia psicológica inmediata (intervención en crisis, asesorías en profundidad, psicoterapia individual y talleres de grupo), orientados a mejorar su calidad de vida y permitir a su vez, el desarrollo de competencias clave para su desenvolvimiento feliz en la vida. Nuestro enfoque proactivo para el desarrollo de mejores prácticas y métodos eficaces de tratamiento nos ayudará a lograr nuestra razón de ser.</p>

        </main>
        </>
    )
}