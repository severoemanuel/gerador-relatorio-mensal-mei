import { FormProvider, type UseFormReturn } from "react-hook-form";

interface Props {
  children?: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => any;
}

export const Form: React.FC<Props> = ({ children, methods, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
