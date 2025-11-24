import React from 'react';
// Importando imagenes
import BeniElectricSac from '../../assets/BeniElectricSac.png';
import SolucionesIntegralesJB from '../../assets/SolucionesIntegralesJB.jpeg';

function Experiencia(){
    return(
        <div className='flex flex-col gap-5'>
            {/* Titulo */}
            <div className='text-lg text-gray-200 pb-2 mb-2 border-b border-zinc-700'>Experiencia</div>

            {/* Experiencia */}
            <div className='flex justify-around text-gray-200 gap-3'>
                <div className='flex flex-col items-center'>
                    <img src={BeniElectricSac} alt="Beni Electric SAC" className='rounded-full w-36 h-36 border-2 border-gray-200'/>
                    <h1>Corporación Beni Electric Sac</h1>
                </div>

                <div className='flex flex-col items-center'>
                    <img src={SolucionesIntegralesJB} alt="Soluciones Integrales JB" className='rounded-full w-36 h-36 border-2 border-gray-200'/>
                    <h1>Soluciones Integrales JB</h1>
                </div>
            </div>

            {/* Contenedor en GRID para cuando este en mas empresas */}
            {/* <div className='grid md:grid-cols-4 sm:grid-cols-2'>
                <div className='flex flex-col items-center mt-3'>
                    <img src={BeniElectricSac} alt="Beni Electric SAC" className='rounded-full w-36 h-36 border-2 border-gray-200'/>
                    <h1>Corporación Beni Electric Sac</h1>
                </div>

                <div className='flex flex-col items-center mt-3'>
                    <img src={SolucionesIntegralesJB} alt="Soluciones Integrales JB" className='rounded-full w-36 h-36 border-2 border-gray-200'/>
                    <h1>Soluciones Integrales JB</h1>
                </div>
            </div> */}

            
        </div>
    )
}

export default Experiencia