import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Homeitem({ item }) {
  let bagitem = useSelector((store) => store.bag);
  let dispatch = useDispatch();
  const handelAdditem = () => {
    dispatch(bagActions.addTobag(item.id));
  };

  const elementFound = bagitem.indexOf(item.id) >= 0;

  const handelRemove = () => {
    dispatch(bagActions.removeBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="itemimage" />
        <div className="rating">
          {item.rating.stars} | {item.rating.count}
        </div>

        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount"> {item.current_precentage}% OFF</span>
        </div>

        {elementFound ? (
          <button
            type="button"
            class="btn btn-danger btn-add-bag"
            onClick={handelRemove}
          >
            <MdDelete />
            Remove
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success btn-add-bag"
            onClick={handelAdditem}
          >
            <MdAddCircleOutline />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
}

export default Homeitem;
