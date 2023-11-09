import React from 'react'
import { useParams } from 'react-router-dom'
export default function CategoryDetail() {
    const {categoryName} = useParams();
  return (
    <div>CategoryDetail {categoryName}</div>
  )
}
