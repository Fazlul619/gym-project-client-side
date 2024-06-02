import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Flow | Login</title>
      </Helmet>
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <div className="flex items-center">
          <Label htmlFor="agree" className="flex">
            Create an account?&nbsp;
            <Link
              to="/register"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Register
            </Link>
          </Label>
        </div>
        <Button outline type="submit" className="font-bold">
          Login
        </Button>
        <div className="flex items-center justify-center">
          <p className="w-full">
            <Button outline className="w-full">
              <FcGoogle className="text-2xl" />
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
