import React from 'react';
// Importando Imagenes
import fotoPerfil from '../../assets/Foto de perfil.jpeg';
import LaravelLogo from '../../assets/Laravel Logo.png';
import Tailwindcss from '../../assets/Tailwind Logo.png';
import MySql from '../../assets/MySql Logo.png';
import JavaScript from '../../assets/JavaScript Logo.png';
import TypeScriptLogo from '../../assets/TypeScriptLogo.png'
import ReactLogo from '../../assets/React Logo.png';
import Github from '../../assets/GithubLogo.png';
import Git from '../../assets/GitLogo.png' 

// Componentes
import Stack from '../Stack';

function Inicio(){
    return(
        <div className='md:flex sm:block gap-10 md:pt-14 sm:pt-8 pt-6'>

            <section>
                <div className='flex justify-center sm:mb-4'>
                    <div className='w-60 h-64 rounded-full p-1 bg-gray-200'>
                        <img src={fotoPerfil} alt="Foto de Perfil" className='rounded-full size-full mx-auto'/>
                    </div>
                </div>
                <div className='border-b border-zinc-700'>
                    <span className="flex justify-center text-xl text-gray-200 pb-3">Carlos Daniel Gonzales Chilcon</span>
                </div>
                <div className='flex flex-row justify-evenly text-gray-200 text-sm p-2 mt-2 rounded-lg leading-relaxed bg-zinc-800 gap-2'>
                    <a href="" download className='flex justify-center items-center bg-yellow-600 hover:bg-yellow-500 rounded-md w-28 py-1'>Descargar CV</a>
                    <a href="https://web.whatsapp.com/" target='_blank' className='flex justify-center items-center bg-green-600 hover:bg-green-500 rounded-md w-8 py-1'><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/carlos-daniel-gonzales-chilcon/?originalSubdomain=pe" target='_blank' className='flex justify-center items-center bg-blue-700 hover:bg-blue-600 rounded-md w-8 py-1'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/carlosdaniel_gch22/" target='_blank' className='flex justify-center items-center bg-red-700 hover:bg-red-600 rounded-md w-8 py-1'><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className='flex flex-col text-gray-200 py-2 pb-3 mt-2 rounded-lg leading-relaxed bg-zinc-800'>
                    <div className="text-lg pb-2 px-3 ">
                        Información:
                    </div>

                    <div className="flex flex-col gap-2 md:text-sm sm:text-lg px-3">
                        <div className='flex items-center gap-1'>
                            <h1 className='py-1 px-2 rounded-md bg-blue-800 text-white'>Ciudad</h1> <span className='text-gray-200'>Lima</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h1 className='py-1 px-2 rounded-md bg-red-800 text-white'>País</h1> <span className='text-gray-200'>Perú</span>
                        </div>
                        
                        <div className='flex flex-col items-left gap-1'>
                            <h1 className="py-1 px-2 max-w-[58px] rounded-md bg-green-800 text-white">Correo</h1>
                            <span className="text-gray-200">carlosdanielchilcon19@gmail.com</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-12 md:pt-1 sm:pt-1 pt-10 w-full py-4'>
                <div className='flex flex-col gap-5 text-gray-200'>
                    <div className='text-lg border-b border-zinc-700'>Sobre mi</div>
                    <p className='text-sm text-justify leading-loose'>
                        Ingeniero de Software con experiencia práctica en el desarrollo de sistemas, aplicaciones web, arquitectura de sistemas y patrones de diseño. 
                        Conocimientos solidos en PHP, Laravel, JavaScript, React, Docker,Node.js, HTML, Css, TailwindCSS, MySQL, tambien Git y GitHub. 
                        Busco una posicion como desarrollador backend/fullstack para aplicar mis habilidades sobre soluciones eficientes y escalables.
                        Tengo 22 años y soy graduado de la carrera de Ingenieria de Software con IA en el año 2025 en la institución Senati sede Independencia.
                    </p>
                </div>
                
                <div className="flex flex-col gap-5">
                    <div className='text-lg text-gray-200 mb-5 border-b border-zinc-700'>Stack Favorito</div>
                    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 text-gray-200'>
                        <Stack name={"React"} image={ReactLogo} alt={"React"} />
                        <Stack name={"Laravel"} image={LaravelLogo} alt={"Laravel"} />
                        <Stack name={"Tailwindcss"} image={Tailwindcss} alt={"Tailwindcss"} />
                        <Stack name={"MySql"} image={MySql} alt={"MySql"} />
                        <Stack name={"JavaScript"} image={JavaScript} alt={"JavaScript"} />
                        <Stack name={"TypeScript"} image={TypeScriptLogo} alt={"TypeScript"} />
                        <Stack name={"Git"} image={Git} alt={"Git"} />
                        <Stack name={"Github"} image={Github} alt={"Github"} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Inicio