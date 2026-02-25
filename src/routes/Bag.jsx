import Bagitems from "../Component/Bagitems";
import BagSummary from "../Component/BagSummary";
import { useSelector } from "react-redux";

function Bag() {
  const bagitems = useSelector((state) => state.bag);
  const items = useSelector((store) => store.items);
  const finalitem = items.filter((item) => {
    const itemIndex = bagitems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalitem.map((item) => (
              <Bagitems key={item.id} item={item} />
            ))}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
}

export default Bag;
