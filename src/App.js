import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import AddShop from './components/addShop/AddShop'
import UpdateShop from './components/popup/UpdateShop'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />} />
            <Route exact path="/shop/id" element={<UpdateShop />}></Route>
            <Route exact path="/shop/create" element={<AddShop />}></Route>
          </Route>
          {/* <Route exact path="/Shop/:id" element={<Shop />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
