import React from 'react'

// Componentes
import TitleComponent from '../TitleComponent'
import TecnologiasGrid from '../TecnologiasGrid'

import { tecnologias } from '../../lib/tecnologias'

function Tecnologias(){
    return(
        <div>
            <div>
                <TitleComponent title={"Tecnologias"} />
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 pt-5 md:text-sm sm:text-base text-base text-gray-200">
                {
                    tecnologias.map((items) => {
                        return(
                            <TecnologiasGrid
                                key={items.id} 
                                title={items.title} 
                                image={items.image} 
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Tecnologias