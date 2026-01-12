function PortfolioCard({ title, company, alt, image, status, url }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-zinc-800 border border-zinc-800 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="aspect-video w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            {company}
          </p>
          <h3 className="text-lg font-semibold text-white leading-tight">
            {title}
          </h3>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-px flex-1 bg-zinc-700 group-hover:bg-zinc-600 transition-colors"></span>
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter cursor-pointer">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
                {status}
              </a>
            ) : (
              status
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard
