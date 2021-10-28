import React from 'react';
export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const gotToNext = (stepData) => {
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { gotToNext });
  }
  return currentChild;
};
