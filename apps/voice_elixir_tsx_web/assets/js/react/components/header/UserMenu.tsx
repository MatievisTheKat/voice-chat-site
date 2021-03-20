import React from "react";
import Avatar from "../Avatar";

import UserLinks from "./UserLinks";

interface Props {
	open: boolean;
	setOpen(open?: boolean): void;
}

const UserMenu: React.FC<Props> = ({ open, setOpen }) => {
	return (
		<div className="ml-3 relative">
			<div>
				<button
					className="user-menu-trigger flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
					aria-label="User menu"
					aria-haspopup="true"
					onClick={() => setOpen()}>
					<Avatar
						className="rounded-full user-menu-trigger"
						width="8"
						src="https://api.matievisthekat.dev/avatars/default"
						border={false}
					/>
				</button>
			</div>
			<UserLinks open={open} />
		</div>
	);
};

export default UserMenu;
