import { createContext, useContext, useState } from "react";

const VolumeContext = createContext();

// eslint-disable-next-line react/prop-types
const VolumeProvider = ({ children }) => {
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculateVolume = () => {
    setResult(Number(length) * Number(breadth) * Number(height));
  };

  return (
    <VolumeContext.Provider value={{ length, setLength, breadth, setBreadth, height, setHeight, result, handleCalculateVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

const VolumeFinder = () => {
  const { length, setLength, breadth, setBreadth, height, setHeight, result, handleCalculateVolume } = useContext(VolumeContext);

  return (
    <div className="my-4">
      <h2>Find Volume (L × B × H)</h2>
      <div className="mb-4">
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Enter Length"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={breadth}
          onChange={(e) => setBreadth(e.target.value)}
          placeholder="Enter Breadth"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter Height"
          className="border p-2"
        />
      </div>
      <button onClick={handleCalculateVolume} className="bg-blue-500 text-white px-4 py-2">
        Calculate Volume
      </button>
      {result !== null && <p className="mt-4">Volume: {result}</p>}
    </div>
  );
};

const VolumeFInder = () => (
  <VolumeProvider>
    <VolumeFinder />
  </VolumeProvider>
);

export default VolumeFInder;