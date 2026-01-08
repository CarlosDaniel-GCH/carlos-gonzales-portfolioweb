import React from 'react';
// Importando imagenes
import BeniElectricSac from '../../assets/BeniElectricSac.png';
import SolucionesIntegralesJB from '../../assets/SolucionesIntegralesJB.jpeg';

// Componentes
import ExperienciaCard from '../ExperienciaCard';

function Experiencia(){
    return(
        <div className='flex flex-col gap-5'>
            {/* Titulo */}
            <div className='text-lg text-gray-200 pb-2 mb-2 border-b border-zinc-700'>
                Experiencia
            </div>

            {/* Experiencia */}
            <div className='flex justify-around text-gray-200 gap-3'>
                <ExperienciaCard 
                    name={"Corporación Beni Electric SAC"}
                    period={"1 sept 2025 - 16 dic 2025"}
                    image={BeniElectricSac}
                />

                <ExperienciaCard 
                    name={"Soluciones Integrales JB"}
                    period={"15 jul 2024 - 4 jun 2025"}
                    image={SolucionesIntegralesJB}
                />
            </div>
        </div>
    )
}

export default Experiencia