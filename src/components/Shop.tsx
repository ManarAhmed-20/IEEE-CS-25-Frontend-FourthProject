import React, { useState } from "react";
import heroImg from "../assets/images/bg.png";
import Product from "./Product";
import type { ProductProps } from "./Product";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import p10 from "../assets/images/p10.png";
import p11 from "../assets/images/p11.png";
import p12 from "../assets/images/p12.png";
import p13 from "../assets/images/p13.png";
import p14 from "../assets/images/p14.png";
import p15 from "../assets/images/p15.png";
import p16 from "../assets/images/p16.png";

import p17 from "../assets/images/p17.png";
import p18 from "../assets/images/p18.png";
import p19 from "../assets/images/p19.png";
import p20 from "../assets/images/p20.png";
import p21 from "../assets/images/p21.png";
import p22 from "../assets/images/p22.png";
import p23 from "../assets/images/p23.png";
import p24 from "../assets/images/p24.png";
import p25 from "../assets/images/p25.png";
import p26 from "../assets/images/p26.png";
import p27 from "../assets/images/p27.png";
import p28 from "../assets/images/p28.png";
import p29 from "../assets/images/p29.png";
import p30 from "../assets/images/p30.png";
import p31 from "../assets/images/p31.png";



interface ShopProps {
  addToCart: (item: ProductProps) => void;
  addToWishList: (item: ProductProps) => void;
}

