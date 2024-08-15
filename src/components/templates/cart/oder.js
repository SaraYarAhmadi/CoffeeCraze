import { useState, useEffect } from "react";
import Select from "react-select";
import stateData from "@/utils/stateData";

const stateOptions = stateData();
const Table = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [changeAddress, setChangeAddress] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  useEffect(() => {
    calcTotalPrice();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function calcTotalPrice() {
    let price = 0;

    if (cart.length) {
      price = cart.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
    }

    setTotalPrice(price);
  }

  const increaseCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
  };

  const decreaseCount = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);
    }
  };

  return (
    <>
      <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        {/* Your existing JSX code here */}

        {cart.map((item, index) => (
          <div key={index} className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            {/* Your existing JSX code here */}
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                  onClick={() => decreaseCount(index)}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{item.count}</span>
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                  onClick={() => increaseCount(index)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Your existing JSX code here */}
          </div>
        ))}

        {/* Your existing JSX code here */}
      </div>
    </>
  );
};

export default Table;