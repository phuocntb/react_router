import React from 'react'
import { useParams } from 'react-router-dom'
export default function CategoryDetail() {
    const {categoryNameABC} = useParams(); // destructuring {categoryNameABC: "gia tri tren URL"}
  return (
    <div>CategoryDetail {categoryNameABC}</div>
  )
}
