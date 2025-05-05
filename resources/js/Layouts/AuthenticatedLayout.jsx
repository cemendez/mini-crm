import React from "react";
import NavMenu from "@/Components/NavMenu";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <NavMenu user={user} />

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="flex-grow">{children}</main>

            <footer className="bg-white shadow py-4 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-sm text-gray-500">
                        Mini-CRM para Pequeñas Organizaciones &copy;{" "}
                        {new Date().getFullYear()}
                    </div>
                </div>
            </footer>
        </div>
    );
}
