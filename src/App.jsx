import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Category from './pages/category/Category'
import CategoryDetail from './pages/category/CategoryDetail'
export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        Header
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Category</Link>
      </header>
      <div className='app_body'>
        <Routes>
          <Route path='/' element={<>Home Page</>} />
          <Route path='/about' element={<>About Page</>} />
          <Route path='/category' element={<Category />}>
            <Route path=':categoryNameABC' element={<CategoryDetail />}></Route>
            <Route path='test' element={<>Test</>}></Route>
        
          </Route>
        </Routes>
      </div>
      <footer>Footer</footer>
      <button onClick={() => {
        //window.location.href = "/category/laptop"
        navigate("/category/laptop")
      }}>Goto Laptop</button>
    </>
  )
}