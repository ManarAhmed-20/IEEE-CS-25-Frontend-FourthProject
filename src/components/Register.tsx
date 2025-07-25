import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-[700px] w-full pb-16 flex flex-col items-center justify-between">
      <div className="w-[1140px] h-[50px] border-b-2 border-gray-200 flex items-center text-gray-400 font-bold text-xs px-1">
        <pre>
          Home {">"} <span className="text-gray-900">My account</span>
        </pre>
      </div>
      <div className="w-[440px] flex flex-col items-center gap-[calc(20px*0.75)]">
        <div className="flex gap-6 text-lg font-semibold">
          <Link to="/login" className="text-gray-400 cursor-pointer">Login</Link>
          <p className="text-black border-b-2 border-black pb-1">Register</p>
        </div>

        <p className="text-center text-sm text-gray-600 px-2">
          There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.
        </p>

        <form className="flex flex-col w-full gap-[calc(14px*0.75)]">
          <label className="text-sm font-medium">Username *</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md h-[38px] px-2 text-sm"
          />

          <label className="text-sm font-medium">Email address *</label>
          <input
            type="email"
            className="border border-gray-300 rounded-md h-[38px] px-2 text-sm"
          />

          <label className="text-sm font-medium">Password *</label>
          <input
            type="password"
            className="border border-gray-300 rounded-md h-[38px] px-2 text-sm"
          />

          <div className="flex flex-col gap-1 text-sm mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="role" defaultChecked />
              I am a customer
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="role" />
              I am a vendor
            </label>
          </div>

          <p className="text-[12px] text-gray-500 mt-1">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-blue-500 underline cursor-pointer">privacy policy</span>.
          </p>

          <button
            type="submit"
            className="h-[38px] mt-2 bg-violet-700 text-white rounded-md text-sm font-semibold"
          >
            Register

          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;