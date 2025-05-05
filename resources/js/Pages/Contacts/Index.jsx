import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";

export default function Index({ auth, contacts, filters }) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || "",
    });

    function submit(e) {
        e.preventDefault();
        get(route("contacts.index"), { preserveState: true });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Contactos
                </h2>
            }
        >
            <Head title="Contactos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between mb-6">
                                <form
                                    onSubmit={submit}
                                    className="flex items-center"
                                >
                                    <input
                                        type="text"
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        placeholder="Buscar contactos..."
                                        value={data.search}
                                        onChange={(e) =>
                                            setData("search", e.target.value)
                                        }
                                    />
                                    <button
                                        type="submit"
                                        className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-md"
                                        disabled={processing}
                                    >
                                        Buscar
                                    </button>
                                </form>
                                <Link
                                    href={route("contacts.create")}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                                >
                                    Nuevo Contacto
                                </Link>
                            </div>

                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Empresa
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Teléfono
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {contacts.data.map((contact) => (
                                        <tr key={contact.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Link
                                                    href={route(
                                                        "contacts.show",
                                                        contact.id
                                                    )}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    {contact.name}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {contact.company || "-"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {contact.email || "-"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {contact.phone || "-"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    href={route(
                                                        "contacts.edit",
                                                        contact.id
                                                    )}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "contacts.destroy",
                                                        contact.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Eliminar
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination class="mt-6" links={contacts.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
