import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import location from "../assets/icons/Vector.png";
import search from "../assets/icons/Vector (1).png";
import profile from "../assets/icons/Vector (2).png";
import wishList from "../assets/icons/Vector (3).png";
import cart from "../assets/icons/Vector (4).png";

function Nav() {
  return (
    <div className="h-[210px] w-full flex flex-col">
      <div className="h-[41px] w-full bg-violet-900 flex items-center justify-center gap-[135px]">
        <p className="text-white text-xs font-semibold">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
        </p>
        <p className="text-white text-xs font-light">
          Until the end of the sale: <span className="font-bold text-lg"> 63</span> days
          <span className="font-bold text-lg">09</span> hours
          <span className="font-bold text-lg">50</span> minutes
          <span className="font-bold text-lg">50</span> sec
        </p>
      </div>

      <div className="h-[41px] w-full flex items-center justify-center border-b-2 border-gray-200 gap-[495px] text-gray-400 text-xs font-medium">
        <div className="flex gap-[10.5px]">
          <Link to="*">About Us</Link>
          <Link to="/login">My account</Link>
          <Link to="/wishlist">Wishlist</Link>
          <label>|</label>
          <p>
            We deliver to you every day from <span className="text-red-500">7:00 to 23:00</span>
          </p>
        </div>
        <div className="flex gap-[21.75px]">
          <label>English</label>
          <label>USD</label>
          <Link to="*">Order Tracking</Link>
        </div>
      </div>

      <div className="h-[79px] w-full flex items-center justify-center border-b-2 border-gray-200 gap-[18.75px] text-gray-400 text-xs font-medium">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <img src={location} alt="location" />
        <p>
          Deliver to
          <br />
          <span className="text-black">all</span>
        </p>
        <div className="rounded-md h-[46px] w-[660px] bg-gray-200 flex items-center justify-center gap-[300px]">
          <input
            type="text"
            placeholder="Search for products, categories or brands..."
            className="text-gray-900 w-[300px]"
          />
          <img src={search} alt="search" />
        </div>
        <Link to="/login"><img src={profile} alt="profile" /></Link>
        
        <Link to="/login" className="text-xs">
          Sign In
          <br />
          <span className="text-black font-bold">Account</span>
        </Link>
        <Link to="/wishlist">
          <img src={wishList} alt="wishlist" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
      </div>

      <div className="h-[48px] w-full flex items-center justify-center border-b-2 border-gray-200 gap-[513px] text-gray-800 text-xs font-semibold ">
        <div className="flex gap-[18px]">
          <Link to="*">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Fruits & Vegetables</Link>
          <Link to="/">Beverages</Link>
          <Link to="*">Blog</Link>
          <Link to="*">Contact</Link>
        </div>
        <div className="flex gap-[21.75px]">
          <Link to="*">Trending Products</Link>
          <label className="text-red-600">
            Almost Finished <span className="text-white bg-red-500 text-xs p-0.5">SALE</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Nav;
