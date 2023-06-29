import { useState, type ReactElement } from "react";

/**
 * useMultiStepForm is a custom hook used to manage the state of a.. you guessed it! Multi-Step Form.
 * @param steps List of React Components (Forms)
 * @returns currentStepIndex, step: steps[currentStepIndex], transitionTo, next, back
 */
export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentSetindex] = useState(0);

  const next = () => {
    setCurrentSetindex((index) => {
      if (index >= steps.length - 1) {
        return 1;
      }
      return index + 1;
    });
  };

  const back = () => {
    setCurrentSetindex((index) => {
      if (index <= 0) {
        return index;
      }
      return index - 1;
    });
  };

  const transitionTo = (index: number) => {
    setCurrentSetindex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    firstStep: currentStepIndex === 0,
    lastStep: currentStepIndex === steps.length - 1,
    transitionTo,
    next,
    back,
  };
};
