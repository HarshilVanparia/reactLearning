/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [principle, setPrinciple] = useState(10000);
  const [rate, setRate] = useState(7);
  const [duration, setDuration] = useState(1);
  
  useEffect(() => {
    console.log("Form Data Updated:", { principle, rate, duration });
  }, [principle, rate, duration]);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <FormContext.Provider value={{ step, setStep, principle, setPrinciple, rate, setRate, duration, setDuration, nextStep, prevStep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);