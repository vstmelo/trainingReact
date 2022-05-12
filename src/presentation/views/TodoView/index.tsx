import css from "./styles.module.scss";
import Input from "../../../components/Input";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function TodoView(): JSX.Element {
  const [task, setTask] = useState<string[]>([]);

  const [valueInput, setValueInput] = useState<string>("");

  //esse handle será utilizado como helpers para pegar os caracteres que está sendo digitado e salvar por inteiro em value.
  const handleValueInput = (e: any) => {
    let value = e.target.value;

    setValueInput(value);
  };

  // passa a palavra completa para task, e recebera o novo valor que está em valueInput
  const taskToDo = () => {
      if(valueInput === ''){
        Swal.fire('Please, write some task to do !')
      }else{

          setTask([...task, valueInput]);
      }
  };

  return (
    <>
      <section className={css.wrapper}>
        <h1> todos</h1>
        <Input
          onChange={handleValueInput}
          placeholder=" What needs to be done ?"
          className={css.InputBox}
        />
        <button className={css.btnTask} onClick={taskToDo}>
          Do it !
        </button>
      </section>
      {task.length <= 0 ? (
        <p className={css.paragraph}> You do not have any task</p>
      ) : (
        task.map((item) => (
          <div className={css.inputLabel}>
            <input type="checkbox" key={item} />
            <label> {item}</label>
          </div>
        ))
      )}
    </>
  );
}
