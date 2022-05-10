import style from "./Products.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchItemList } from "../../store/action-creators/listItemsActionCreator";

const Products = () => {
  const dispatch = useAppDispatch();
  const { listItems } = useAppSelector((state) => state.listItems);

  useEffect(() => {
    dispatch(fetchItemList());
  }, [localStorage.getItem('listItems')]);

  return (
    <div className={style.wrapp}>
      {listItems.map((item, i) => (
        <div key={i} className={style.product}>
          <h2 className={style.product_title}>{item.name}</h2>
          <div className={style.desc_wrapp}>
            <img
              className={style.product_img}
              src={
                item.imageUrl ||
                "https://www.bartender.com.ua/wp-content/themes/bartender/images/default-thumbnail.jpg"
              }
              alt=""
            />
            <div className={style.desc}>
              <p className={style.desc_item}>Count: {item.count}</p>
              <p className={style.desc_item}>Width: {item.size.width}</p>
              <p className={style.desc_item}>Height: {item.size.height}</p>
              <NavLink to={"/product/" + item.id} className={style.details}>
                details...
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
