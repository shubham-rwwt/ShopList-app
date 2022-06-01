import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import { useHistory } from 'react-router-dom'
import { addShop } from '../../redux/features/shopSlice'

import './AddShop.scss'

const AddShop = () => {
  const navigate = useNavigate()
  //   const shopList = useSelector((state) => state.shop.shops)
  const dispatch = useDispatch()

  const [shopName, setShopName] = useState('')
  const [shopArea, setShopArea] = useState('')
  const [category, setCategory] = useState('')
  const [openingTime, setOpeningTime] = useState('')
  const [closingTime, setClosingTime] = useState('')

  return (
    <div className="popUp">
      <div className="form">
        <form>
          <div className="shopName">
            <label htmlFor="">Shop Name</label>
            <input
              type="text"
              placeholder="Enter Shop Name"
              value={shopName}
              onChange={(e) => {
                setShopName(e.target.value)
              }}
            />
          </div>
          <div className="shopArea">
            <label htmlFor="">Shop Area</label>
            <select
              name="area"
              id="area"
              value={shopArea}
              onChange={(e) => {
                setShopArea(e.target.value)
              }}
            >
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
            </select>
          </div>
          <div className="shopCategory">
            <label htmlFor="">Shop Category</label>
            <select
              name="Category"
              id="Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            >
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationary shop">Stationary shop</option>
            </select>
          </div>
          <div className="OpeningDate">
            <label htmlFor="">Opening Date</label>
            <input
              type="Date"
              placeholder="Enter Date"
              value={openingTime}
              onChange={(e) => {
                setOpeningTime(e.target.value)
              }}
            />
          </div>
          <div className="ClosingDate">
            <label htmlFor="">Closing Date</label>
            <input
              type="Date"
              placeholder="Enter Date"
              value={closingTime}
              onChange={(e) => {
                setClosingTime(e.target.value)
              }}
            />
          </div>
        </form>
        <button
          onClick={() => {
            dispatch(
              addShop({
                id: Math.round(Math.random() * 100),
                shopName,
                shopArea,
                category,
                openingTime,
                closingTime,
              }),
            )
            navigate('/')
          }}
          className="btn"
          type="submit"
        >
          Add Shop
        </button>
      </div>
    </div>
  )
}

export default AddShop
