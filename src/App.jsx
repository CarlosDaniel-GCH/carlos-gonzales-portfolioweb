import React, { useState, useEffect } from 'react';
import Inicio from './components/Inicio/Inicio';
import Experiencia from './components/Experiencia/Experiencia';
import Portfolio from './components/Portfolio/Portfolio';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';

function App() {
  // LOGICA DEL MENU LATERAL
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado (abrir / cerrar)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // LOGICA PARA QUE EL NAVBAR
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // Scroll > 0 → navbar fijo arriba
      } else {
        setIsSticky(false); // Scroll en top → navbar en su lugar normal
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      {/* El borde exterior de la página, solo visible en escritorios (md:) */}
      <div className="min-h-screen md:border md:rounded-md md:border-zinc-700 md:p-9">

        {/*
        =========================================================
        MENU DE ESCRITORIO:
        Visible desde escritorio
        =========================================================
        */}
        <div className={`${isSticky ? "fixed w-screen max-w-full right-0 px-11 top-0 z-50" : "relative md:w-full md:max-w-6xl"}  hidden sm:flex justify-between bg-zinc-900 text-gray-200 md:text-base sm:text-sm text-base border-t border-b border-zinc-700 py-3 px-2 `}>
          <button className="hover:text-zinc-400 transition-colors"><i className="fa-solid fa-user-shield mr-1"></i> <a href="#inicio">Inicio</a></button>
          <button className="hover:text-zinc-400 transition-colors"><i className="fa-solid fa-trophy mr-1"></i> <a href="#experiencia">Experiencia</a></button>
          <button className="hover:text-zinc-400 transition-colors"><i className="fa-solid fa-images mr-1"></i> <a href="#portfolio">Portfolio</a></button>
          <button className="hover:text-zinc-400 transition-colors"><i className="fa-solid fa-code mr-1"></i> <a href="#tecnologias">Tecnologias</a></button>
          <button className="hover:text-zinc-400 transition-colors"><i className="fa-solid fa-handshake mr-1"></i> <a href="#servicios">Servicios</a></button>
          <button className="hover:text-zinc-400 transition-colors"><i className="fa-solid fa-paper-plane mr-1"></i> <a href="#contacto">Contact</a></button>
        </div>
        
        {/*
        =========================================================
        ENCABEZADO MÓVIL
        Visible solo en responsive
        =========================================================
        */}
        <div className="flex sm:hidden justify-start py-1 px-2 border-t border-b border-zinc-700">
          
          {/* BOTÓN HAMBURGUESA: Dispara el menú lateral */}
          <button 
            className="text-gray-200 py-3 px-2 hover:text-white transition-colors"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
          <h1 className='flex items-center text-lg text-gray-200 pl-3'>Bienvenido a mi Portfolio Web!</h1>
        </div>

        {/*
        =========================================================
        MENÚ LATERAL:
        Visible solo en responsive
        =========================================================
        */}
        <div 
          className={`
            sm:hidden fixed left-0 top-0 w-64 h-screen bg-zinc-950 z-50 p-4
            flex flex-col space-y-4 text-gray-200 shadow-2xl
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : ' -translate-x-72 '}
          `}>
          {/* TÍTULO */}
          <div className='flex justify-between items-center border-b border-zinc-500 pb-4 py-6'>
             <span className='text-lg font-bold'>PORTFOLIO WEB</span>
          </div>

          {/* Botones del menú lateral */}
          <button onClick={toggleMenu} className="text-left p-2 hover:bg-zinc-700 rounded transition-colors"><i className="fa-solid fa-user-shield mr-2"></i> <a href="#inicio">Inicio</a></button>
          <button onClick={toggleMenu} className="text-left p-2 hover:bg-zinc-700 rounded transition-colors"><i className="fa-solid fa-trophy mr-2"></i> <a href="#experiencia">Experiencia</a></button>
          <button onClick={toggleMenu} className="text-left p-2 hover:bg-zinc-700 rounded transition-colors"><i className="fa-solid fa-images mr-2"></i> <a href="#portfolio">Portfolio</a></button>
          <button onClick={toggleMenu} className="text-left p-2 hover:bg-zinc-700 rounded transition-colors"><i className="fa-solid fa-code mr-2"></i> <a href="#tecnologias">Tecnologias</a></button>
          <button onClick={toggleMenu} className="text-left p-2 hover:bg-zinc-700 rounded transition-colors"><i className="fa-solid fa-handshake mr-2"></i> <a href="#servicios">Servicios</a></button>
          <button onClick={toggleMenu} className="text-left p-2 hover:bg-zinc-700 rounded transition-colors"><i className="fa-solid fa-paper-plane mr-2"></i> <a href="#contacto">Contact</a></button>
        </div>
        
        {/*
        =========================================================
        OVERLAY (Sombra de fondo) ⚫
        Aparece solo cuando 'isMenuOpen' es true.
        =========================================================
        */}
        {isMenuOpen && (
            <div 
                className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden" 
                onClick={toggleMenu} // Cierra el menú si se hace clic en la sombra
            ></div>
        )}

        {/* Contenido Principal */}
        <div className="flex flex-col mt-4 text-gray-400">
            {/* Aquí va el contenido principal de la página */}
            <div id='inicio'>
              <Inicio />
            </div>

            <div id='experiencia' className='pt-16'>
              <Experiencia/>
            </div>

            <div id='portfolio' className='pt-16'>
              <Portfolio/>
            </div>

            <div id='tecnologias' className='pt-16'>
              <Tecnologias/>
            </div>

            <div id='servicios' className='pt-16'>
              <Servicios/>
            </div>

            <div id='contacto' className='pt-16'>
              <Contacto/>
            </div>
         </div>

      </div>
    </div>
  );
}

export default App;