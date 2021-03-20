import React from "react";
import { Link } from "react-router-dom";

const UserLinks: React.FC<{ open: boolean }> = ({ open }) => {
	const pathname = window.location.pathname;

	return (
		<div className={open ? "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" : "hidden"}>
			<div className="py-1 rounded-md bg-white shadow-xs">
				<Link
					to={`/register?continueTo=${pathname}`}
					className="block px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
					role="menuitem">
					Register
				</Link>
				<Link
					to={`/login?continueTo=${pathname}`}
					className="block px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
					role="menuitem">
					Login
				</Link>
			</div>
		</div>
	);
};

export default UserLinks;
