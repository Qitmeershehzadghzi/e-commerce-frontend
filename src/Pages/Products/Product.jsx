import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../assets/frontend_assets/assets";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [sizes, setsizes] = useState("");

  const fetchProductData = async () => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      if (item.images && item.images.length > 0) {
        setImage(item.images[0]);
      }
      setProductData(item);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
      {/* Product Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col md:flex-row gap-6 w-full lg:w-1/2">
          {/* Thumbnail Images */}
          <div className="flex md:flex-col gap-4">
            {productData.images &&
              productData.images.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setImage(img)}
                  src={img}
                  alt={`product-${index}`}
                  className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    img === image ? "border-indigo-500" : "border-gray-300"
                  }`}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={image}
              alt="Main Product"
              className="w-full h-[400px] object-contain rounded-2xl shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex-1 space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {productData.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-5 h-5" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-5 h-5" />
            <p className="text-gray-500 text-sm">(122 reviews)</p>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-indigo-600">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          {/* Sizes */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setsizes(item)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    item === sizes
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300 hover:border-indigo-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, sizes)}
            className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-md font-semibold transition-transform duration-300 hover:scale-105"
          >
            Add to Cart
          </button>

          {/* Product details */}
          <hr className="my-4" />
          <div className="text-gray-600 text-sm space-y-1">
            <p>✅ 100% original product</p>
            <p>💵 Cash on delivery available</p>
            <p>🔄 Easy return & exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description / Reviews Section */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
        <div className="flex gap-8 border-b pb-2 mb-4">
          <b className="text-indigo-600 cursor-pointer">Description</b>
          <p className="text-gray-500 cursor-pointer">Reviews</p>
        </div>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            repellendus esse fuga at, sequi, velit saepe sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quia, vitae numquam sunt molestiae non laudantium velit ad.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <RelatedProducts
          category={productData.category}
          subcategory={productData.subcategory}
        />
      </div>
    </div>
  ) : (
    <div className="text-center py-20 text-gray-500">Loading...</div>
  );
}

export default Product;
