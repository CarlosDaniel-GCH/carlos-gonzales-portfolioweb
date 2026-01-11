function ServiceGrid({ icon, title, description }){
    return(
        <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6">
            <div className=" flex justify-center items-center text-4xl w-[70px] h-[70px] rounded-full bg-zinc-700">
                {icon}
            </div>

            <span className="text-xl py-3 text-center">
                {title}
            </span>

            <span className="text-sm text-justify">
                {description}
            </span>
        </div>
    )
}

export default ServiceGrid