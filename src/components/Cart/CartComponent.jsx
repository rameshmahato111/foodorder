import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItems } from "../../features/cart/cartSlice";
import ButtonComponent from "../ButtonComponent";
const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const deleteItem = (productId) => {
    dispatch(removeItems(productId));
  };
  return (
    <>
      {cartItem.map((item) => (
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-3 px-4 gap-5">
          <div className="my-4 md:flex flex-wrap items-center justify-between gap-5 col-span-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-[100px] h-[100px] object-contain"
            />
            <p>{item.title}</p>
            <p>{item.pricePerServing}</p>
            <p>QTY</p>
            <p>SubTOTAL</p>
          </div>
          <div className="w-full rounded bg-gray-300 py-4 my-4 md:px-3">
            <h1 className="font-poppins">SUMMARY</h1>
            <div className="flex items-center justify-between">
              <p>subtotal</p>
              <p>{item.pricePerServing}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>shipping fee</p>
              <p>0</p>
            </div>
            <div className="flex items-center justify-between">
              <p>TOTAL</p>
              <p>{item.pricePerServing}</p>
            </div>

            <ButtonComponent
              onClick={() => deleteItem(item.id)}
              title={"Remove"}
              backgroundColor={"bg-red"}
              textColor={"text-white"}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CartComponent;
