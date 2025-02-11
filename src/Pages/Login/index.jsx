import { Link } from "react-router";
import AuthFormWrapper from "../../components/AuthFormWrapper";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  return (
    <AuthFormWrapper
      title="Login"
      subtitle="Please enter your e-mail and password:"
    >
      <Input placeholder="Email" />
      <Input placeholder="password" />
      <Link className="text-sm font-light">Forgot your password?</Link>
      <Button className="mt-2">Log in</Button>
    </AuthFormWrapper>
  );
};

export default Login;
