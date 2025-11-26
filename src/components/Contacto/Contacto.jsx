import React, {useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbzCtPB16eadlpc3_D_Z65i_1g-CKaMSxv8XFignErNT9oUzbjcVyU3Th3-ibR1N6d2E/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      });

      alert("Mensaje enviado correctamente!");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);

      // Si el error tiene mensaje, mostrarlo en el alert
      if (error.message) {
        alert("Error al enviar el mensaje: " + error.message);
      } else {
        alert("Error al enviar el mensaje. Revisa la consola para más detalles.");
      }
    }
  };


  return (
    <div className="flex flex-col gap-10 text-gray-200">
        {/* Titulo */}
        <div className='text-lg text-gray-200 pb-2 mb-2 border-b border-zinc-700'>Contacto</div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Lado Izquierdo: Texto e Información de Contacto */}
        <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
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
                <a href="https://www.instagram.com/carlosdaniel_store/" target='_blank' className='flex items-center hover:text-red-600'><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/carlos-daniel-gonzales-chilcon/?originalSubdomain=pe" target='_blank' className='flex items-center hover:text-blue-600'><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario de Contacto */}
        <div className="lg:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Fila de Nombre y Apellido */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-xs font-medium">
                  Nombres
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-400 p-2 focus:outline-none focus:border-green-600 bg-transparent" 
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-xs font-medium">
                  Apellidos
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-400 p-2 focus:outline-none focus:border-green-600 bg-transparent" 
                />
              </div>
            </div>

            {/* Campo de Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium">
                Correo Electrónico
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-b border-gray-400 p-2 focus:outline-none focus:border-green-600 bg-transparent" 
              />
            </div>

            {/* Campo de Mensaje */}
            <div>
              <label htmlFor="message" className="block text-xs font-medium">
                Mensaje o consulta
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="7" 
                value={form.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-400 p-3 focus:outline-none focus:border-green-600 bg-transparent resize-none"
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <div className="flex justify-end pt-4">
              <button type="submit" className="py-2 px-8 text-white font-semibold rounded shadow-md bg-green-600 hover:bg-green-500">
                Enviar
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contacto