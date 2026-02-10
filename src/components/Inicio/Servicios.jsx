import React from 'react';
import TitleComponent from '../TitleComponent';
import ServiceGrid from '../ServiceGrid';
import { servicesItems } from '../../lib/services';

function Servicios(){
    return(
        <div className="flex flex-col gap-5 text-gray-200">
            <div>
                <TitleComponent title={"Servicios"} />
            </div>

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
                {/* Creacion de Agentes de IA para WhatsApp */}
                {/* SEO(Optimizacion de Motores de Busqueda) */}
            </div>
            
        </div>
    )
}

export default Servicios