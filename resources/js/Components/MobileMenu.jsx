import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function MobileMenu({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="sm:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
                <svg
                    className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <div className={`${open ? "block" : "hidden"} pt-2 pb-3 space-y-1`}>
                <ResponsiveNavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Dashboard
                </ResponsiveNavLink>
                <ResponsiveNavLink
                    href={route("contacts.index")}
                    active={
                        route().current("contacts.index") ||
                        route().current("contacts.*")
                    }
                >
                    Contactos
                </ResponsiveNavLink>
                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {user?.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">
                            {user?.email}
                        </div>
                    </div>
                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Cerrar sesión
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ResponsiveNavLink({
    method = "get",
    as = "a",
    href,
    active = false,
    children,
}) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active
                    ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            }`}
        >
            {children}
        </Link>
    );
}
