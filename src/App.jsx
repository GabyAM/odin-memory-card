import { useEffect, useState } from "react";
import "./App.css";
import { getItems } from "./items";

function App() {
	const [items, setItems] = useState([]);
	const [cardsClicked, setCardsClicked] = useState([]);

	useEffect(() => {
		// since i'm not using an external api, i'm simulating it
		getItems().then((items) => setItems(items));
	}, []);

	return (
		<ItemsGrid
			items={items}
		></ItemsGrid>
	);
}

export default App;
