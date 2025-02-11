import AuthFormWrapper from "../../components/AuthFormWrapper";
import Button from "../../components/button";
import Input from "../../components/input";

const SignUp = () => {
  return (
    <AuthFormWrapper
      title="register"
      subtitle="Please fill in the fields below:"
      type="signup"
    >
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email" />
      <Input placeholder="password" />
      <Input placeholder="Confirm password" />
      <Button className="mt-2">Create</Button>
    </AuthFormWrapper>
  );
};

export default SignUp;
