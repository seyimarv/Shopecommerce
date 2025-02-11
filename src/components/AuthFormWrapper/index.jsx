import PropTypes from "prop-types";
import { Link } from "react-router";
import Button from "../button";
import Divider from "../Divider"
import GoogleIcon from "../../assets/google";

const AuthFormWrapper = ({ title, subtitle, children, type = "login" }) => {
  return (
    <div className="flex justify-center my-23 container">
      <div className="max-w-md w-full">
        <h2 className="text-2xl tracking-wide uppercase">{title}</h2>
        <p className="my-4 text-md">{subtitle}</p>
        <div className="flex flex-col gap-3 pt-4">{children}</div>
        <div className="flex items-center gap-3 py-2">
          <Divider /> <p className="text-gray-400 font-light">Or continue with</p> <Divider />
        </div>
        <Button className="w-full bg-secondary" variant="outline">
          <div className="flex gap-2 items-center justify-center" >
            <GoogleIcon />
            <span>Log in</span>
          </div>
        </Button>

        <p className="text-md text-gray-500 mt-4 font-light">
          {type === "login" ? (
            <>
              Dont have an account yet?{" "}
              <Link
                to="/register"
                className="text-gray-900 hover:underline ml-1"
              >
                Create account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-gray-900 hover:underline ml-1" >
                Log in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

AuthFormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["login", "register"]),
};

export default AuthFormWrapper;
