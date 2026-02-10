import React from 'react';

import fotoPerfil from '../../assets/Foto de perfil.jpeg';
import { StackFavorito } from '../../lib/stackFavorito';
import curriculum from '../../assets/cv/Carlos Daniel Gonzales Chilcón - Curriculum.pdf'

// Componentes
import TitleComponent from '../TitleComponent'
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
                    <span className="flex justify-center text-xl text-gray-200 pb-3 cursor-context-menu">Carlos Daniel Gonzales Chilcon</span>
                </div>
                <div className='flex flex-row justify-evenly text-gray-200 p-2 mt-2 text-base rounded-lg leading-relaxed bg-zinc-800 gap-2'>
                    <a href={curriculum} download className='flex justify-center items-center bg-yellow-600 hover:bg-yellow-500 rounded-md w-28 py-1'>Descargar CV</a>
                    <a href="https://web.whatsapp.com/" target='_blank' className='flex justify-center items-center bg-green-600 hover:bg-green-500 rounded-md w-8 py-1 text-lg'><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/carlos-daniel-gonzales-chilcon/?originalSubdomain=pe" target='_blank' className='flex justify-center items-center bg-blue-700 hover:bg-blue-600 rounded-md w-8 py-1 text-lg'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/carlosdaniel_dev/" target='_blank' className='flex justify-center items-center bg-red-700 hover:bg-red-600 rounded-md w-8 py-1 text-lg'><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className='flex flex-col text-gray-200 py-2 pb-3 mt-2 rounded-lg leading-relaxed bg-zinc-800 cursor-context-menu'>
                    <div className="text-lg pb-2 px-3 ">
                        Información:
                    </div>

                    <div className="flex flex-col gap-2 md:text-sm sm:text-lg px-3">
                        <div className='flex items-center gap-1'>
                            <h1 className='flex justify-center py-1 px-2 rounded-md bg-blue-800 text-white'>Ciudad</h1> <span className='text-gray-200'>Lima</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h1 className='flex justify-center py-1 px-2 rounded-md bg-red-800 text-white'>País</h1> <span className='text-gray-200'>Perú</span>
                        </div>
                        
                        <div className='flex flex-col items-left gap-1'>
                            <h1 className="flex justify-center py-1 px-2 max-w-[58px] rounded-md bg-green-800 text-white">Correo</h1>
                            <span className="text-gray-200">carlosdanielchilcon19@gmail.com</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-12 md:pt-1 sm:pt-1 pt-10 w-full py-4'>
                <div className='flex flex-col gap-3 text-gray-200'>
                    <TitleComponent title={"Sobre mi"} />
                    
                    <p className='text-sm leading-loose cursor-context-menu'>
                        Ingeniero de Software graduado de SENATI con 1.5 años de experiencia técnica transformando requerimientos de negocio 
                        en soluciones digitales escalables. Mi enfoque se centra en la entrega puntual de productos de alta calidad, destacándome 
                        por mi responsabilidad, puntualidad y aprendizaje continuo.
                        Más allá de la escritura de código, me especializo en ofrecer soluciones eficientes que optimizan procesos, aplicando arquitecturas 
                        sólidas y patrones de diseño en ecosistemas Fullstack (especialmente Laravel, VueJS y MySQL). Poseo una mentalidad analítica orientada 
                        a la escalabilidad y el rendimiento, garantizando siempre el uso de buenas prácticas y flujos de trabajo ágiles bajo entornos Github y Git.
                    </p>
                </div>
                
                <div className="flex flex-col gap-8">
                    <TitleComponent title={"Stack Favorito"} />

                    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 text-gray-200'>                        
                        {
                            StackFavorito.map((data) => {
                                return (
                                    <Stack key={data.id} name={data.name} image={data.image} alt={data.alt} />
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Inicio