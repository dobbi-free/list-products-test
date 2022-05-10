import React from "react";
import style from "../Products/Products.module.css";
import { ListItem } from "../../typedef";

interface Props {
  form: ListItem;
  setForm: (value: ListItem) => void;
}

const Form = ({ form, setForm }: Props) => {
  return (
    <form className={style.form_block}>
      <input
        className={style.input_desc}
        value={form.name}
        placeholder={"name"}
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
      />
      <input
        className={style.input_desc}
        value={form.count}
        placeholder={"count"}
        onChange={(e) => {
          setForm({ ...form, count: Number(e.target.value) });
        }}
      />
      <input
        className={style.input_desc}
        value={form.size.width}
        placeholder={"width"}
        onChange={(e) => {
          const newObj = JSON.parse(JSON.stringify(form));
          setForm({
            ...newObj,
            size: { ...form.size, width: e.target.value },
          });
        }}
      />
      <input
        className={style.input_desc}
        value={form.size.height}
        placeholder={"height"}
        onChange={(e) => {
          const newObj = JSON.parse(JSON.stringify(form));
          setForm({
            ...newObj,
            size: { ...form.size, height: e.target.value },
          });
        }}
      />
      <input
        className={style.input_desc}
        value={form.weight}
        placeholder={"weight"}
        onChange={(e) => {
          setForm({ ...form, weight: e.target.value });
        }}
      />
    </form>
  );
};

export default Form;
