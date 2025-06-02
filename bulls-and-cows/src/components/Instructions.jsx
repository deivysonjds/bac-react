import toggleInstructionsVisible from "../store/toggleInstructionsVisible.js"

const Instructions = () => {
  const {visibleInstructions, toggleVisible} = toggleInstructionsVisible()

  return (
    <div onClick={toggleVisible} className="bg-white rounded-xl shadow-lg p-6 hover:cursor-pointer hover:scale-105 transform transition">
      <h3  className="text-xl font-semibold text-gray-800 mb-4">How to Play</h3>
      {visibleInstructions && <ul className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span>Guess a 4-digit number with no repeating digits</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Bull:</strong> Correct digit in the correct position</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Cow:</strong> Correct digit in the wrong position</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span>You have 10 attempts to guess the number</span>
        </li>
      </ul>}
    </div>
  );
};

export default Instructions;