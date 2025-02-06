import { FormProvider, useFormContext } from "./FormContext";
import Page1, { Page2, Page3, Page4 } from "./page1";

const FormContainer = () => {
  const { step } = useFormContext();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {step === 1 && <Page1 />}
      {step === 2 && <Page2 />}
      {step === 3 && <Page3 />}
      {step === 4 && <Page4 />}
    </div>
  );
};

const ThreeStageForm = () => {
  return (
    <FormProvider>
      <FormContainer />
    </FormProvider>
  );
};

export default ThreeStageForm;
