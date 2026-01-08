import React from 'react';

const Contacto = () => {
  return (
    <div className="flex flex-col gap-10 text-gray-200">
      {/* Titulo */}
      <div className='text-lg text-gray-200 pb-2 mb-2 border-b border-zinc-700'>Contacto</div>
              
      {/* Texto e Información de Contacto */}
      <div className="flex flex-col pb-8">
          <h1 className="text-4xl mb-6 font-bold">
            Contactame
          </h1>
          <p className="text-lg mb-8">
            "Construyendo soluciones una linea de código a la vez."
          </p>
          <p className="mb-10">
            Si quieres colaborar o contratar alguno de mis servicios, ¡no dudes en enviarme un mensaje!
          </p>

          {/* Iconos de Contacto */}
          <div className="space-y-6">
            
            {/* Ícono de Email */}
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-xl"></i>
              <p className="text-sm">
                carlosdanielchilcon19@gmail.com
              </p>
            </div>
            
            {/* Iconos Sociales */}
            <div className="flex items-center space-x-6 text-2xl">
              <div className="flex space-x-4">
                <a href="https://web.whatsapp.com/" target='_blank' className='flex items-center hover:text-green-600'><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/carlosdaniel_gch22/" target='_blank' className='flex items-center hover:text-red-600'><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/carlos-daniel-gonzales-chilcon/?originalSubdomain=pe" target='_blank' className='flex items-center hover:text-blue-600'><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
};

export default Contacto