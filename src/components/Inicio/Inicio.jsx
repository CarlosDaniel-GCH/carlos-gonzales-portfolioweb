import React from 'react';
// Importando Imagenes
import fotoPerfil from '../../assets/Foto de perfil.jpeg';
import LaravelLogo from '../../assets/Laravel Logo.png';
import Tailwindcss from '../../assets/Tailwind Logo.png';
import MySql from '../../assets/MySql Logo.png';
import JavaScript from '../../assets/JavaScript Logo.png';
import ReactLogo from '../../assets/React Logo.png';
import GitGithub from '../../assets/Git-Github.png';

function Contacto(){
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
                    <div className="text-lg pb-2 px-3 ">Contacto:</div>
                    <div className="flex flex-col gap-2 md:text-sm sm:text-lg px-3">
                        <h1 className="text-blue-500">Ciudad: <span className="text-gray-200">Lima</span></h1>
                        <h1 className="text-red-500">Pais: <span className="text-gray-200">Perú</span></h1>
                        {/* <h1 className="text-green-500">Whattsaap: <span className="text-gray-200">+51 987 654 321</span></h1> */}
                        <h1 className="text-green-500">Correo: <span className="text-gray-200">carlosdanielchilcon19@gmail.com</span></h1>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-12 md:pt-1 sm:pt-1 pt-10 w-full py-4'>
                <div className='flex flex-col gap-5 text-gray-200'>
                    <div className='text-lg border-b border-zinc-700'>Sobre mi</div>
                    <p className='text-sm text-justify leading-loose'>
                        Tengo experiencia práctica en el desarrollo de aplicaciones web, implementación de arquitectura monolítica, cliente-servidor y microservicios. 
                        Dominio de PHP con Laravel, JavaScript con Node.js, HTML, Css + TailwindCSS y MySQL, utilizo Git/GitHub en mis proyectos. 
                        Busco una posicion como desarrollador backend/fullstack para aplicar mis habilidades sobre soluciones eficientes y escalables.
                        Tengo 22 años y soy graduado de la carrera de Ingenieria de Software con IA en el año 2025 en la institución Senati sede Independencia.
                    </p>
                </div>
                
                <div className="flex flex-col gap-5">
                    <div className='text-lg text-gray-200 pb-2 border-b border-zinc-700'>Stack Favorito</div>
                    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 text-gray-200'>
                        <div className='flex flex-col items-center'>
                            <img src={LaravelLogo} alt="Laravel" className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
                            <span>Laravel</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={Tailwindcss} alt="Tailwindcss" className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
                            <span>Tailwindcss</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={MySql} alt="MySql" className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
                            <span>MySql</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={JavaScript} alt="JavaScript" className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
                            <span>JavaScript</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={ReactLogo} alt="React" className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
                            <span>React</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={GitGithub} alt="" className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
                            <span>Git/Github</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacto