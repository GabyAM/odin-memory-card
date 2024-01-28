import "../styles/itemcard.css";

export function ItemCard({
	data,
	return (
		<button
			className="item-card"
		>
			<div className="image-container">
				<img src={data.image}></img>
			</div>
		</button>
	);
}
