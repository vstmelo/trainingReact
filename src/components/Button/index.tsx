import React from "react";
import css from './styles.module.scss'

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  specialProps?: string;
}
export function Button(props: ButtonProps) {
  const {  ...rest } = props;
  return (
    <>
      <button {...rest} className={css.btnBox}/>
     
    </>
  );
}
