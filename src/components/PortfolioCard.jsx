function PortfolioCard({ title, alt, image }) {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-3 bg-zinc-800 rounded-md">
        <img
            src={image}
            alt={alt}
            className="w-80 h-38 rounded-md pt-2"
        />
        <h1>{title}</h1>
    </div>
  );
}

export default PortfolioCard;
