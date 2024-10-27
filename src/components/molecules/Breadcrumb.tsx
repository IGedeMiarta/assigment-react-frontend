import React from "react";
import { FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";
import { BsFillFolderFill } from "react-icons/bs";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex items-center space-x-2 text-gray-500 text-sm">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <a
                            href={item.href}
                            className={`hover:text-blue-600 ${index === items.length - 1 ? "text-gray-700 font-semibold" : ""}`}
                        >
                            {item.label === "Home" ? <BsFillFolderFill className="inline-block" /> : item.label}
                        </a>
                        {index < items.length - 1 && <FiChevronRight className="mx-1" />}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Breadcrumb;
