import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../Social Login/SocialLogin";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          //  create user entry in database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user add");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
        });
    });
  };
  return (
    <div>
      <Helmet>
        <title>Fitness Flow | Register</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mb-10 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Enter your name"
            shadow
          />
          {errors.name && (
            <span className="text-red-600 font-semibold">Name is required</span>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="name@gmail.com"
            shadow
          />
          {errors.email && (
            <span className="text-red-600 font-semibold">
              Email is required
            </span>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Photo" />
          </div>
          <TextInput
            id="photo"
            type="text"
            {...register("photo", { required: true })}
            name="photo"
            placeholder="Photo Url"
            shadow
          />
          {errors.photo && (
            <span className="text-red-600 font-semibold">
              Photo is required
            </span>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 10,
            })}
            type="password"
            shadow
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600 font-semibold">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 font-semibold">
              Password must be 6 character
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600 font-semibold">
              Password must be less than 10 character
            </p>
          )}
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
        <div className="flex items-center gap-2">
          <Label htmlFor="agree" className="flex">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Login
            </Link>
          </Label>
        </div>

        <Button outline type="submit" className="font-bold">
          Register
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

export default Register;
