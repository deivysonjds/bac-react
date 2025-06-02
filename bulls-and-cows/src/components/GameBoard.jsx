import GuessInput from './GuessInput';
import GuessList from './GuessList';
import useGameStore from '../store/useGameStore';

const GameBoard = () => {
  const { guesses, gameOver, won, attempts, maxAttempts, initializeGame } = useGameStore();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Game Board</h2>
        <button
          onClick={initializeGame}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          New Game
        </button>
      </div>
      
      <GuessInput />
      
      {gameOver && (
        <div className={`mt-4 p-4 rounded-lg ${won ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-semibold">
            {won 
              ? `Congratulations! You guessed the number in ${attempts} attempts!`
              : `Game Over! The secret number was not guessed in ${maxAttempts} attempts.`}
          </p>
        </div>
      )}
      
      <GuessList guesses={guesses} />
    </div>
  );
};

export default GameBoard;