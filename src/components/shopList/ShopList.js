import { useSelector } from 'react-redux'
import ShopCard from '../shopCard/ShopCard'
import './ShopList.scss'

const ShopList = () => {
  const shops = useSelector((state) => state.shop.shops)

  return (
    <div className="main">
      <h2>Shops</h2>
      <div className="list">
        {shops.map((item, index) => (
          <ShopCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ShopList
