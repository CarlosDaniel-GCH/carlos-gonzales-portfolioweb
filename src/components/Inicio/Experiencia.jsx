import React from 'react'
import TitleComponent from '../TitleComponent'
import ExperienciaCard from '../ExperienciaCard'

import { experienciaItems } from '../../lib/experiencia'

function Experiencia(){
    return(
        <div className='flex flex-col gap-5'>
            <div>
                <TitleComponent title={"Experiencia"} />
            </div>

            <div className='flex justify-around text-gray-200 gap-3'>
                {
                    experienciaItems.map((items) => {
                        return(
                            <ExperienciaCard 
                                key={items.id}
                                name={items.name}
                                period={items.period}
                                image={items.image}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Experiencia