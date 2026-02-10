import { useEffect, useState } from "react";

function PortfolioModal({ project, onClose }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const nextImage = () => {
        setCurrent((prev) =>
            prev === project.image.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrent((prev) =>
            prev === 0 ? project.image.length - 1 : prev - 1
        );
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-zinc-900 p-6 rounded-lg max-w-3xl w-full relative">

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-white bg-zinc-800 py-1 px-2 rounded-full border border-zinc-400 z-[100]"
                >
                    ✕
                </button>

                {project.image?.length > 0 && (
                    <div className="relative mb-4">
                        <img
                            src={project.image[current]}
                            alt={`${project.title} ${current + 1}`}
                            className="rounded w-full"
                        />

                        <div className="flex justify-center gap-2 mt-2">
                            {project.image.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2 h-2 rounded-full cursor-pointer ${
                                        index === current ? "bg-white" : "bg-gray-500"
                                    }`}
                                />
                            ))}
                        </div>

                        {project.image.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </div>
                )}

                <h2 className="text-gray-200 text-2xl font-bold mb-1">
                    {project.title}
                </h2>

                <p className="text-gray-300">
                    {project.company}
                </p>

                <p className="text-gray-300 text-sm mt-3 mb-5">
                    {project.description}
                </p>

                <div className="flex justify-between sm:flex-row md:flex-row flex-col gap-6">
                    <div className="flex gap-4">
                        {project.icon?.map((Icon, index) => (
                            <img 
                                key={index} 
                                src={Icon} 
                                alt="Tecnología"
                                className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all"
                            />
                        ))}
                    </div>

                    <div className="flex justify-center">
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-700"
                            >
                                Ver proyecto
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioModal;