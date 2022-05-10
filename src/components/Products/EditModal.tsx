import style from "./Products.module.css";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { ListItem } from "../../typedef";
import Form from "../Form/Form";

interface Props {
  setEditMode: (value: boolean) => void;
}

const EditModal = ({ setEditMode }: Props) => {
  const { currentItem } = useAppSelector((state) => state.listItems);
  const [form, setForm] = useState(currentItem);

  const onEditSave = () => {
    setEditMode(false);
    const products = JSON.parse(localStorage.getItem("listItems") as string);
    const index = products.findIndex((item: ListItem) => item.id === form.id);
    products[index] = form;
    localStorage.setItem("listItems", JSON.stringify(products));
  };

  return (
    <div className={style.modal_wrapp}>
      <div className={style.modal_block}>
        <Form form={form} setForm={setForm} />
        <div className={style.button_wrapp}>
          <button className={style.save} onClick={onEditSave}>
            Save
          </button>
          <button
            className={style.cancel}
            onClick={(e) => {
              setEditMode(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
