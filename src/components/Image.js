import React from 'react'
import product from '../product'

function Image() {
  return (
    <div className='img'>
      <img src ={product.image}/>
    </div>
  )
}

export default Image
