import { formatCurrency } from "../utils/formatCurrency";

interface StoreItemsProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItems = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  return (
    <div key={id} className="border border-inherit rounded-md">
      <img
        className="rounded-md"
        src={imgUrl}
        alt={name}
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
      />

      <div className="m-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold">{name}</div>
          <div className="text-gray-500">{formatCurrency(price)}</div>
        </div>

        {/* <button className="bg-blue-600 h-10 w-full mt-5 rounded-md">
          <div className="text-white">+ Add to Cart</div>
        </button> */}

        <>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-blue-600 h-10 w-10 rounded-md text-white">
              -
            </button>
            <h3>
              <span className="font-semibold text-xl">1</span> in Cart
            </h3>
            <button className="bg-blue-600 h-10 w-10 rounded-md text-white">
              +
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button className="bg-red-500 h-8 w-20 rounded-md text-white">
              Remove
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default StoreItems;
