import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function NavigationMenu() {
    const { url } = usePage();

    // Función para determinar si una ruta está activa
    const isActive = (path) => {
        return url.startsWith(path)
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white";
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-bold text-xl">
                                Mini-CRM
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href={route("dashboard")}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                                        "/dashboard"
                                    )}`}
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route("contacts.index")}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                                        "/contacts"
                                    )}`}
                                >
                                    Contactos
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link
                                href={route("profile.edit")}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Perfil
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Cerrar Sesión
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">
                                Abrir menú principal
                            </span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href={route("dashboard")}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                            "/dashboard"
                        )}`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={route("contacts.index")}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                            "/contacts"
                        )}`}
                    >
                        Contactos
                    </Link>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="px-2 space-y-1">
                        <Link
                            href={route("profile.edit")}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                            Perfil
                        </Link>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                            Cerrar Sesión
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
