import { create } from 'zustand';

const useGameStore = create((set) => ({
  secretNumber: '',
  guesses: [],
  gameOver: false,
  attempts: 0,
  maxAttempts: 10,
  
  initializeGame: () => {
    const digits = [];
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString();
      if (!digits.includes(digit)) {
        digits.push(digit);
      }
    }
    set({
      secretNumber: digits.join(''),
      guesses: [],
      gameOver: false,
      attempts: 0
    });
  },
  
  submitGuess: (guess) => {
    set((state) => {
      if (state.gameOver || guess.length !== 4 || state.attempts >= state.maxAttempts) {
        return {};
      }
      
      const bulls = [...guess].filter((d, i) => d === state.secretNumber[i]).length;
      const cows = [...guess].filter((d, i) => 
        state.secretNumber.includes(d) && d !== state.secretNumber[i]
      ).length;
      
      const newGuess = {
        guess,
        bulls,
        cows,
        attempt: state.attempts + 1
      };
      
      const gameOver = bulls === 4 || state.attempts + 1 >= state.maxAttempts;
      
      return {
        guesses: [...state.guesses, newGuess],
        attempts: state.attempts + 1,
        gameOver,
        won: bulls === 4
      };
    });
  }
}));

export default useGameStore;