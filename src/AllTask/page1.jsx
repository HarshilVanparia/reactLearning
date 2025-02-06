
import { useFormContext } from "./FormContext";

export function Page1  ()  {
  const { principle, setPrinciple, nextStep } = useFormContext();
  return (
    <div>
      <h2>Enter Principle Amount</h2>
      <input
        type="number"
        value={principle}
        onChange={(e) => setPrinciple(Number(e.target.value))}
      />
      <br />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export function Page2  () {
    const { rate, setRate, nextStep, prevStep } = useFormContext();
    return (
      <div>
        <h2>Enter Rate of Interest</h2>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <br />
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
};
  
export function Page3  ()  {
    const { duration, setDuration, nextStep, prevStep } = useFormContext();
    return (
      <div>
        <h2>Enter Duration (Years)</h2>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <br />
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
};
  

export function Page4  ()  {
    const { principle, rate, duration, prevStep } = useFormContext();
    const calculateTotalAmount = () => {
      return principle + (principle * rate * duration) / 100;
    };
    return (
      <div>
        <h2>Total Amount Including Interest</h2>
        <p>Total Amount: {calculateTotalAmount()}</p>
        <button onClick={prevStep}>Back</button>
      </div>
    );
};
  
export default Page1;
  

