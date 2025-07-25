import phone from "../assets/icons/Vector (5).png";
import mail from "../assets/icons/Vector (6).png";
import facebook from "../assets/icons/Vector (7).png";
import instagram from "../assets/icons/Vector (8).png";
import linkedin from "../assets/icons/Vector (9).png";

import pay1 from "../assets/icons/Vector (10).png";
import pay2 from "../assets/icons/Group.png";
import pay3 from "../assets/icons/Group (1).png";
import pay4 from "../assets/icons/Clip path group.png";
import pay5 from "../assets/icons/List Item SVG.png";
function Footer() {
    return (
        <div className="w-full flex flex-col bg-gray-100 text-xs text-gray-600 mt-10">
            <div className="h-[150px] w-full flex items-center justify-center border-b-2 border-gray-300 gap-[calc(380px*0.75)] px-8">
                <div>
                    <p className="text-black text-xl font-bold">Join our newsletter for £10 offs</p>
                    <p className="text-gray-400 text-xs font-light w-[300px]">Register now to get latest updates on promotions &
                        coupons.Don’t worry, we not spam!</p>
                </div>
                <div>
                    <div className="w-[410px] flex justify-between bg-white rounded-md border border-gray-400">
                        <input
                            placeholder="Enter your email address"
                            className="w-[220px] h-[36px] bg-none px-2"
                        />
                        <button className="bg-violet-900 text-white px-4 py-1 rounded-md text-xs">SEND</button>
                    </div>
                    <p className="text-gray-400 text-xs font-light w-[410px]">By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                </div>

            </div>

            <div className="h-[250px] w-full flex items-start justify-center gap-[calc(90px*0.75)] py-8 px-10">
                <div className="flex flex-col gap-1 w-[180px]">
                    <p className="font-bold text-gray-800">Do You Need Help ?</p>
                    <p>Autolesigen syr. Nek därasak fribobmka. När antipol kynoda nyant. Presea iflomoka.</p>
                    <br />
                    <div className="flex items-center gap-[15px]">
                        <img className="w-[20px] h-[20px]" src={phone} />
                        <p>
                            Monday-Friday: 08am-9pm
                            <br />
                            <span className="font-bold text-gray-800 text-lg">0 800 300-353</span>
                        </p>
                    </div>
                    <br />
                    <div className="flex items-center gap-[15px]">
                        <img className="w-[20px] h-[20px]" src={mail} />
                        <p>
                            Need help with your order?
                            <br />
                            <a href="mailto:" className="font-bold text-gray-800 text-lg">info@example.com</a>
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-1 w-[160px]">
                    <p className="font-bold text-gray-800">Make Money with Us</p>
                    <label>Sell on Grogin</label>
                    <label>Sell Your Services on Grogin</label>
                    <label>Sell on Grogin Business</label>
                    <label>Sell Your Apps on Grogin</label>
                    <label>Become an Affiliate</label>
                    <label>Advertise Your Products</label>
                    <label>Self-Publish with Us</label>
                    <label>Become an Blowwe Vendor</label>
                </div>

                <div className="flex flex-col gap-1 w-[160px]">
                    <p className="font-bold text-gray-800">Let Us Help You</p>
                    <label>Accessibility Statement</label>
                    <label>Your Orders</label>
                    <label>Returns & Replacements</label>
                    <label>Shipping Rates & Policies</label>
                    <label>Refund and Returns Policy</label>
                    <label>Privacy Policy</label>
                    <label>Terms and Conditions</label>
                    <label>Cookie Settings</label>
                    <label>Help Center</label>
                </div>

                <div className="flex flex-col gap-1 w-[160px]">
                    <p className="font-bold text-gray-800">Get to Know Us</p>
                    <label>Careers for Grogin</label>
                    <label>About Grogin</label>
                    <label>Investor Relations</label>
                    <label>Grogin Devices</label>
                    <label>Customer reviews</label>
                    <label>Social Responsibility</label>
                    <label>Store Locations</label>
                </div>

                <div className="flex flex-col gap-2 w-[160px]">
                    <p className="font-bold text-gray-800">Download our app</p>
                    <label>Download App Get <span className="font-bold">-10% Discount</span></label>
                    <label>Download App Get <span className="font-bold">-20% Discount</span></label>
                    <p className="font-bold text-gray-800">Follow us on social media:</p>
                    <div className="flex gap-[calc(16px*0.75)] mt-2">
                        <a className="w-10 h-10 bg-white rounded-md flex items-center justify-center"><img src={facebook} /></a>
                        <a className="w-10 h-10 bg-white rounded-md flex items-center justify-center"><img src={instagram} /></a>
                        <a className="w-10 h-10 bg-white rounded-md flex items-center justify-center"><img src={linkedin} /></a>
                    </div>
                </div>
            </div>

            <div className="h-[64px] w-full flex items-center justify-between px-[calc(80px*0.75)] border-t-2 border-gray-200">

                <p className="text-gray-500">
                    Copyright 2024 © Jinstore WooCommerce WordPress Theme. All rights reserved. Powered by <span className="font-bold">BlackRise Themes</span>.
                </p>
                <div className="flex gap-[calc(24px*0.75)] text-gray-500 font-medium">
                    <label>Terms and Conditions</label>
                    <label>Privacy Policy</label>
                    <label>Order Tracking</label>
                </div>
            </div>
            <div className="h-[50px] w-full flex items-center gap-10 px-[calc(80px*0.75)] border-t-2 border-gray-200">
                <img src={pay1} />
                <img src={pay2} />
                <img src={pay3} />
                <img src={pay4} />
                <img src={pay5} />
            </div>
        </div>
    );
}

export default Footer;