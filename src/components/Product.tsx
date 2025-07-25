import React from "react";
import cart from "../assets/icons/white-cart.png";
import wishList from "../assets/icons/Vector (3).png";
import yellowStar from "../assets/icons/yellowStar.png";
import grayStar from "../assets/icons/grayStar.png";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  image: string;
  category: string;
  addToCart?: (item: ProductProps) => void;
  addToWishList?: (item: ProductProps) => void;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  price,
  oldPrice,
  discount,
  rating,
  image,
  category,
  addToCart,
  addToWishList,
}) => {
  return (
    <div className="w-1/5 h-[250px] border border-gray-200 p-3 relative">
      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
        {discount}%
      </span>

      <img
        src={wishList}
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() =>
          addToWishList &&
          addToWishList({ id, name, price, oldPrice, discount, rating, image, category })
        }
      />

      <img src={image} alt={name} className="w-full h-[100px] object-contain mb-2" />

      <h4 className="text-xs font-medium mb-1">{name}</h4>

      <div className="flex items-center gap-[2px] mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={i}
            src={i < rating ? yellowStar : grayStar}
            alt="star"
            className="w-3 h-3"
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-600 font-bold">${price}</span>
        <del className="text-gray-400 text-sm">${oldPrice}</del>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="bg-green-500 text-white text-sm px-2 py-1 rounded hover:bg-green-700"
          onClick={() =>
            addToCart &&
            addToCart({ id, name, price, oldPrice, discount, rating, image, category })
          }
        >
          <img src={cart} />
        </button>
        <label className="text-green-600 text-xs font-semibold">IN STOCK</label>
      </div>
    </div>
  );
};

export default Product;
