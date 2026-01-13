function ExperienciaCard({ name, period, image }){
    return(
        <div className='flex flex-col items-center'>
            <img src={image} alt="Soluciones Integrales JB" className='rounded-full w-36 h-36 border-2 border-gray-200 mb-2'/>
            <h1 className='w-full text-center mb-1 cursor-context-menu'>{name}</h1>
            <span className='text-[12px] text-zinc-400 cursor-context-menu'>{period}</span>
        </div>
    )
}

export default ExperienciaCard