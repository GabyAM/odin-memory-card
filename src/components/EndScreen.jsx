import "../styles/endscreen.css";
import { playSound } from "../audio";

export function EndScreen({ result, score, onReset }) {
	playSound(result);
	return (
		<div className={`end-screen ${result}`}>
			<div className="content">
				<h1>You {result === "victory" ? "Won" : " Lost"}!</h1>
				{result === "defeat" && (
					<span>
						Score: <span className="score">{score}</span>
					</span>
				)}
				<button
					className="main-button"
					onClick={() => {
						playSound("button");
						onReset();
					}}
				>
					Restart
				</button>
			</div>
		</div>
	);
}
