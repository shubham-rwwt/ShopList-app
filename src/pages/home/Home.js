import React from 'react'
import { Link } from 'react-router-dom'
import ShopList from '../../components/shopList/ShopList'

import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <ShopList />
      <Link to={`/Shop/create`}>
        <div className="addshop">+</div>
      </Link>
    </div>
  )
}

export default Home
