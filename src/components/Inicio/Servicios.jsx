import React from 'react';
import TitleComponent from '../TitleComponent';
import ServiceGrid from '../ServiceGrid';

import { servicesItems } from '../../lib/services';

function Servicios(){
    return(
        <div className="flex flex-col gap-5 text-gray-200">
            {/* Titulo */}
            <div>
                <TitleComponent title={"Servicios"} />
            </div>

            {/* Servicios Disponibles */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                {
                    servicesItems.map((items) => {
                        return(
                            <ServiceGrid
                                key={items.id}
                                icon={<i className={items.icon}></i>}
                                title={items.title}
                                description={items.description}
                            />
                        );
                    })
                }

                {/* A TOMAR EN CUENTA A FUTURO */}
                {/* <span>Creacion de Agentes de IA para WhatsApp</span> */}
                {/* <span>SEO(Optimizacion de Motores de Busqueda)</span> */}
            </div>
            
        </div>
    )
}

export default Servicios