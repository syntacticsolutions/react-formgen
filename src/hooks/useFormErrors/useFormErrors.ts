import { useMemo, useState } from "react";
import { forkJoin } from "rxjs";
import _ from "lodash";
import { useSubscription } from "observable-hooks";
import { removeEmpty, runValidatorsOn } from "./utils";
import { ErrorValidatorMap, ValidatorFuncParams } from "./types";

export const useFormErrors = (
  formData: Record<string, any>,
  errorValidatorMap: ErrorValidatorMap
) => {
  const [errors, setErrors] = useState({});

  const errors$ = useMemo(() => {
    const validators = runValidatorsOn(errorValidatorMap, formData);
    return forkJoin(validators);
  }, [formData]);

  useSubscription(errors$, (errs: Record<string, ValidatorFuncParams>) => {
    setErrors(removeEmpty(errs));
  });

  return { errors };
};
