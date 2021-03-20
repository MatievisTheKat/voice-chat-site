import React, { ReactNode } from "react";

export interface Props {
	navTabs: any[];
	formatTabs(sm: boolean, navTabs: Tab[]): ReactNode;
}
export interface Tab {
	name: string;
	slug: string;
}

const Tabs: React.FC<Props> = ({ formatTabs, navTabs }) => {
	return (
		<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
			<div className="flex-shrink-0">
				<img className="block lg:hidden h-8 w-auto" src="/images/logo.webp" alt="Logo" />
				<img className="hidden lg:block h-8 w-auto" src="/images/logo.webp" alt="Logo" />
			</div>
			<div className="hidden sm:block sm:ml-6">
				<div className="flex">{formatTabs(false, navTabs)}</div>
			</div>
		</div>
	);
};

export default Tabs;
