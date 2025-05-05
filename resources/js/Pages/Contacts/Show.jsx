import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ auth, contact }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        type: "",
        date: new Date().toISOString().substr(0, 10),
        description: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("interactions.store", contact.id), {
            onSuccess: () => reset("type", "description"),
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detalle de Contacto
                </h2>
            }
        >
            <Head title={`Contacto - ${contact.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between mb-6">
                                <h3 className="text-lg font-medium">
                                    Información del Contacto
                                </h3>
                                <div>
                                    <Link
                                        href={route(
                                            "contacts.edit",
                                            contact.id
                                        )}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md mr-2"
                                    >
                                        Editar
                                    </Link>
                                    <Link
                                        href={route("contacts.index")}
                                        className="px-4 py-2 bg-gray-500 text-white rounded-md"
                                    >
                                        Volver
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-semibold">Nombre:</p>
                                    <p>{contact.name}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Empresa:</p>
                                    <p>{contact.company || "-"}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Email:</p>
                                    <p>{contact.email || "-"}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Teléfono:</p>
                                    <p>{contact.phone || "-"}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold">Dirección:</p>
                                    <p>{contact.address || "-"}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold">Notas:</p>
                                    <p>{contact.notes || "-"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">
                                Registrar nueva interacción
                            </h3>

                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="type"
                                    >
                                        Tipo de interacción
                                    </label>
                                    <select
                                        id="type"
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                        value={data.type}
                                        onChange={(e) =>
                                            setData("type", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="">
                                            Seleccionar tipo...
                                        </option>
                                        <option value="Llamada">Llamada</option>
                                        <option value="Email">Email</option>
                                        <option value="Reunión">Reunión</option>
                                        <option value="Nota">Nota</option>
                                    </select>
                                    {errors.type && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.type}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="date"
                                    >
                                        Fecha
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                        value={data.date}
                                        onChange={(e) =>
                                            setData("date", e.target.value)
                                        }
                                        required
                                    />
                                    {errors.date && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.date}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="description"
                                    >
                                        Descripción
                                    </label>
                                    <textarea
                                        id="description"
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                        rows="3"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    ></textarea>
                                    {errors.description && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                                    disabled={processing}
                                >
                                    Guardar Interacción
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">
                                Historial de interacciones
                            </h3>

                            {contact.interactions.length > 0 ? (
                                <div className="space-y-4">
                                    {contact.interactions.map((interaction) => (
                                        <div
                                            key={interaction.id}
                                            className="border-l-4 border-indigo-500 pl-4 py-2"
                                        >
                                            <div className="flex justify-between">
                                                <h4 className="font-semibold">
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
                                            <div className="mt-2 flex space-x-2">
                                                <Link
                                                    href={route(
                                                        "interactions.destroy",
                                                        interaction.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="text-sm text-red-600 hover:text-red-900"
                                                >
                                                    Eliminar
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">
                                    No hay interacciones registradas con este
                                    contacto.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
