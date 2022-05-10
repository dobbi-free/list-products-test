import style from "./Products.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCurrentItem } from "../../store/action-creators/listItemsActionCreator";

const ProductItem = () => {
  const { currentItem } = useAppSelector(
    (state) => state.listItems
  );
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    dispatch(fetchCurrentItem(productId));
  }, [localStorage.getItem("listItems")]);
  return (
    <div className={style.product}>
      <h2 className={style.product_title}>{currentItem.name}</h2>
      <div className={style.desc_wrapp}>
        <img
          className={style.product_img}
          src={
            currentItem?.imageUrl ||
            "https://www.bartender.com.ua/wp-content/themes/bartender/images/default-thumbnail.jpg"
          }
          alt=""
        />
        <div className={style.desc}>
          <p className={style.desc_item}>Count: {currentItem.count}</p>
          <p className={style.desc_item}>Width: {currentItem.size?.width}</p>
          <p className={style.desc_item}>Height: {currentItem.size?.height}</p>
          <p className={style.desc_item}>Weight: {currentItem.weight}</p>
          <div className={style.button_wrapp}>
            <button
              className={style.edit}
              onClick={(e) => {
                setEditMode(true);
              }}
            >
              Edit
            </button>
            <button
              className={style.delete}
              onClick={(e) => {
                setDeleteMode(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {editMode && <EditModal setEditMode={setEditMode} />}
      {deleteMode && (
        <DeleteModal setDeleteMode={setDeleteMode} productId={productId} />
      )}
    </div>
  );
};

export default ProductItem;
