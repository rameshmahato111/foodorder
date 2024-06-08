// OrderComponent.jsx
import React, { useState } from "react"
import InputComponent from "../InputComponent"
import ButtonComponent from "../ButtonComponent"
import { MdDelete, MdModeEdit } from "react-icons/md";
const OrderComponent = ({ order }) => {
  const [orderDetails, setOrderDetails] = useState(order)
  const [isEditing, setIsEditing] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // api call for edit product details
    console.log("Order details updated:", orderDetails)
    setIsEditing(false)
  }

  const handleCancelOrder = () => {
    // Cancel the order in backend
    console.log("Order cancelled:", orderDetails.id)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }


  return (
    <div className="border rounded p-4 mb-4">
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
        >
          <InputComponent
            data={{
              type: "text",
              placeholder: "Product",
              label: "Product",
              name: "product",
              id: `product-${orderDetails.id}`,
              htmlFor: `product-${orderDetails.id}`,
            }}
            value={orderDetails.product}
            onChange={handleChange}
          />
          <InputComponent
            data={{
              type: "number",
              placeholder: "Quantity",
              label: "Quantity",
              name: "quantity",
              id: `quantity-${orderDetails.id}`,
              htmlFor: `quantity-${orderDetails.id}`,
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
              id: `price-${orderDetails.id}`,
              htmlFor: `price-${orderDetails.id}`,
            }}
            value={orderDetails.price}
            onChange={handleChange}
          />
          <InputComponent
            data={{
              type: "text",
              placeholder: "Status",
              label: "Status",
              name: "status",
              id: `status-${orderDetails.id}`,
              htmlFor: `status-${orderDetails.id}`,
            }}
            value={orderDetails.status}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md ml-2"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div>
              <p>
                <strong>Product:</strong> {orderDetails.product}
              </p>
              <p>
                <strong>Quantity:</strong> {orderDetails.quantity}
              </p>
              <p>
                <strong>Price:</strong> ${orderDetails.price}
              </p>
              <p>
                <strong>Status:</strong> {orderDetails.status}
              </p>
            </div>
            <div className="flex items-center justify-between sm:gap-5 gap-2">
            
                <ButtonComponent
                  icons={<MdModeEdit  className="sm:text-2xl"/>}
                  backgroundColor={"bg-blue-400"}
                  textColor={"text-white"}
                  onClick={() => handleEdit()}
                  
                  
                />
           

              <ButtonComponent
               
                backgroundColor={"bg-red"}
                textColor={"text-white"}
                onClick={() => handleCancelOrder()}
                icons={<MdDelete className="sm:text-2xl"/>}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default OrderComponent
