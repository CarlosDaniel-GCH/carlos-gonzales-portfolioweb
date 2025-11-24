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

function Tecnologias(){
    return(
        <div>
            {/* Titulo */}
            <div className='text-lg text-gray-200 pb-2 mb-2 border-b border-zinc-700'>Tecnologias</div>

            {/* Lista de Tecnologias */}
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 pt-5 md:text-sm sm:text-base text-base text-gray-200">
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={Php} alt="Php" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">Php</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={JavaScript} alt="JavaScript" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">JavaScript</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={MySql} alt="MySql" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">MySql</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={Laragon} alt="Laragon" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">Laragon</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={Docker} alt="Docker" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">Docker</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={Java} alt="Java" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">Java</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={Python} alt="Python" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">Python</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={MongoDB} alt="MongoDB" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">MongoDB</h1>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={ReactLogo} alt="React" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">React</h1>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
                    <div className="size-full">
                        <img src={Tailwindcss} alt="Tailwindcss" className="size-full rounded-lg"/>
                    </div>
                    <h1 className="pt-2">Tailwindcss</h1>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias