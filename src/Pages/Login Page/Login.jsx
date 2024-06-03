import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../Social Login/SocialLogin";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);

        toast.error(error.message);
      });
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Flow | Login</title>
      </Helmet>
      <form
        onSubmit={handleLogin}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            placeholder="name@gmail.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            type="password"
            required
            shadow
          />
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
            <SocialLogin></SocialLogin>
          </p>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
