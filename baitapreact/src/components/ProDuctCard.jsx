import './ProDuctCard.css'
import React, { useState } from 'react'
function ProDuctCard({ product }) {
  const [count, setCount] = useState(0)

  return (
    <div className="product-card">
      <img id='imge' src="https://imgs.search.brave.com/guL3VWEVjfc-GQQuoloKT93sOARbtNtykJIQZCGvM5k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL01WSU1H/XzIwMTgwNDA1XzE2/NDQxMi5qcGc_d2lk/dGg9NjAwJm5hbWU9/TVZJTUdfMjAxODA0/MDVfMTY0NDEyLmpw/Zw" alt="" />      
      <h3>Pen</h3>
      <p>Price:100000</p>
      <button onClick={() => setCount(count + 1)}>
        Add to Cart ({count})
      </button>
      <button onClick = {() => setCount(count - 1)}>Clear Cart</button>
    </div>
    
  )
}

export default ProDuctCard