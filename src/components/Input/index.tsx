import css from "./styles.module.scss";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  placeholder: string;
}
export function Input(props: InputProps) {
  const { ...rest } = props;
  return <input {...rest} className={css.inputBox} />;
}

export default Input;
