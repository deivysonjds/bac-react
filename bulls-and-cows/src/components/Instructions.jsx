import toggleInstructionsVisible from "../store/toggleInstructionsVisible.js"

const Instructions = () => {
  const {visibleInstructions, toggleVisible} = toggleInstructionsVisible()

  return (
    <div onClick={toggleVisible} className="bg-white rounded-xl shadow-lg p-6 hover:cursor-pointer hover:scale-105 transform transition">
      <h3  className="text-xl font-semibold text-gray-800 mb-4">Como jogar</h3>
      {visibleInstructions && <ul className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span>Adivinhe um número de 4 dígitos sem dígitos repetidos</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Bull:</strong> Dígito correto na posição correta</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Cow:</strong> Dígito correto na posição errada</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span>você tem 10 tentativas para adivinhar o número</span>
        </li>
      </ul>}
    </div>
  );
};

export default Instructions;