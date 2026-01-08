function ServiceGrid({ icon, title, description }){
    return(
        <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-6">
            <div className="text-4xl rounded-full bg-zinc-700 px-3 py-4">
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