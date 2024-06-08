import React from 'react'
import {Link} from "react-router-dom"
const CardComponent = (props) => {
     const {id, image, title, price} = props.data
    return (
        <>
            <div className='my-5 rounded-lg'>
                <Link to={`/details/${id}`}>
                <div className='overflow-hidden'>
                    <img src={image} alt={title} className='w-full h-[85%] object-contain hover:scale-110 ease-in-out duration-700 rounded-lg' />
                </div>
                <div className='flex items-center justify-center px-3'>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
                </Link>
            </div>

        </>
    )
}

export default CardComponent