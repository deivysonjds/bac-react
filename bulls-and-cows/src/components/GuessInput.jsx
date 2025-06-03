"use client";
import { useState } from 'react';
import useGameStore from '../store/useGameStore';

const GuessInput = () => {
  const [guess, setGuess] = useState('');
  const { gameOver, attempts, maxAttempts, submitGuess } = useGameStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 4 && !gameOver && attempts < maxAttempts) {
      submitGuess(guess);
      setGuess('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.replace(/\D/g, '').slice(0, 4))}
          placeholder="Enter 4-digit guess"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          disabled={gameOver || attempts >= maxAttempts}
        />
        <button
          type="submit"
          disabled={guess.length !== 4 || gameOver || attempts >= maxAttempts}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Tentar
        </button>
      </div>
    </form>
  );
};

export default GuessInput;