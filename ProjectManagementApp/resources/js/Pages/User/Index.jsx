import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ users }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Users
                </h2>
            }
        >
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">All Users</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="text-gray-700 dark:text-gray-300"
                        >
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-700 dark:text-gray-300">No users found.</p>
            )}
        </AuthenticatedLayout>
    );
}
