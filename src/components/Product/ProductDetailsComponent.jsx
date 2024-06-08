import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { add } from "../../features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "@tanstack/react-query";
import Order from "../Order/Order";
import ModalComponent from "../Modal/Modal";

const ProductDetailsComponent = () => {
  const { itemsId: pid } = useParams();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    isLoading,
    data: details,
    error,
  } = useQuery({
    queryKey: ["product", pid],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${pid}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      return res.data;
    },
    staleTime: 5*60*1000
  });

  const addToCart = (details) => {
    dispatch(add(details));
    toast("Item is added to the cart");
  };

  if (isLoading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleOrderNow = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ToastContainer position="top-right" theme="light" />
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-6 px-4">
        <div className="py-4 my-6">
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-[80%] object-contain rounded-lg"
          />
        </div>

        <div className="px-4 py-5">
          <h1 className="text-center font-poppins text-3xl">{details.title}</h1>
          <p className="inline-flex gap-10 font-poppins">
            $ {details.pricePerServing}{" "}
            <span>Deliver In (Min) {details.readyInMinutes}</span>
          </p>
          <div
            className="text-start font-poppins"
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></div>

          <div className="mt-4">
            <ButtonComponent
              title={"ADD TO CART"}
              btnSize={"w-full"}
              backgroundColor={"bg-gray-400"}
              textColor={"text-white"}
              hover={"hover:bg-gray-600"}
              onClick={() => addToCart(details)}
            />
          </div>
          <div className="mt-4">
            <ButtonComponent
              title={"ORDER NOW"}
              btnSize={"w-full"}
              backgroundColor={"bg-gray-400"}
              textColor={"text-white"}
              hover={"hover:bg-gray-600"}
              onClick={handleOrderNow}
            />
          </div>
          <ModalComponent isVisible={isModalVisible} onClose={handleCloseModal}>
            <Order />
          </ModalComponent>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