function Shop(props: ShopProps) {
  const { addToCart, addToWishList } = props;
    const [price, setPrice] = useState<number>(30);
    const [selectedCategory, setSelectedCategory] = useState("Fruits & Vegetables");

    const defaultPrice = 30;
    const defaultCategory = "";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleClear = () => {
        setPrice(defaultPrice);
        setSelectedCategory(defaultCategory);
        console.log("Filters cleared");
    };
    const clearCategory = () => {
        setSelectedCategory(defaultCategory);
        console.log("cate cleared");
    };

    const products: ProductProps[] = [
        {
            id: 1,
            name: "Yellow Potatoes Whole Fresh, 5lb Bag",
            price: 0.5,
            oldPrice: 1.98,
            discount: 75,
            rating: 3,
            image: p1,
            category: "Fruits & Vegetables",
        },
        {
            id: 2,
            name: "Large Bagged Oranges",
            price: 0.89,
            oldPrice: 1.78,
            discount: 50,
            rating: 4,
            image: p2,
            category: "Fruits & Vegetables",
        },
        {
            id: 3,
            name: "Strawberries – 1lb",
            price: 1.5,
            oldPrice: 2.15,
            discount: 31,
            rating: 3,
            image: p3,
            category: "Fruits & Vegetables",
        },
        {
            id: 4,
            name: "Simple Kitchen FD Sliced Strawberries – 1.08lb",
            price: 21.9,
            oldPrice: 24.9,
            discount: 13,
            rating: 3,
            image: p4,
            category: "Fruits & Vegetables",
        },
        {
            id: 5,
            name: "Peach – each",
            price: 0.75,
            oldPrice: 1.75,
            discount: 58,
            rating: 4,
            image: p5,
            category: "Fruits & Vegetables",
        },
        {
            id: 6,
            name: "Marketside Fresh Organic Bananas, Bunch",
            price: 0.89,
            oldPrice: 1.98,
            discount: 55,
            rating: 4,
            image: p6,
            category: "Fruits & Vegetables",
        },
        {
            id: 7,
            name: "Large Garden Spinach & Herb Wrap Tortillas",
            price: 27.9,
            oldPrice: 32.89,
            discount: 16,
            rating: 4,
            image: p7,
            category: "Fruits & Vegetables",
        },
        {
            id: 8,
            name: "Halloween Harvest Caramel Apple Soft Caramels",
            price: 19.37,
            oldPrice: 21.37,
            discount: 10,
            rating: 3,
            image: p8,
            category: "Fruits & Vegetables",
        },
        {
            id: 9,
            name: "Fresh Purple Eggplant",
            price: 2.99,
            oldPrice: 3.89,
            discount: 26,
            rating: 4,
            image: p9,
            category: "Fruits & Vegetables",
        },
        {
            id: 10,
            name: "Fresh Pomegranate, Each",
            price: 1.5,
            oldPrice: 2.99,
            discount: 50,
            rating: 3,
            image: p10,
            category: "Fruits & Vegetables",
        },
        {
            id: 11,
            name: "Fresh Lemon, Each",
            price: 0.5,
            oldPrice: 1.89,
            discount: 72,
            rating: 4,
            image: p11,
            category: "Fruits & Vegetables",
        },
        {
            id: 12,
            name: "Fresh Cauliflower, Each",
            price: 12.79,
            oldPrice: 14.79,
            discount: 14,
            rating: 3,
            image: p12,
            category: "Fruits & Vegetables",
        },
        {
            id: 13,
            name: "Fresh Broccoli Crowns, Each",
            price: 11.54,
            oldPrice: 17.88,
            discount: 35,
            rating: 4,
            image: p13,
            category: "Fruits & Vegetables",
        },
        {
            id: 14,
            name: "Blackberries – 6oz",
            price: 2.99,
            oldPrice: 4.99,
            discount: 41,
            rating: 3,
            image: p14,
            category: "Fruits & Vegetables",
        },
        {
            id: 15,
            name: "30g Protein Shake – Salted Caramel – 11 fl oz 4pk",
            price: 11.99,
            oldPrice: 12.99,
            discount: 8,
            rating: 4,
            image: p15,
            category: "Fruits & Vegetables",
        },
        {
            id: 16,
            name: "30g Protein Shake – Salted Caramel – 11 fl oz 4pk",
            price: 11.99,
            oldPrice: 12.99,
            discount: 8,
            rating: 4,
            image: p16,
            category: "Fruits & Vegetables",
        },
        {
            id: 17,
            name: "100 Percent Apple Juice – 64 fl oz Bottle",
            price: 0.50,
            oldPrice: 1.98,
            discount: 75,
            rating: 4,
            image: p17,
            category: "Beverages",
        },
        {
            id: 18,
            name: "Simply Orange Pulp Free Juice – 52 fl oz",
            price: 2.45,
            oldPrice: 4.13,
            discount: 41,
            rating: 4,
            image: p18,
            category: "Beverages",
        },
        {
            id: 19,
            name: "Vitaminwater zero sugar squeezed electrolyte water – 6 pack",
            price: 4.99,
            oldPrice: 8.99,
            discount: 45,
            rating: 4,
            image: p19,
            category: "Beverages",
        },
        {
            id: 20,
            name: "A&W Caffeine-Free, Low Sodium Root Beer Soda Pop – 12 Pack",
            price: 9.50,
            oldPrice: 11.20,
            discount: 15,
            rating: 3,
            image: p20,
            category: "Beverages",
        },
        {
            id: 21,
            name: "Tostitos Pumpkins – 11oz",
            price: 0.75,
            oldPrice: 1.75,
            discount: 57,
            rating: 4,
            image: p21,
            category: "Beverages",
        },
        {
            id: 22,
            name: "STōK Black Unsweetened Cold Brew Coffee – 48 fl oz",
            price: 9.19,
            oldPrice: 11.99,
            discount: 23,
            rating: 4,
            image: p22,
            category: "Beverages",
        },
        {
            id: 23,
            name: "Starbucks Keurig K-Cup Holiday Blend – 22Ct 8.8oz",
            price: 5.79,
            oldPrice: 8.99,
            discount: 35,
            rating: 4,
            image: p23,
            category: "Beverages",
        },
        {
            id: 24,
            name: "Starbucks by Nespresso Vertuo Line Pods Medium Roast – 8ct",
            price: 3.99,
            oldPrice: 4.99,
            discount: 21,
            rating: 4,
            image: p24,
            category: "Beverages",
        },
        {
            id: 25,
            name: "Smartwater Bottles – 6pk, 16.9 fl oz",
            price: 3.99,
            oldPrice: 4.99,
            discount: 21,
            rating: 3,
            image: p25,
            category: "Beverages",
        },
        {
            id: 26,
            name: "Similac Advance Powder Baby Formula with Iron – 30.8 oz",
            price: 25.83,
            oldPrice: 35.84,
            discount: 28,
            rating: 4,
            image: p26,
            category: "Beverages",
        },
        {
            id: 27,
            name: "Schweppes Diet Ginger Ale – 12 fl oz Cans – Pack of 24",
            price: 1.99,
            oldPrice: 2.99,
            discount: 33,
            rating: 3,
            image: p27,
            category: "Beverages",
        },
        {
            id: 28,
            name: "S.Pellegrino Sparkling Natural Mineral Water, 16.9 fl oz – 12 pack",
            price: 1.99,
            oldPrice: 2.99,
            discount: 34,
            rating: 4,
            image: p28,
            category: "Beverages",
        },
        {
            id: 29,
            name: "Red Bay Coffee Coltrane Medium Roast Coffee – 12oz",
            price: 11.99,
            oldPrice: 14.99,
            discount: 21,
            rating: 4,
            image: p29,
            category: "Beverages",
        },
        {
            id: 30,
            name: "Real Plant-Powered Protein Shake – Double Chocolate – 11 fl oz",
            price: 14.89,
            oldPrice: 17.99,
            discount: 17,
            rating: 3,
            image: p30,
            category: "Beverages",
        },
        {
            id: 31,
            name: "Starbucks Black Unsweetened Cold Brew – 11 fl oz",
            price: 5.22,
            oldPrice: 6.29,
            discount: 17,
            rating: 4,
            image: p31,
            category: "Beverages",
        },

    ];
    const filteredProducts = products.filter(
        (product) =>
            product.category === selectedCategory && product.price <= price
    );

    return (
        <div className="w-full h-[1270px] flex flex-col  ">
            <pre className="text-gray-400 pl-26">
                Home {">"} <span className="text-gray-900 font-bold">Shop</span>
            </pre>
            <div className="w-full h-full flex justify-center mt-[30px] gap-10">
                <form onSubmit={handleSubmit} className="w-[300px] space-y-6 text-sm">
                    <div>
                        <h3 className="font-semibold mb-2">Widget price filter</h3>
                        <div className="flex items-center gap-10">
                            <div className="w-[90px] p-1 border-2 rounded text-sm border-gray-300">${0}</div>
                            <span>-</span>
                            <div className="w-[90px] p-1 border-2 rounded text-sm border-gray-300">${price}</div>
                        </div>
                        <br />
                        <input
                            type="range"
                            min={0}
                            max={30}
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                            className="w-full"
                        />
                        <div className="flex items-center justify-between text-black text-xs mt-1">
                            <span>Price: $0 — $30</span>
                            <button type="submit" className="mt-2 bg-gray-200 text-sm px-3 py-1 rounded">Filter</button>
                        </div>

                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Product Categories</h3>
                        <div className="flex flex-col space-y-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Fruits & Vegetables"
                                    checked={selectedCategory === "Fruits & Vegetables"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />
                                <span >Fruits & Vegetables</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Baby & Pregnancy"
                                    checked={selectedCategory === "Baby & Pregnancy"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />
                                <span>Baby & Pregnancy</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Beverages"
                                    checked={selectedCategory === "Beverages"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Beverages</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Meats & Seafood"
                                    checked={selectedCategory === "Meats & Seafood"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Meats & Seafood</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Biscuits & Snacks"
                                    checked={selectedCategory === "Biscuits & Snacks"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />
                                <span >Biscuits & Snacks</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Breads & Bakery"
                                    checked={selectedCategory === "Breads & Bakery"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Breads & Bakery</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Breakfast & Dairy"
                                    checked={selectedCategory === "Breakfast & Dairy"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Breakfast & Dairy</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Frozen Foods"
                                    checked={selectedCategory === "Frozen Foods"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Frozen Foods</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Grocery & Staples"
                                    checked={selectedCategory === "Grocery & Staples"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />
                                <span>Grocery & Staples</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Healthcare"
                                    checked={selectedCategory === "Healthcare"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Healthcare</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Household Needs"
                                    checked={selectedCategory === "Household Needs"}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                />                                <span>Household Needs</span>
                                <span className="ml-auto text-gray-400 text-sm">+</span>
                            </label>


                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Filter by Color</h3>
                        <label className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                            <span>Green</span>
                            <span className="ml-auto text-gray-500">(1)</span>
                        </label>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Filter by Brands</h3>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-violet-700" />
                            <span>Fresh</span>
                            <span className="ml-auto text-gray-500">(1)</span>
                        </label>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Product Status</h3>
                        <div className="flex flex-col space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-violet-700" />
                                <span>In Stock</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-violet-700" />
                                <span>On Sale</span>
                            </label>
                        </div>
                    </div>
                </form>

                <div className="w-[800px] flex flex-col">
                    <div className="w-full flex gap-6">
                        <label className="cursor-pointer text-gray-700 font-medium text-sm">
                            <span onClick={handleClear} className="font-bold text-black">X </span>
                            Clear filters
                        </label>
                        <label className="cursor-pointer text-gray-700 font-medium text-sm">
                            <span onClick={clearCategory} className="font-bold text-black">X </span>
                            {selectedCategory}
                        </label>
                    </div>
                    <div className="w-full h-[200px] bg-cover bg-center bg-no-repeat mt-3 rounded-sm p-5 flex-col gap-10" style={{ backgroundImage: `url(${heroImg})` }}>
                        <label className="w-[50px] h-12 rounded-full bg-orange-200 text-xs p-1">Only This Week</label>
                        <h2 className="text-[25px] text-black font-bold w-[400px]">Grocery store with different treasures</h2>
                        <p className="text-gray-400 w-[300px] text-xs">We have prepared special discounts for you on grocery products...</p>
                        <button className="rounded-full bg-white text-xs p-2">Shop Now</button>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        {filteredProducts.map((product) => (
                            <Product key={product.id} {...product} addToCart={addToCart} addToWishList={addToWishList} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Shop;