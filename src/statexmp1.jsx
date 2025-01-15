import { useState } from "react";
function StateExamp1() {
  const [name, setname] = useState(null);
  const [age, setAge] = useState(null);
  const [color, setColor] = useState("red");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>

      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
      <input
        onChange={(e) => setAge(Number(e.target.value))}
        value={age}
        type="number"
      />
      <div>
        <div onChange={handleColorChange} >
          <label>
            <input type="radio" name="color" value="blue"checked={color === "blue"}/>
            Blue
          </label>
          <label>
            <input type="radio" name="color" value="yellow" checked={color === "yellow"}/>
            Yellow
          </label>
          <label>
            <input type="radio" name="color" value="green" checked={color === "green"}/>
            Green
          </label>
          
        </div>
      </div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
}

export default StateExamp1;