import "../styles/tooltip.css";

export function Tooltip({ translate, text }) {
	return (
		<div
			style={{
				transform: `translate(${translate.x + 30}px, ${
					translate.y - 30
				}px)`,
			}}
			className="tooltip"
		>
			<span>{text}</span>
		</div>
	);
}
