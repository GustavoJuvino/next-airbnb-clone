"use client";
import React, { useState, useMemo } from 'react';
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const actionLabel = useMemo(() => {
    if (step == STEPS.PRICE) {
        return "Create";
    }

    return "Next";
  }, [step]);


  const secondaryActionlabel = useMemo(() => {
    if (step == STEPS.CATEGORY) {
        return undefined;
    }

    return "Back";
  }, [step]);


  return (
    <Modal 
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionlabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        title="Airbnb your home!"
    />
  )
}

export default RentModal