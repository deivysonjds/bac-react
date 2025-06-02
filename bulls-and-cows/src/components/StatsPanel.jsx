import useGameStore from '../store/useGameStore';

const StatsPanel = () => {
  const { attempts, maxAttempts } = useGameStore();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Game Stats</h3>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-500">Attempts</p>
          <p className="text-2xl font-bold text-indigo-600">
            {attempts} / {maxAttempts}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${(attempts / maxAttempts) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;