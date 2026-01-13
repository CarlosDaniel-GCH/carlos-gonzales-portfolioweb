function ServiceGrid({ icon, title, description }){
    return(
        <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6 border-zinc-700/50 transition-all duration-300 hover:border-zinc-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className=" flex justify-center items-center text-4xl w-[70px] h-[70px] rounded-full bg-zinc-700">
                {icon}
            </div>

            <span className="text-xl py-3 text-center cursor-context-menu">
                {title}
            </span>

            <span className="text-sm text-justify cursor-context-menu">
                {description}
            </span>
        </div>
    )
}

export default ServiceGrid