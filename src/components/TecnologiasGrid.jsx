function TecnologiasGrid({ title, image, alt }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 border border-zinc-700/50 transition-all duration-300 hover:border-zinc-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="size-full">
          <img src={image} alt={alt} className="size-full rounded-lg" />
        </div>
        <h1 className="pt-2 text-base text-zinc-100">{title}</h1>
    </div>
  );
}

export default TecnologiasGrid;
