import React from 'react';
import TitleComponent from '../TitleComponent';
import ServiceGrid from '../ServiceGrid';

function Servicios(){
    return(
        <div className="flex flex-col gap-5 text-gray-200">
            {/* Titulo */}
            <div>
                <TitleComponent title={"Servicios"} />
            </div>

            {/* Servicios Disponibles */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                <ServiceGrid 
                    icon={<i className="fas fa-code"></i>} 
                    title={"Diseño de Sitios Web"}
                    description={"Creacion de sitios altamente optimizados, diseñadas para impulsar tus ventas, aumentar la visibilidad de tu marca y mejorar la experiencia de tus clientes. Un sitio web representa una inversión inteligente, enfocada en la comodidad del usuario y en el rendimiento de tu negocio."}
                />

                <ServiceGrid 
                    icon={<i className="fas fa-clipboard-list"></i>} 
                    title={"Sistemas de Gestión de Inventario"}
                    description={"Desarrollo sistemas de gestión de inventario que optimicen el flujo de productos, reduzcan errores y aumenten la visibilidad de tus operaciones. Una inversión inteligente que brinda comodidad, ahorro de tiempo y contribuye a la optimización y crecimiento de tu empresa."}
                />

                <ServiceGrid 
                    icon={<i className="fas fa-shopping-bag"></i>} 
                    title={"Desarrollo de e-commerce"}
                    description={"Creo tiendas online que aumenten tus ventas, mejoren la visibilidad de tu marca y ofrezcan una experiencia de usuario fluida. Una inversión inteligente que combina comodidad, eficiencia y optimización del negocio para potenciar tu crecimiento."}
                />

                <ServiceGrid 
                    icon={<i className="fas fa-drafting-compass text-4xl"></i>} 
                    title={"Mantenimiento de Sitios Web"}
                    description={"Ofrezco mantenimiento integral que garantiza el funcionamiento óptimo, mejora la visibilidad y protege tu sitio. Una inversión inteligente que aporta comodidad, eficiencia y optimización del negocio para mantenerlo siempre actualizado y seguro."}
                />

                <ServiceGrid 
                    icon={<i className="fas fa-rocket text-4xl"></i>} 
                    title={"Optimizacion de Sitios Web"}
                    description={"Optimizo tu sitio para mejorar la velocidad, la visibilidad y la conversión, potenciando su rendimiento y efectividad. Una inversión inteligente que ofrece comodidad, eficiencia y contribuye a la optimización y crecimiento de tu negocio."}
                />

                {/* A TOMAR EN CUENTA A FUTURO */}
                {/* <span>Creacion de Agentes de IA para WhatsApp</span> */}
                {/* <span>SEO(Optimizacion de Motores de Busqueda)</span> */}
            </div>
            
        </div>
    )
}

export default Servicios