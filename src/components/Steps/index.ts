import Steps from "./Steps";
import Step from "./Step";

const CompoundSteps = Steps as typeof Steps & {
  Step: typeof Step;
};

CompoundSteps.Step = Step;

export { CompoundSteps as default, Steps, Step };
