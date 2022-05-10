import style from "../Products/Products.module.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchItemList} from '../../store/action-creators/listItemsActionCreator';
import {ListItem} from '../../typedef';
import Form from '../Form/Form';

interface Props {
  setAddMode: (value:boolean) => void
}

const ModalAdd = ({ setAddMode } : Props) => {
  const dispatch = useAppDispatch()
  const { listItems } = useAppSelector((state) => state.listItems);
  const navigate = useNavigate();

  const [form, setForm] = useState<ListItem>({
    id: listItems.length + 1,
    name: "",
    imageUrl:"",
    count: 0,
    size: {
      width: 0,
      height: 0,
    },
    weight: "",
    comments:[]
  });

  const onItemSave = () => {
    setAddMode(false);
    const products = JSON.parse(localStorage.getItem("listItems") as string);
    products.unshift(form);
    localStorage.setItem("listItems", JSON.stringify(products));
    dispatch(fetchItemList());
    navigate("/");
  };
  return (
    <div className={style.modal_wrapp}>
      <div className={style.modal_block}>
      <Form form={form} setForm={setForm}/>
        <div className={style.button_wrapp}>
          <button className={style.save} onClick={onItemSave}>
            Save
          </button>
          <button
            className={style.cancel}
            onClick={(e) => {
              setAddMode(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
