import React, { useState } from 'react';

// Componentes
import TitleComponent from '../TitleComponent';
import PortfolioCard from '../PortfolioCard';
import PortfolioModal from '../PortfolioModal';

import { portfolioItems } from '../../lib/portfolio';

function Portfolio(){
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return(
        <div className='flex flex-col gap-5'>
            {/* Titulo */}
            <div>
                <TitleComponent title={"Portfolio"} />
            </div>

            {/* Proyectos */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 md:text-sm sm:text-base text-base text-gray-200">
                {
                    portfolioItems.map((items) => {
                        return(
                            <PortfolioCard
                                key={items.id}
                                title={items.title}
                                company={items.company}
                                alt={items.al}
                                image={items.image[0]}
                                status={items.status}
                                url={items.url}
                                onClick={() => openModal(items)}
                            />
                        );
                    })
                }
            </div>

            {/* Modal */}
            {selectedProject && (
                <PortfolioModal
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default Portfolio