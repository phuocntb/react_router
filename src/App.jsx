import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Category from './pages/category/Category'
import CategoryDetail from './pages/category/CategoryDetail'
export default function App() {
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
          <Route path='/category' element={<Category/>}>
            <Route path=':categoryName' element={<CategoryDetail/>}></Route>
          </Route>
        </Routes>
      </div>
      <footer>Footer</footer>
    </>
  )
}
