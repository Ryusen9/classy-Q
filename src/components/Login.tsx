import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen w-full border-2 flex items-center justify-center rounded-2xl">
      <SignIn />
    </div>
  );
};
export default Login;
