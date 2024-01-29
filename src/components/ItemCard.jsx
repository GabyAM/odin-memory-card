import "../styles/itemcard.css";

export function ItemCard({ data, onClick, onMouseEnter, onMouseLeave }) {
	return (
		<button
			className="item-card"
			onClick={onClick}
			onPointerEnter={onMouseEnter}
			onPointerLeave={onMouseLeave}
		>
			<div className="image-container">
				<img src={data.image}></img>
			</div>
		</button>
	);
}
