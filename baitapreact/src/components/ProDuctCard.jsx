
import React, { useState } from 'react'
function ProDuctCard({ product }) {
  const [count, setCount] = useState(0)

  return (
    <div className="product-card">
      <h2>Banh</h2>
      <p>Hello</p>
      <p>Price:100000</p>
      <button onClick={() => setCount(count + 1)}>
        Add to Cart ({count})
      </button>
    </div>
  )
}

export default ProDuctCard