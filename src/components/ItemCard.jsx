import "../styles/itemcard.css";

export function ItemCard({
	data,
	onClick,
	return (
		<button
			className="item-card"
			onClick={onClick}
		>
			<div className="image-container">
				<img src={data.image}></img>
			</div>
		</button>
	);
}
