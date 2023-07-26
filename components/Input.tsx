import { css } from "@emotion/react";
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement | ReactElement[];
  bottomText?: string;
}
export function Input({ label, children, bottomText, ...props }: InputProps) {
  return (
    <div
      css={css({
        width: "100%",
      })}
      {...props}
    >
      {children}
      {bottomText != null ? (
        <p
          css={{
            // color: isError ? colors.red600 : colors.grey600,
            marginTop: "4px",
            display: "inline-block",
            fontWeight: 400,
            fontSize: "15px",
          }}
        >
          {bottomText}
        </p>
      ) : null}
    </div>
  );
}

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
}
Input.TextField = forwardRef(
  (
    { error, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    console.log(props);

    return (
      <input
        css={{
          width: "100%",
          padding: "0 18px",
          fontSize: "15px",
          lineHeight: "48px",
          margin: 0,
          color: "black",
          outline: "none",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#fff",
          transition: `background .2s ease,color .1s ease, box-shadow .2s ease`,
          boxShadow: `inset 0 0 0 1px ${error ? "red" : "grey"}`,
          "&:focus": {
            boxShadow: `inset 0 0 0 2px ${error ? "red" : "blue"}`,
          },
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
interface LabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, "size"> {
  error?: boolean;
  children: ReactElement;
}
Input.Label = forwardRef(({ children }: LabelProps) => {
  return <label>{children}</label>;
});
Input.TextField.displayName = "InputTextField";
Input.Label.displayName = "InputLabel";
// export default Input;
