// import React, { useEffect, useState, useContext } from 'react'
// import { useParams } from 'react-router-dom' 
// import { ShopContext } from '../../context/ShopContext'
// import './Product.css'
// import { assets } from '../../assets/frontend_assets/assets'
// import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'

// function Product() {
//   const { productId } = useParams()
//   const { products ,currency,cartItems } = useContext(ShopContext)
//   const [productData, setProductData] = useState(null)
//   const [image, setImage] = useState('')
//   const [sizes, setsizes] = useState('')

//   const fetchProductData = async () => {
//     const item = products.find((p) => p._id === productId)
//     if (item) {
//       setImage(item.image[0])   // default ek image
//       setProductData(item)
//       // console.log(item)
//     }
//   }

//   useEffect(() => {
//     fetchProductData()
//   }, [productId, products])

//   return productData ? (
//     <div className='product-page'>
//       <div className='product-image'>
//         <div className='image-container'>
//           <div className='image-1'>
//             {productData.image && productData.image.map((img, index) => (
//               <img 
//               onClick={()=>setImage(img)}
//                 key={index} 
//                 src={img} 
//                 alt={`product-${index}`} 
//               />  
//             ))}
//           </div>
//           <div className='image-2'>
// <img src={image} className='iim' alt="" />
//           </div>
//         </div>
//         {/* product info */}
//         <div className='product-info'>
// <h1 className='head'>{productData.name}</h1>
// <div className='images-star'>
// <img src={assets.star_icon}alt=""  className='img-1'/>
// <img src={assets.star_icon} alt=""  className='img-2' />
// <img src={assets.star_icon} alt=""  className='img-3' />
// <img src={assets.star_icon} alt=""  className='img-4' />
// <img src={assets.star_dull_icon} alt=""  className='img-5' />
// <p className='p-tag'>(122)</p>
// </div>
// <p className='p-tag-2'>{currency}{productData.price}</p>
// <p className='p-tag-3'>{productData.description}</p>
// <div className='btns'>
// <p className='p-tag-4'>select sizes</p>
// <div className='btn-1'>
//   {
//   productData.sizes.map((item,index)=>(
//    < button onClick={()=>setsizes(item)} key={index} className={`classss ${item ===sizes?'border-orange-500':''}`}>{item}</button>
//   ))
//   }     
//     </div>
//     </div>
// <button onClick={() => cartItems(productData._id, sizes)} className='add-to-cart'>
//   Add to cart
// </button>
//     <hr  className='hr-tag'/>
//     <div className='product-details'>
//       <p>100% original product.</p>
//       <p>Cash on delivery is availibe on this product.</p>
//       <p>Easy return and exchange policy  within 7 days</p>
//     </div>
//     </div>
//     </div>
//     <div className='product-description'>
//       <div className='description-head'>
//         <b className='tag'>Description</b>
//         <p className='p-tagg'>Reviews</p>
//       </div>
//       <div className='description-para'>
//         <p className='p-tagg1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error repellendus esse fuga at, sequi, velit saepe sint, porro vel architecto incidunt quasi eos. Adipisci aperiam eum nam non iste pariatur.</p>
//         <p className='p-tagg2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quia, vitae numquam sunt molestiae non laudantium velit ad asperiores iusto ut corrupti praesentium cupiditate molestias possimus nostrum saepe voluptatum tenetur!</p>
//       </div>
//     </div>
//     <RelatedProducts category={productData.category} subcategory={productData.subcategory} />
//   </div>
//   ) : (
//     <div className='opacity-0'>Loading .....</div>
//   )
// }

// export default Product

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import './Product.css';
import { assets } from '../../assets/frontend_assets/assets';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency, cartItems, addToCart } = useContext(ShopContext); // ✅ addToCart included
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [sizes, setsizes] = useState('');

  const fetchProductData = async () => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      setImage(item.image[0]);
      setProductData(item);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='product-page'>
      <div className='product-image'>
        <div className='image-container'>
          <div className='image-1'>
            {productData.image &&
              productData.image.map((img, index) => (
                <img
                  onClick={() => setImage(img)}
                  key={index}
                  src={img}
                  alt={`product-${index}`}
                />
              ))}
          </div>
          <div className='image-2'>
            <img src={image} className='iim' alt='' />
          </div>
        </div>

        <div className='product-info'>
          <h1 className='head'>{productData.name}</h1>
          <div className='images-star'>
            <img src={assets.star_icon} alt='' className='img-1' />
            <img src={assets.star_icon} alt='' className='img-2' />
            <img src={assets.star_icon} alt='' className='img-3' />
            <img src={assets.star_icon} alt='' className='img-4' />
            <img src={assets.star_dull_icon} alt='' className='img-5' />
            <p className='p-tag'>(122)</p>
          </div>
          <p className='p-tag-2'>
            {currency}
            {productData.price}
          </p>
          <p className='p-tag-3'>{productData.description}</p>

          <div className='btns'>
            <p className='p-tag-4'>select sizes</p>
            <div className='btn-1'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setsizes(item)}
                  key={index}
                  className={`classss ${
                    item === sizes ? 'border-orange-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, sizes)} // ✅ fixed
            className='add-to-cart'
          >
            Add to cart
          </button>

          <hr className='hr-tag' />
          <div className='product-details'>
            <p>100% original product.</p>
            <p>Cash on delivery is availibe on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      <div className='product-description'>
        <div className='description-head'>
          <b className='tag'>Description</b>
          <p className='p-tagg'>Reviews</p>
        </div>
        <div className='description-para'>
          <p className='p-tagg1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            repellendus esse fuga at, sequi, velit saepe sint, porro vel
            architecto incidunt quasi eos. Adipisci aperiam eum nam non iste
            pariatur.
          </p>
          <p className='p-tagg2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quia, vitae numquam sunt molestiae non laudantium velit ad
            asperiores iusto ut corrupti praesentium cupiditate molestias
            possimus nostrum saepe voluptatum tenetur!
          </p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subcategory={productData.subcategory}
      />
    </div>
  ) : (
    <div className='opacity-0'>Loading .....</div>
  );
}

export default Product;
