import React from "react";
import type { ProductProps } from "./Product";
import { Link } from "react-router-dom";
import empty from "../assets/images/SVG.png"

interface WishListProps {
  wishListItems: ProductProps[];
}

const WishList: React.FC<WishListProps> = ({ wishListItems }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="w-[1140px] h-[50px]  flex items-center text-gray-400 font-bold text-sm px-1">
        <pre>
          Home {">"} <span className="text-gray-900">WishList</span>
        </pre>
      </div>
      {wishListItems.length === 0 ? (
        <div className="w-full h-[400px] flex flex-col gap-14 items-center">
          <img src={empty} className="w-[140px] h-[140px]" />
          <div className="w-[600px] h-[50px] border border-gray-400 text-red-500 flex items-center justify-center">
            Your wishList is currently empty.
          </div>
          <button className="bg-black text-white p-3 rounded-md">
            <Link to="/">Return to shop</Link>
          </button>
        </div>
      ) : (
        <div className="w-[800px] flex items-center flex-wrap">
          {wishListItems.map((item) => (
            <div key={item.id} className="w-1/5 h-[250px] border border-gray-200 p-3 relative">
      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
        {item.discount}%
      </span>


      <img src={item.image} className="w-full h-[100px] object-contain mb-2" />

      <h4 className="text-xs font-medium mb-1">{item.name}</h4>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-600 font-bold">${item.price}</span>
        <del className="text-gray-400 text-sm">${item.oldPrice}</del>
      </div>

      <label className="text-green-600 text-xs font-semibold">
                IN CART
              </label>
    </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
