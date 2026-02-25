import Homeitem from "../Component/Homeitem";
import { useSelector } from "react-redux";

function Home() {
  let items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <Homeitem key={item.id}  item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
