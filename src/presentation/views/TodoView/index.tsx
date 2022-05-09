import css from "./styles.module.scss";
import Input from "../../../components/Input";

export default function TodoView(): JSX.Element {
  return (
    <>
      <section className={css.wrapper}>
        <h1> todos</h1>
        <Input
          placeholder=" What needs to be done ?"
          className={css.InputBox}
        />
      </section>
    </>
  );
}
