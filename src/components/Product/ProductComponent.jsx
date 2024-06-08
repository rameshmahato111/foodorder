import React from "react";
import CardComponent from "../CardComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const ProductComponent = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=10&tags=dessert`
      );
      const data = res.data.recipes;

      return data;
    },
    staleTime: 60 * 1000 * 10,
  });

  if (error) {
    return <p>{error.message}</p>;
  }
 
  return (
    <>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {isLoading ? (
        <p>Loading, please wait...</p>
      ) : (
        product && product.map((product) => (
          <CardComponent data={product} key={product.id} />
        ))
      )}
      </div>
    </>
  );
};

export default ProductComponent;
