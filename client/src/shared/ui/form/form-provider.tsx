'use client';
import * as React from 'react';
import { FieldValues, UseFormReturn, FormProvider as RHFFormProvider } from 'react-hook-form';

type FormContextValue = UseFormReturn<FieldValues>;

const FormContext = React.createContext<FormContextValue | null>(null);

export function useFormContext<T extends FieldValues>(): UseFormReturn<T> {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext должен использоваться внутри FormProvider');
  }
  return context as UseFormReturn<T>;
}

interface FormProviderProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  children: React.ReactNode;
}

export function FormProvider<T extends FieldValues>({ form, children }: FormProviderProps<T>) {
  const contextValue = form as UseFormReturn<FieldValues>;

  return (
    <FormContext.Provider value={contextValue}>
      <RHFFormProvider {...form}>{children}</RHFFormProvider>
    </FormContext.Provider>
  );
}
