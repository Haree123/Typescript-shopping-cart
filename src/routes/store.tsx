import StoreItems from "../components/store-items";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <div className="font-semibold text-2xl">Store</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {storeItems.map((items) => (
          <StoreItems key={items.id} {...items} />
        ))}
      </div>
    </>
  );
};

export default Store;
