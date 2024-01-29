import { ItemCard } from "./ItemCard";
import "../styles/itemsgrid.css";
import { useEffect, useState } from "react";
import { Tooltip } from "./Tooltip";

export function ItemsGrid({ items, onCardClick }) {
	const [isHovering, setIsHovering] = useState(false);
	const [tooltipText, setTooltipText] = useState("");
	const [tooltipPosition, setTooltipPosition] = useState({
		x: 0,
		y: 0,
	});
	function handleHover(text) {
		setTooltipText(text);
		setIsHovering(true);
	}
	function handleMouseMove(e) {
		setTooltipPosition({ x: e.clientX, y: e.clientY });
	}
	useEffect(() => {
		if (isHovering) {
			document.addEventListener("mousemove", handleMouseMove);
		} else {
			document.removeEventListener("mousemove", handleMouseMove);
		}
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isHovering]);

	return (
		<>
			<div className="items-grid">
				{items.map((item) => {
					return (
						<ItemCard
							key={item.id}
							data={item}
							onClick={() => onCardClick(item.id)}
							onMouseEnter={() => {
								handleHover(item.title);
							}}
							onMouseLeave={() => {
								setIsHovering(false);
							}}
						></ItemCard>
					);
				})}
			</div>
			{isHovering && (
				<Tooltip
					translate={tooltipPosition}
					text={tooltipText}
				></Tooltip>
			)}
		</>
	);
}
