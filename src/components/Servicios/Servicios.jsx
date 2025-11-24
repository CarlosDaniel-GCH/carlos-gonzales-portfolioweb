import React from 'react';

function Servicios(){
    return(
        <div className="flex flex-col gap-5 text-gray-200">
            {/* Titulo */}
            <div className='text-lg pb-2 mb-2 border-b border-zinc-700'>Servicios</div>

            {/* Servicios Disponibles */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6 hover:border-2 hover:border-zinc-400">
                    <div className="text-4xl rounded-full bg-zinc-700 px-3 py-4">
                        <i className="fas fa-code"></i>
                    </div>
                    <span className="text-xl py-3 text-center">Diseño de Landing Page</span>
                    <span className="text-sm text-justify">
                        Creacion de sitios altamente optimizados, diseñadas para impulsar tus ventas, aumentar
                        la visibilidad de tu marca y mejorar la experiencia de tus clientes.
                        Una landing page representa una inversión inteligente, enfocada en la comodidad del usuario y en el 
                        rendimiento de tu negocio.
                    </span>
                </div>

                <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6 hover:border-2 hover:border-zinc-400">
                    <div className="text-4xl rounded-full bg-zinc-700 px-6 py-4">
                        <i className="fas fa-clipboard-list"></i>
                    </div>
                    <span className="text-xl py-3 text-center">Sistemas de Gestión de Inventario</span>
                    <span className="text-sm text-justify">
                        Desarrollo sistemas de gestión de inventario que optimicen el flujo de productos, reduzcan errores y aumenten 
                        la visibilidad de tus operaciones. Una inversión inteligente que brinda comodidad, ahorro de tiempo y contribuye 
                        a la optimización y crecimiento de tu empresa.
                    </span>
                </div>

                <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6 hover:border-2 hover:border-zinc-400">
                    <div className="text-4xl rounded-full bg-zinc-700 px-5 py-4">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <span className="text-xl py-3 text-center">Desarrollo de e-commerce</span>
                    <span className="text-sm text-justify">
                        Creo tiendas online que aumenten tus ventas, mejoren la visibilidad de tu marca y ofrezcan una experiencia 
                        de usuario fluida. Una inversión inteligente que combina comodidad, eficiencia y optimización del negocio 
                        para potenciar tu crecimiento.
                    </span>
                </div>

                <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6 hover:border-2 hover:border-zinc-400">
                    <div className="text-4xl rounded-full bg-zinc-700 px-5 py-4">
                        <i className="fas fa-drafting-compass text-4xl"></i>
                    </div>
                    <span className="text-xl py-3 text-center">Mantenimiento de Sitios Web</span>
                    <span className="text-sm text-justify">
                        Ofrezco mantenimiento integral que garantiza el funcionamiento óptimo, mejora la visibilidad y protege 
                        tu sitio. Una inversión inteligente que aporta comodidad, eficiencia y optimización del negocio para mantenerlo 
                        siempre actualizado y seguro.
                    </span>
                </div>

                <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6 hover:border-2 hover:border-zinc-400">
                    <div className="text-4xl rounded-full bg-zinc-700 px-4 py-4">
                        <i className="fas fa-rocket text-4xl"></i>
                    </div>
                    <span className="text-xl py-3 text-center">Optimizacion de Sitios Web</span>
                    <span className="text-sm text-justify">
                        Optimizo tu sitio para mejorar la velocidad, la visibilidad y la conversión, potenciando su rendimiento y 
                        efectividad. Una inversión inteligente que ofrece comodidad, eficiencia y contribuye a la optimización y 
                        crecimiento de tu negocio.
                    </span>
                </div>

                {/* A TOMAR EN CUENTA A FUTURO */}
                {/* <span>Creacion de Agentes de IA para WhatsApp</span> */}
                {/* <span>SEO(Optimizacion de Motores de Busqueda)</span> */}
            </div>
            
        </div>
    )
}

export default Servicios