import { useEffect, useState } from "react";
import "./App.css";
import { getItems } from "./items";
import { shuffle } from "./utilities";
import { ItemsGrid } from "./components/ItemsGrid";

function App() {
	const [items, setItems] = useState([]);
	const [cardsClicked, setCardsClicked] = useState([]);

	useEffect(() => {
		// since i'm not using an external api, i'm simulating it
		getItems().then((items) => setItems(items));
	}, []);

	function shuffleItems() {
		setItems(shuffle(items));
	}

	function handleCardClick(id) {
		if (cardsClicked.includes(id)) {
			setCardsClicked([]);
		} else {
			setCardsClicked([...cardsClicked, id]);
		}
		shuffleItems();
	}
	return <ItemsGrid items={items} onCardClick={handleCardClick}></ItemsGrid>;
}

export default App;
