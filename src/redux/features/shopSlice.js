import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shop',

  initialState: {
    shops: [
      //dummy data
      // {
      //   id: 1,
      //   shopName: 'bike Insurance',
      //   shopArea: 'sfd',
      //   category: 'Grocery',
      //   openingTime: new Date(),
      //   closingTime: new Date(),
      // },
      // {
      //   id: 2,
      //   shopName: 'bike Insurance',
      //   shopArea: 'area',
      //   category: 'Butcher',
      //   openingTime: new Date(),
      //   closingTime: new Date(),
      // },
    ],
  },
  reducers: {
    addShop: (state, action) => {
      state.shops = [action.payload, ...state.shops]
    },

    deleteShop: (state, action) => {
      state.shops = state.shops.filter((shop) => shop.id !== action.payload.id)
    },
    updateShop: (state, action) => {
      const {
        id,
        shopName,
        shopArea,
        category,
        openingTime,
        closingTime,
      } = action.payload

      const existingShop = state.filter((shop) => shop.id === id)
      if (existingShop) {
        existingShop.shopName = shopName
        existingShop.shopArea = shopArea
        existingShop.category = category
        existingShop.openingTime = openingTime
        existingShop.closingTime = closingTime
      }
    },
  },
})
export const { addShop, deleteShop, updateShop } = shopSlice.actions
export default shopSlice.reducer
