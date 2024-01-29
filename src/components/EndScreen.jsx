export function EndScreen({ result, score, onReset }) {
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
					}}
				>
					Restart
				</button>
			</div>
		</div>
	);
}
