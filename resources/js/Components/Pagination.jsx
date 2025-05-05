import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    // Si no hay links o solo hay una página, no mostramos paginación
    if (links.length <= 3) {
        return null;
    }

    return (
        <div className="flex flex-wrap -mb-1">
            {links.map((link, key) => {
                // Ignoramos los textos "previous" y "next"
                if (link.url === null) {
                    return (
                        <span
                            key={key}
                            className="mr-1 mb-1 px-4 py-2 text-sm leading-4 text-gray-400 border rounded"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    );
                }

                return (
                    <Link
                        key={key}
                        href={link.url}
                        className={`mr-1 mb-1 px-4 py-2 text-sm leading-4 border rounded hover:bg-white focus:outline-none focus:border-indigo-500 focus:text-indigo-500 ${
                            link.active
                                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                                : "bg-white text-gray-700"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </div>
    );
}
