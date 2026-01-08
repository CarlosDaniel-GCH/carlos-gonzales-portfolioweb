import React from 'react';
// Importando imagenes
import LogistixImagen from '../../assets/LogistixImagen.png';
import MyWalletImagen from '../../assets/MyWalletImagen.png';
import SolucionesIntegralesImagen from '../../assets/SolucionesIntegralesImagen.png';
import BeniElectricLandingPage from '../../assets/BeniElectricLandingPage.png';

// Componentes
import TitleComponent from '../TitleComponent';
import PortfolioCard from '../PortfolioCard';

function Portfolio(){
    return(
        <div className='flex flex-col gap-5'>
            {/* Titulo */}
            <div>
                <TitleComponent title={"Portfolio"} />
            </div>

            {/* Proyectos */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 md:text-sm sm:text-base text-base text-gray-200">
                <PortfolioCard 
                    title={"Logistix Sistema de Gestión- Beni Electric SAC"}
                    alt={"Logistix"}
                    image={LogistixImagen}
                />

                <PortfolioCard 
                    title={"E-commerce - Soluciones Integrales JB"}
                    alt={"e-commerce JB"}
                    image={SolucionesIntegralesImagen}
                />

                <PortfolioCard 
                    title={"MyWallet - Proyecto Personal"}
                    alt={"MyWallet"}
                    image={MyWalletImagen}
                />

                <PortfolioCard 
                    title={"Landing Page - Beni Electric SAC"}
                    alt={"Landing Page Beni Electric"}
                    image={BeniElectricLandingPage}
                />
            </div>
        </div>
    )
}

export default Portfolio