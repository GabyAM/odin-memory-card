import { useEffect, useState } from "react";
import "./App.css";
import { getItems } from "./items";
import { shuffle } from "./utilities";
import { ItemsGrid } from "./components/ItemsGrid";

function App() {
	const [items, setItems] = useState([]);
	const [cardsClicked, setCardsClicked] = useState([]);
	const [gameResult, setGameResult] = useState(null);
	useEffect(() => {
		// since i'm not using an external api, i'm simulating it
		getItems().then((items) => setItems(items));
	}, []);

	function shuffleItems() {
		setItems(shuffle(items));
	}

	function handleCardClick(id) {
		if (cardsClicked.includes(id)) {
			setGameResult("lose");
		} else if (cardsClicked.length === 2 /*items.length - 1*/) {
			setGameResult("win");
		} else {
			setCardsClicked([...cardsClicked, id]);
			shuffleItems();
		}
	}
	return (
		<>
			<ItemsGrid
				items={items}
				onCardClick={gameResult ? () => {} : handleCardClick}
			></ItemsGrid>
			;{gameResult && <h3 style={{ color: "white" }}>{gameResult}</h3>}
		</>
	);
}

export default App;
