import { ItemCard } from "./ItemCard";
import "../styles/itemsgrid.css";
export function ItemsGrid({
	items,
}) {
	return (
		<>
			<div className="items-grid">
				{items.map((item) => {
					return (
						<ItemCard
							key={item.id}
							data={item}
						></ItemCard>
					);
				})}
			</div>
		</>
	);
}
