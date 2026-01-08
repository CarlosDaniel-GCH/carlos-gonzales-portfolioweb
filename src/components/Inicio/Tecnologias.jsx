import React from 'react';
// Importando Imagenes
import Php from '../../assets/php Logo.png';
import JavaScript from '../../assets/JavaScript Logo.png';
import MySql from '../../assets/MySql Logo.png';
import Laragon from '../../assets/Laragon Logo.jpeg';
import Docker from '../../assets/Docker Logo.png';
import Java from '../../assets/Java Logo.png';
import Python from '../../assets/Python Logo.jpeg';
import MongoDB from '../../assets/MongoDB Logo.png';
import ReactLogo from '../../assets/React Logo.png';
import Tailwindcss from '../../assets/Tailwind Logo.png';
import AstroLogo from '../../assets/Astro Logo.png'
import LaravelLogo from '../../assets/Laravel Logo.png'

// Componentes
import TitleComponent from '../TitleComponent';
import TecnologiasGrid from '../TecnologiasGrid';

function Tecnologias(){
    return(
        <div>
            {/* Titulo */}
            <div>
                <TitleComponent title={"Tecnologias"} />
            </div>

            {/* Lista de Tecnologias */}
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 pt-5 md:text-sm sm:text-base text-base text-gray-200">
                <TecnologiasGrid title={"React"} image={ReactLogo} />
                <TecnologiasGrid title={"Astro"} image={AstroLogo} />
                <TecnologiasGrid title={"Laravel"} image={LaravelLogo} />
                <TecnologiasGrid title={"PHP"} image={Php} />
                <TecnologiasGrid title={"JavaScript"} image={JavaScript} />
                <TecnologiasGrid title={"MySql"} image={MySql} />
                <TecnologiasGrid title={"MongoDB"} image={MongoDB} />
                <TecnologiasGrid title={"Laragon"} image={Laragon} />
                <TecnologiasGrid title={"Docker"} image={Docker} />
                <TecnologiasGrid title={"Java"} image={Java} />
                <TecnologiasGrid title={"Python"} image={Python} />
                <TecnologiasGrid title={"Tailwindcss"} image={Tailwindcss} />
            </div>
        </div>
    )
}

export default Tecnologias