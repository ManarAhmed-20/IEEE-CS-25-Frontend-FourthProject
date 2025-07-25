import { Link } from "react-router-dom";
import notfound from "../assets/images/404.png.png"
function NotFound() {
    return (
        <div className="w-full h-[600px] p-20 flex flex-col items-center gap-5">
            <img src={notfound} className="w-[700px] h-[250px]" />
            <h2 className="font-extrabold text-[40px]">That Page Can’t Be Found</h2>
            <p className="text-base text-gray-400 text-center w-[320px]">It looks like nothing was found at this location. Maybe try to
                search for what you are looking for?</p>
            <button className="w-[125px] h-30 p-2 bg-violet-800 rounded-md text-white text-xs font-bold">
                <Link to="/">Go To Homepage</Link>
            </button>
        </div>
    )
}
export default NotFound;