import { Auth } from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <Auth />
        </div>
        {/* 
         md:invisible:- Put this in final code in the quote Tailwind classname */}
        <div className="visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
