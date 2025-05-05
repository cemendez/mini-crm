import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, contactCount, recentInteractions }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h3 className="text-lg font-medium mb-2">
                                    Resumen
                                </h3>
                                <p className="text-3xl font-bold">
                                    {contactCount}
                                </p>
                                <p className="text-gray-600">
                                    Contactos registrados
                                </p>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h3 className="text-lg font-medium mb-2">
                                    Mini-CRM
                                </h3>
                                <p>
                                    Bienvenido al sistema de gestión de
                                    relaciones con clientes para pequeñas
                                    organizaciones.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">
                                Interacciones recientes
                            </h3>

                            {recentInteractions.length > 0 ? (
                                <div className="space-y-4">
                                    {recentInteractions.map((interaction) => (
                                        <div
                                            key={interaction.id}
                                            className="border-l-4 border-indigo-500 pl-4 py-2"
                                        >
                                            <div className="flex justify-between">
                                                <h4 className="font-semibold">
                                                    {interaction.contact.name} -{" "}
                                                    {interaction.type}
                                                </h4>
                                                <span className="text-sm text-gray-600">
                                                    {new Date(
                                                        interaction.date
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="mt-1">
                                                {interaction.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">
                                    No hay interacciones registradas aún.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
