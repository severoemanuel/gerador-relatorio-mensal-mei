import { ChangeEventHandler, InputHTMLAttributes, useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";
import { addSeparatorsToNumberString } from "~/helpers";
import { masks } from "~/helpers/mask";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  name: string;
  mask?: keyof typeof masks;
  number?: boolean;
  label?: string;
}

export const Field: React.FC<Props> = ({
  name,
  defaultValue = "",
  disabled,
  onChange,
  number,
  mask,
  label,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ control, name, defaultValue, disabled });

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      let value: string = e.target.value;
      if (value && mask) e.target.value = masks[mask](value);

      if (number) {
        value = addSeparatorsToNumberString(value, ["."]);

        e.target.value = value.replace(/[^-0-9.]|(?<=.)-/g, "");
      }

      onChange?.(e);
      field?.onChange?.(e);
    },
    [onChange, field, mask, number]
  );

  return (
    <div>
      {!!label ? (
        <label className="text-white py-2 block" htmlFor={props?.id}>
          {label}
        </label>
      ) : null}

      <input
        {...props}
        {...field}
        onChange={handleChange}
        className="form-field"
      />

      {error?.message ? (
        <span className="message-error">{error.message}</span>
      ) : null}
    </div>
  );
};
