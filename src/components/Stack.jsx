function Stack({ name, image, alt }){
    return(
        <div className='flex flex-col items-center'>
            <img src={image} alt={alt} className='rounded-full w-24 h-24 border-2 border-zinc-400'/>
            <span>{name}</span>
        </div>
    )
}

export default Stack