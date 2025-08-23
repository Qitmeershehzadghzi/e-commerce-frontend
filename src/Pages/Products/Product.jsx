import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom' 
import { ShopContext } from '../../context/ShopContext'
import './Product.css'

function Product() {
  const { productId } = useParams()
  const { products } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    const item = products.find((p) => p._id === productId)
    if (item) {
      setImage(item.image[0])   // default ek image
      setProductData(item)
      // console.log(item)
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='product-page'>
      <div className='product-image'>
        <div className='image-container'>
          <div className='image-1'>
            {productData.image && productData.image.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`product-${index}`} 
              />  
            ))}
          </div>
          <div className='image-2'>
<img src={image} className='iim' alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'>Loading .....</div>
  )
}

export default Product
