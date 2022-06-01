import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteShop } from '../../redux/features/shopSlice'

import './ShopCard.scss'

const ShopCard = ({ item }) => {
  const dispatch = useDispatch()
  const { id, shopName, shopArea, category, openingTime, closingTime } = item

  return (
    <>
      <div className="shopcard">
        <div className="shopimg">
          <h2 className="name">{shopName}</h2>
        </div>
        <div className="details">
          <p className="area">{shopArea}</p>
          <p className="category">{category}</p>
          <div className="time">
            <div className="openingTime">
              <h3>Opening Time:</h3>
              {/* <OpeningDate date= /> */}
              {openingTime}
            </div>
            <div className="closingTime">
              <h3>Closing Time:</h3>
              {/* <ClosingDate date= /> */}
              {closingTime}
            </div>
          </div>
          <div className="btns">
            <Link to={`/shop/${id}`}>
              <button className="btn">update</button>
            </Link>
            <button
              className="deletebtn"
              onClick={() => {
                dispatch(deleteShop({ id: id }))
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopCard
