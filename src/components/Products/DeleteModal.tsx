import style from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import {useAppDispatch} from '../../store/hooks';
import {fetchItemList} from '../../store/action-creators/listItemsActionCreator';

interface Props {
    setDeleteMode: (value:boolean) => void,
    productId?: string
}

const DeleteModal = ({ setDeleteMode, productId } : Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const onItemDelete = () => {
      const products = JSON.parse(localStorage.getItem('listItems') as string);
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == productId) {
          products.splice(i, 1);
        }
      }
      localStorage.setItem("listItems", JSON.stringify(products));
      dispatch(fetchItemList())
      navigate("/");
  }
  return (
    <div className={style.modal_wrapp}>
      <div className={style.delete_block}>
        <h4 className={style.delete_desc}>Are you sure?</h4>
        <div className={style.button_modal}>
          <button
            className={style.delete}
            onClick={onItemDelete}
          >
            Delete
          </button>
          <button
            className={style.save}
            onClick={(e) => {
              setDeleteMode(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
