import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="h-[500px] w-full pb-16 flex flex-col items-center justify-between">
      <div className="w-[1140px] h-[50px] border-b-2 border-gray-200 flex items-center text-gray-400 font-bold text-xs px-1">
        <pre>
          Home {">"} <span className="text-gray-900">My account</span>
        </pre>
      </div>
      <div className="w-[440px] flex flex-col items-center gap-[calc(20px*0.75)]">
        <div className="flex gap-6 text-lg font-semibold">
          <p className="text-black border-b-2 border-black pb-1" >Login</p>
          <Link to="/register" className="text-gray-400 cursor-pointer">Register</Link>
        </div>

        <p className="text-center text-sm text-gray-600 px-2">If you have an account, sign in with your username or email address.</p>

        <form className="flex flex-col w-full gap-[calc(14px*0.75)]">
          <label className="text-sm font-medium">Username or email address *</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md h-[38px] px-2 text-sm"
          />

          <label className="text-sm font-medium">Password *</label>
          <input
            type="password"
            className="border border-gray-300 rounded-md h-[38px] px-2 text-sm"
          />
          <div className="flex justify-between items-center text-xs">
            <p>
              <input type="checkbox"/> Remember me
            </p>
            <a href="#" className="text-blue-600">Lost your password?</a>
          </div>
          <button
            type="submit"
            className="h-[38px] mt-2 bg-violet-700 text-white rounded-md text-sm font-semibold"
          >
            Log in

          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;