import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ tasks }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    All Tasks
                </h2>
            }
        >
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">All Tasks</h1>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="text-gray-700 dark:text-gray-300"
                        >
                            {task.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-700 dark:text-gray-300">No tasks available.</p>
            )}
        </AuthenticatedLayout>
    );
}
