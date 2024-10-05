import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="flex flex-col justify-center h-screen bg-slate-200">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an Account</div>
          <div className="text-slate-500">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-black underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function LabelledInput(label, placeholder, onChange, value) {
  return;
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      type="text"
      id="first_name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required
    />
  </div>;
}
