import React from 'react';
// Importando imagenes
import LogistixImagen from '../../assets/LogistixImagen.png';
import MyWalletImagen from '../../assets/MyWalletImagen.png';
import SolucionesIntegralesImagen from '../../assets/SolucionesIntegralesImagen.png';
import BeniElectricLandingPage from '../../assets/BeniElectricLandingPage.png';

function Portfolio(){
    return(
        <div className='flex flex-col gap-5'>
            {/* Titulo */}
            <div className='text-lg text-gray-200 pb-2 mb-2 border-b border-zinc-700'>Portfolio</div>

            {/* Proyectos */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 md:text-sm sm:text-base text-base text-gray-200">
                {/* Logistix Sistema de Gestión de Inventario */}
                <div className='flex flex-col items-center gap-2 px-2 py-3 bg-zinc-800 rounded-md hover:border-2 hover:border-zinc-400'>
                    <img src={LogistixImagen} alt="Logistix" className='w-80 h-38  rounded-md pt-2'/>
                    <h1>Logistix Sistema de Gestión- Beni Electric Sac</h1>
                </div>

                <div className='flex flex-col items-center gap-2 px-2 py-3 bg-zinc-800 rounded-md hover:border-2 hover:border-zinc-400'>
                    <img src={SolucionesIntegralesImagen} alt="Carrito JB" className='w-80 h-38 rounded-md pt-2'/>
                    <h1>Carrito de Compras - Soluciones Integrales JB</h1>
                </div>

                <div className='flex flex-col items-center gap-2 px-2 py-3 bg-zinc-800 rounded-md hover:border-2 hover:border-zinc-400'>
                    <img src={MyWalletImagen} alt="MyWallet" className='w-80 h-38 rounded-md pt-2'/>
                    <h1>MyWallet - Proyecto Personal</h1>
                </div>

                <div className='flex flex-col items-center gap-2 px-2 py-3 bg-zinc-800 rounded-md hover:border-2 hover:border-zinc-400'>
                    <img src={BeniElectricLandingPage} alt="Landing Page" className='w-80 h-38 rounded-md pt-2'/>
                    <h1>Landing Page - Beni Electric SAC</h1>
                </div>
            </div>
        </div>
    )
}

export default Portfolio