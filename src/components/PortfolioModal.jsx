import { useEffect } from "react";

function PortfolioModal({ project, onClose }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-zinc-900 p-6 rounded-lg max-w-3xl w-full relative">
                
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-white hover:text-white bg-zinc-800 py-1 px-2 rounded-full border border-zinc-400"
                >
                    ✕
                </button>

                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded mb-4"
                />

                <h2 className="text-gray-200 text-2xl font-bold mb-1 cursor-context-menu">
                    {project.title}
                </h2>

                <p className="text-gray-300 cursor-context-menu">
                    {project.company}
                </p>

                <p className="text-gray-300 text-sm my-4 cursor-context-menu">
                    {project.description}
                </p>
                
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
    );
}

export default PortfolioModal;