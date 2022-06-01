import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateShop } from '../../redux/features/shopSlice'
import './UpdateShop.scss'

const UpdateShop = () => {
  // const { id, shopName, shopArea, category, openingTime, closingTime } = item
  const params = useParams()
  const dispatch = useDispatch()
  const shops = useSelector((state) => state.shops)
  const navigate = useNavigate()
  const existingShop = shops.filter((shop) => shop.id === params.id)

  const {
    shopName,
    shopArea,
    category,
    openingTime,
    closingTime,
  } = existingShop[0]

  const [values, setValues] = useState({
    shopName,
    shopArea,
    category,
    openingTime,
    closingTime,
  })

  const handleUpdate = () => {
    setValues({
      shopName: '',
      shopArea: '',
      category: '',
      openingTime: '',
      closingTime: '',
    })
    dispatch(
      updateShop({
        id: params.id,
        shopName: values.shopName,
        shopArea: values.shopArea,
        category: values.category,
        openingTime: values.openingTime,
        closingTime: values.closingTime,
      }),
    )
    navigate('/')
  }

  return (
    <>
      <div className="popUp">
        <div className="form">
          <form action="submit">
            <div className="shopName">
              <label htmlFor="">Shop Name</label>
              <input
                type="text"
                placeholder="Enter Shop Name"
                value={values.shopName}
                onChange={(e) =>
                  setValues({ ...values, shopName: e.target.value })
                }
              />
            </div>
            <div className="shopArea">
              <label htmlFor="">Shop Area</label>
              <select
                name="area"
                id="area"
                value={values.shopArea}
                onChange={(e) =>
                  setValues({ ...values, shopArea: e.target.value })
                }
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
                value={values.category}
                onChange={(e) =>
                  setValues({ ...values, category: e.target.value })
                }
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
                value={values.openingTime}
                onChange={(e) =>
                  setValues({ ...values, openingTime: e.target.value })
                }
              />
            </div>
            <div className="ClosingDate">
              <label htmlFor="">Closing Date</label>
              <input
                type="Date"
                placeholder="Enter Date"
                value={values.closingTime}
                onChange={(e) =>
                  setValues({ ...values, closingTime: e.target.value })
                }
              />
            </div>
          </form>
          <button className="btn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </>
  )
}

export default UpdateShop
