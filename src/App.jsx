import { useEffect, useState } from "react";
import "./App.css";
import { getItems } from "./items";
import { shuffle } from "./utilities";
import { ItemsGrid } from "./components/ItemsGrid";
import { playSound } from "./audio";
import { EndScreen } from "./components/EndScreen";

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
			setGameResult("defeat");
		} else if (cardsClicked.length === 2 /*items.length - 1*/) {
			setGameResult("victory");
		} else {
			playSound("button");
			setCardsClicked([...cardsClicked, id]);
			shuffleItems();
		}
	}
	function resetGame() {
		setCardsClicked([]);
		setGameResult(null);
	}

	return (
		<>
			<ItemsGrid
				items={items}
				onCardClick={gameResult ? () => {} : handleCardClick}
			></ItemsGrid>
			{gameResult && (
				<EndScreen
					result={gameResult}
					score={cardsClicked.length}
					onReset={resetGame}
				></EndScreen>
			)}
		</>
	);
}

export default App;
