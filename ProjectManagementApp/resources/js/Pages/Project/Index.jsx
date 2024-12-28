import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ projects }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Projects
                </h2>
            }
        >
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Projects</h1>
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li className='text-gray-700 dark:text-gray-300' key={project.id}>
                            {project.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No projects available.</p>
            )}
        </AuthenticatedLayout>
    );
}
