function TecnologiasGrid({ title, image }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-3 pt-4 hover:border-2 hover:border-zinc-400">
        <div className="size-full">
        <img src={image} alt="React" className="size-full rounded-lg" />
        </div>
        <h1 className="pt-2 text-base">{title}</h1>
    </div>
  );
}

export default TecnologiasGrid;
