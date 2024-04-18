import React from "react";
import { ButtonProps } from "./src/components/Button/types";
import { SelectProps } from "./src/components/Select/types";
import { DropdownProps } from "./src/components/Dropdown/types";
import { FormGeneratorProps, InputTypes } from "./src/components/FormGenerator/types";
import {Option} from './src/models/common'

import { ValidatorFn } from "./src/models/common";

import { useFormErrors as ErrorsHook } from "./dist/hooks/useFormErrors/useFormErrors";

import { useFormData as FormDataHook } from "./dist/hooks/useFormData";

export {
  InputTypes,
  ButtonProps,
  Option
}

export class Button extends React.Component<ButtonProps> {}

export class Input extends React.Component<any> {}

export class Select extends React.Component<SelectProps> {}

export class Dropdown extends React.Component<DropdownProps> {}

export class FormGenerator extends React.Component<
  FormGeneratorProps<Record<string, any>>
> {}

export function useFormErrors(): ReturnType<typeof ErrorsHook>;

export namespace validators {
  export function maxLength(length: number): ValidatorFn;
  export function minLength(length: number): ValidatorFn;
  export const required: ValidatorFn;
  export const isNumber: ValidatorFn;
}

export function useFormData(
  state: Record<string, any>,
  onChange: (data: Record<string, any>) => void
): ReturnType<typeof FormDataHook>;