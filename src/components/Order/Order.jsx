import React, { useState, useEffect } from "react"
import InputComponent from "../InputComponent"
import { useNavigate } from "react-router-dom"

const Order = () => {
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    shipping: "",
    productID: "",
    shipping: "",
    quantity: 0,
    price: 0,
  })
  //  this checks if the user is logged in and any session store in local store 
  
  // const [isLoggedin, setIsLoggedin] = useState(false)
  // const navigate = useNavigate()
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   if (user) {
  //     setIsLoggedin(true)
  //   } else {
  //     navigate('/login')
  //   }
  // }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(orderDetails)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }
  // if (!isLoggedin) {
  //   return null
  // }

  return (
    <>
      <section className="max-h-[700px] p-4">
        <h1 className="">Order Now</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputComponent
            data={{
              type: "text",
              placeholder: "Full Name",
              label: "Full Name",
              name: "fullName",
              id: "fullName",
              htmlFor: "fullName",
            }}
            value={orderDetails.fullName}
            onChange={handleChange}
          />

<InputComponent
            data={{
              type: "text",
              placeholder: "Shipping Address",
              label: "Shipping Address",
              name: "shipping",
              id: "shipping",
              htmlFor: "shipping",
            }}
            value={orderDetails.fullName}
            onChange={handleChange}
          />


          <InputComponent
            data={{
              type: "text",
              placeholder: "Product ID",
              label: "Product ID",
              name: "productID",
              id: "productID",
              htmlFor: "productID",
            }}
            value={orderDetails.orderId}
            onChange={handleChange}
          />
          <InputComponent
            data={{
              type: "number",
              placeholder: "Quantity",
              label: "Quantity",
              name: "quantity",
              id: "quantity",
              htmlFor: "quantity",
            }}
            value={orderDetails.quantity}
            onChange={handleChange}
          />
          <InputComponent
            data={{
              type: "number",
              placeholder: "Price",
              label: "Price",
              name: "price",
              id: "price",
              htmlFor: "price",
            }}
            value={orderDetails.price}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Order
