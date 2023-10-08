import React, { ReactEventHandler } from "react";

export interface ButtonControlProps {
  onNext?: ReactEventHandler;
  onPrev?: ReactEventHandler;
  handleSubmit?: ReactEventHandler;
}

export interface StepListProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formSubmitted: boolean;
}
