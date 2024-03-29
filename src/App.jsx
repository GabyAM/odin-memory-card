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
	const [bestScore, setBestScore] = useState(0);

	useEffect(() => {
		// since i'm not using an external api, i'm simulating it
		getItems().then((items) => setItems(items));
	}, []);

	useEffect(() => {
		if (cardsClicked.length > bestScore) {
			setBestScore(cardsClicked.length);
		}
	}, [cardsClicked, bestScore]);

	function shuffleItems() {
		setItems(shuffle(items));
	}

	function handleCardClick(id) {
		if (cardsClicked.includes(id)) {
			setGameResult("defeat");
		} else if (cardsClicked.length === items.length - 1) {
			setCardsClicked([...cardsClicked, id]);
			setGameResult("victory");
		} else {
			playSound("button");
			setCardsClicked([...cardsClicked, id]);
			shuffleItems();
		}
	}
	function resetGame() {
		getItems().then((items) => {
			setItems(items);
			setCardsClicked([]);
			setGameResult(null);
		});
	}

	return (
		<>
			<ItemsGrid
				items={items}
				onCardClick={gameResult ? () => {} : handleCardClick}
			></ItemsGrid>
			{gameResult ? (
				<EndScreen
					result={gameResult}
					score={cardsClicked.length}
					onReset={resetGame}
				></EndScreen>
			) : (
				<div className="scores">
					<span>
						Score:{" "}
						<span className="score">{cardsClicked.length}</span>
					</span>
					<span>
						Best score: <span className="score">{bestScore}</span>
					</span>
				</div>
			)}
		</>
	);
}

export default App;
