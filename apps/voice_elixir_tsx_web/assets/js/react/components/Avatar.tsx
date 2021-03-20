import React from "react";

interface Props {
	border?: boolean;
	src: string;
	width: string;
	className?: string;
	onClick?(): void;
}

const Avatar: React.FC<Props> = ({ src, width, border, className, onClick }) => {
	return (
		<img
			src={src}
			alt="User avatar"
			className={`w-${width || "1/6"} ${
				border !== false ? "border-gray-500 border-2" : ""
			} border-radius-1/2 ${className}`}
			onClick={onClick}
		/>
	);
};

export default Avatar;
