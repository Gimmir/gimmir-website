'use client';

import { useState, useMemo, useCallback } from 'react';
import { SIMULATOR_CONFIG } from '@/lib/constants';
import type { SimulatorOption } from '@/lib/constants';

export function useProjectSimulatorLogic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, SimulatorOption>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = useCallback(
    (option: SimulatorOption) => {
      setIsAnimating(true);
      setSelections((prev) => ({
        ...prev,
        [SIMULATOR_CONFIG.steps[currentStep].id]: option,
      }));

      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsAnimating(false);
      }, 300);
    },
    [currentStep]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setIsAnimating(false);
      }, 100);
    }
  }, [currentStep]);

  const reset = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(0);
      setSelections({});
      setIsAnimating(false);
    }, 300);
  }, []);

  const result = useMemo(() => {
    let price = SIMULATOR_CONFIG.basePrice;
    let model = 'Custom Engineering';
    let risks: string[] = [];

    Object.keys(selections).forEach((stepId) => {
      const option = selections[stepId];
      if (!option) return;

      price *= option.multiplier;
      if (option.model) model = option.model;
      if (option.risk) risks.push(option.risk);
    });

    if (selections['stage']?.id === 'fixing' || selections['state']?.id === 'unstable') {
      model = 'Technical Audit & Refactoring';
    }

    const lower = Math.round(price / 1000) * 1000;
    const upper = Math.round((price * 1.3) / 1000) * 1000;

    return {
      range: `$${lower / 1000}k - $${upper / 1000}k`,
      model,
      risks,
    };
  }, [selections]);

  return {
    currentStep,
    totalSteps: SIMULATOR_CONFIG.steps.length,
    stepData: SIMULATOR_CONFIG.steps[currentStep],
    isFinished: currentStep === SIMULATOR_CONFIG.steps.length,
    isAnimating,
    result,
    handlers: { select: handleSelect, back: handleBack, reset },
  };
}
