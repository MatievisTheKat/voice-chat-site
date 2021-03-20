import React from "react";

import { Props as TabProps } from "./Tabs";

interface Props extends TabProps {
	menuOpen: boolean;
}

const NavBar: React.FC<Props> = ({ formatTabs, navTabs, menuOpen, children }) => {
	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">{children}</div>
			</div>

			<div className={`${menuOpen ? "block" : "hidden"} sm:hidden`}>
				<div className="px-2 pt-2 pb-3">{formatTabs(true, navTabs)}</div>
			</div>
		</nav>
	);
};

export default NavBar;
